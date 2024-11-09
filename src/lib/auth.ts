import { User } from './types';

const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
};

export async function getCurrentUser(): Promise<User | null> {
  // In a real application, this would check the session and return the current user
  return mockUser;
}
