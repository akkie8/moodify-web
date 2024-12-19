import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 py-12'>
      <div className='container mx-auto px-4'>
        <h1 className='text-3xl font-bold mb-8'>プライバシーポリシー</h1>
        <div className='bg-white rounded-lg shadow-md p-6'>
          <p className='mb-4'>
            Moodify（以下、「当サービス」）は、ユーザーの個人情報保護を重要視し、以下のプライバシーポリシーを定めています。
          </p>
          <h2 className='text-xl font-semibold mb-2'>1. 収集する情報</h2>
          <p className='mb-4'>
            当サービスは、サービス提供に必要な範囲で以下の情報を収集します： -
            ユーザー登録情報（メールアドレス、パスワード等） - 利用履歴 - 感情記録データ
          </p>
          <h2 className='text-xl font-semibold mb-2'>2. 情報の利用目的</h2>
          <p className='mb-4'>
            収集した情報は、サービスの提供・改善、ユーザーサポート、統計データの作成に利用します。
          </p>
          <h2 className='text-xl font-semibold mb-2'>3. 情報の管理</h2>
          <p className='mb-4'>
            当サービスは、ユーザーの個人情報を適切に管理し、不正アクセス、紛失、破壊、改ざん、漏洩などを防ぐため、セキュリティ対策を実施します。
          </p>
          <h2 className='text-xl font-semibold mb-2'>4. 第三者への提供</h2>
          <p className='mb-4'>
            法令に基づく場合を除き、ユーザーの同意なく第三者に個人情報を提供することはありません。
          </p>
          <h2 className='text-xl font-semibold mb-2'>5. プライバシーポリシーの変更</h2>
          <p className='mb-4'>
            当サービスは、必要に応じて本ポリシーを変更することがあります。変更後のポリシーは、本ページで公開された時点で効力を生じるものとします。
          </p>
          <p className='mt-8'>
            <Link href='/' className='text-blue-600 hover:underline'>
              ホームに戻る
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
