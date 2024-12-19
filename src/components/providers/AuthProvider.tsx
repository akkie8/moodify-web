'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { User } from '@supabase/supabase-js';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

type Profile = {
  id: string;
  name: string | null;
  updated_at: string | null;
};

type UserWithProfile = User & {
  profile: Profile | null;
};

type AuthContextType = {
  user: UserWithProfile | null;
  loading: boolean;
  updateProfile: (updates: Partial<Profile>) => Promise<{ error: Error | null }>;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  updateProfile: async () => ({ error: null }),
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserWithProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClientComponentClient();

  const fetchUserProfile = useCallback(
    async (authUser: User) => {
      try {
        // セッション確認
        const {
          data: { session },
        } = await supabase.auth.getSession();
        if (!session) {
          setUser(null);
          setLoading(false);
          return;
        }

        // プロフィール取得
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', authUser.id)
          .maybeSingle();

        // プロフィール取得エラー時
        if (error) {
          console.error('Profile fetch error:', error);
          await supabase.auth.signOut();
          setUser(null);
          setLoading(false);
          return;
        }

        // プロフィールが存在しない場合は作成
        if (!data) {
          const { data: newProfile, error: insertError } = await supabase
            .from('profiles')
            .insert([
              {
                id: authUser.id,
                name: null,
                updated_at: new Date().toISOString(),
              },
            ])
            .select('*')
            .single();

          if (insertError) {
            console.error('Profile creation error:', insertError);
            await supabase.auth.signOut();
            setUser(null);
            setLoading(false);
            return;
          }

          setUser({
            ...authUser,
            profile: newProfile,
          });
        } else {
          setUser({
            ...authUser,
            profile: data,
          });
        }
      } catch (error) {
        console.error('Error in profile management:', error);
        await supabase.auth.signOut();
        setUser(null);
      } finally {
        setLoading(false);
      }
    },
    [supabase]
  );

  useEffect(() => {
    const initializeAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session?.user) {
        await fetchUserProfile(session.user);
        if (window.location.pathname === '/login') {
          window.location.href = '/dashboard';
        }
      } else {
        setLoading(false);
      }
    };

    initializeAuth();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        await fetchUserProfile(session.user);
        if (window.location.pathname === '/login') {
          window.location.href = '/dashboard';
        }
      } else {
        setUser(null);
        setLoading(false);
        if (!window.location.pathname.startsWith('/login')) {
          window.location.href = '/login';
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [fetchUserProfile, supabase.auth]);

  const updateProfile = async (updates: Partial<Profile>) => {
    if (!user) return { error: new Error('No user') };

    try {
      const { error } = await supabase.from('profiles').upsert({
        id: user.id,
        ...updates,
        updated_at: new Date().toISOString(),
      });

      if (error) throw error;

      // プロフィールを再取得
      await fetchUserProfile(user);
      return { error: null };
    } catch (error) {
      console.error('Error updating profile:', error);
      return { error: error instanceof Error ? error : new Error('Unknown error') };
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, updateProfile }}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
