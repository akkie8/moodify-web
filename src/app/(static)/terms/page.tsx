import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 py-12'>
      <div className='container mx-auto px-4'>
        <h1 className='text-3xl font-bold mb-8'>利用規約</h1>
        <div className='bg-white rounded-lg shadow-md p-6'>
          <p className='mb-4'>
            この利用規約（以下、「本規約」）は、Moodify（以下、「当サービス」）の利用条件を定めるものです。
          </p>
          <h2 className='text-xl font-semibold mb-2'>1. 適用</h2>
          <p className='mb-4'>
            本規約は、ユーザーと当サービスとの間の本サービスの利用に関わる一切の関係に適用されるものとします。
          </p>
          <h2 className='text-xl font-semibold mb-2'>2. 利用登録</h2>
          <p className='mb-4'>
            登録希望者が当サービスの定める方法によって利用登録を申請し、当サービスがこれを承認することによって、利用登録が完了するものとします。
          </p>
          <h2 className='text-xl font-semibold mb-2'>3. ユーザーの責任</h2>
          <p className='mb-4'>
            ユーザーは、自己の責任において、本サービスを利用するものとし、本サービスの利用によって生じた一切の結果について責任を負うものとします。
          </p>
          <h2 className='text-xl font-semibold mb-2'>4. 禁止事項</h2>
          <p className='mb-4'>
            ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません： -
            法令または公序良俗に違反する行為 - 犯罪行為に関連する行為 -
            当サービスのサーバーまたはネットワークの機能を破壊したり、妨害したりする行為 -
            他のユーザーに関する個人情報等を収集または蓄積する行為
          </p>
          <h2 className='text-xl font-semibold mb-2'>5. サービス内容の変更等</h2>
          <p className='mb-4'>
            当サービスは、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。
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
