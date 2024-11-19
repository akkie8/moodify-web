'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';

const updateProfileSchema = z.object({
  displayName: z
    .string()
    .min(1, '表示名は必須です')
    .max(50, '表示名は50文字以内で入力してください'),
});

export async function updateProfile(prevState: unknown, formData: FormData) {
  const validatedFields = updateProfileSchema.safeParse({
    displayName: formData.get('displayName'),
  });

  if (!validatedFields.success) {
    return { success: false, errors: validatedFields.error.flatten().fieldErrors };
  }

  const { displayName } = validatedFields.data;

  try {
    // TODO: Update the user's display name in the database
    // This is a placeholder for the actual database update
    console.log('Updating display name to:', displayName);

    revalidatePath('/settings');
    return { success: true, message: '表示名が更新されました' };
  } catch (error) {
    console.error('Error updating display name:', error);
    return { success: false, message: '表示名の更新に失敗しました' };
  }
}

export async function deleteAllData() {
  try {
    // TODO: Delete all user data from the database
    // This is a placeholder for the actual data deletion
    console.log('Deleting all user data');

    revalidatePath('/settings');
    return { success: true, message: 'すべてのデータが削除されました' };
  } catch (error) {
    console.error('Error deleting user data:', error);
    return { success: false, message: 'データの削除に失敗しました' };
  }
}
