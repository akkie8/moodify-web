'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { updateProfile, deleteAllData } from '@/actions/user-settings';

export default function SettingsPage() {
  const router = useRouter();
  const [displayName, setDisplayName] = useState('');
  const [updateMessage, setUpdateMessage] = useState<{
    type: 'success' | 'error';
    content: string;
  } | null>(null);
  const [deleteMessage, setDeleteMessage] = useState<{
    type: 'success' | 'error';
    content: string;
  } | null>(null);

  const handleUpdateProfile = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const result = await updateProfile(null, formData);
    if (result.success) {
      setUpdateMessage({
        type: 'success',
        content: result.message || '表示名の更新に成功しました',
      });
    } else {
      setUpdateMessage({ type: 'error', content: result.message || '表示名の更新に失敗しました' });
    }
  };

  const handleDeleteData = async () => {
    if (window.confirm('本当にすべてのデータを削除しますか？この操作は取り消せません。')) {
      const result = await deleteAllData();
      if (result.success) {
        setDeleteMessage({ type: 'success', content: result.message });
      } else {
        setDeleteMessage({ type: 'error', content: result.message });
      }
    }
  };

  const handleLogout = () => {
    // TODO: Implement actual logout logic
    console.log('Logging out');
    router.push('/login');
  };

  return (
    <div className='container mx-auto px-4 py-12 flex justify-center items-center'>
      <Card className='w-96 mx-auto'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold'>設定</CardTitle>
        </CardHeader>
        <CardContent className='space-y-6'>
          <form onSubmit={handleUpdateProfile} className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='displayName'>表示名</Label>
              <Input
                id='displayName'
                name='displayName'
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder='新しい表示名を入力'
              />
            </div>
            <div className='flex justify-center'>
              <Button className='w-64' type='submit'>
                表示名を更新
              </Button>
            </div>
          </form>

          {updateMessage && (
            <div
              className={`flex items-center ${updateMessage.type === 'success' ? 'text-green-600' : 'text-red-600'}`}
            >
              {updateMessage.type === 'success' ? (
                <CheckCircle2 className='mr-2 h-4 w-4' />
              ) : (
                <AlertCircle className='mr-2 h-4 w-4' />
              )}
              {updateMessage.content}
            </div>
          )}

          <div className='pt-6 border-t flex justify-center'>
            <Button className='w-64' onClick={handleDeleteData} variant='destructive'>
              すべてのデータを削除
            </Button>
          </div>

          {deleteMessage && (
            <div
              className={`flex items-center ${deleteMessage.type === 'success' ? 'text-green-600' : 'text-red-600'}`}
            >
              {deleteMessage.type === 'success' ? (
                <CheckCircle2 className='mr-2 h-4 w-4' />
              ) : (
                <AlertCircle className='mr-2 h-4 w-4' />
              )}
              {deleteMessage.content}
            </div>
          )}
        </CardContent>
        <CardFooter>
          <div className='w-full flex justify-center'>
            <Button className='w-64' onClick={handleLogout} variant='outline'>
              ログアウト
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
