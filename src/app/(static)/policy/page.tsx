import Link from 'next/link';
import { Button } from '@/components/ui/button';
export default function PrivacyPolicy() {
  return (
    <div className='container mx-0 max-w-md px-4 py-10 text-sm leading-6 tracking-widest md:mx-auto md:max-w-xl'>
      <h1 className='mb-8 text-base font-medium md:text-center'>プライバシーポリシー</h1>
      <p className='mb-4'>
        Moodify（以下、「当サービス」）は、ユーザーの個人情報保護を重要視し、以下のプライバシーポリシーを定めています。
      </p>
      <h2 className='mb-4 bg-gray-100 p-2 text-base'>1. 収集する情報</h2>
      <p className='mb-4'>
        当サービスは、サービス提供に必要な範囲で以下の情報を収集します。
        <br />
        - ユーザー登録情報（メールアドレス、パスワード等）
        <br />
        - 利用履歴
        <br />- 感情記録データ
      </p>
      <h2 className='mb-4 bg-gray-100 p-2 text-base'>2. 情報の利用目的</h2>
      <p className='mb-4'>
        収集した情報は、サービスの提供・改善、ユーザーサポート、統計データの作成に利用します。
      </p>
      <h2 className='mb-4 bg-gray-100 p-2 text-base'>3. 情報の管理</h2>
      <p className='mb-4'>
        当サービスは、ユーザーの個人情報を適切に管理し、不正アクセス、紛失、破壊、改ざん、漏洩などを防ぐため、セキュリティ対策を実施します。
      </p>
      <h2 className='mb-4 bg-gray-100 p-2 text-base'>4. 第三者への提供</h2>
      <p className='mb-4'>
        法令に基づく場合を除き、ユーザーの同意なく第三者に個人情報を提供することはありません。
      </p>
      <h2 className='mb-4 bg-gray-100 p-2 text-base'>5. プライバシーポリシーの変更</h2>
      <p className='mb-4'>
        当サービスは、必要に応じて本ポリシーを変更することがあります。変更後のポリシーは、本ページで公開された時点で効力を生じるものとします。
      </p>
      <p className='text-center'>
        <Link href='/'>
          <Button size='lg'>ホームに戻る</Button>
        </Link>
      </p>
    </div>
  );
}
