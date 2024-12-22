import Link from 'next/link';

export default function CompanyInfo() {
  return (
    <div className='container mx-auto flex flex-col justify-center text-center px-4 py-16'>
      <h1 className='text-3xl font-bold mb-8'>運営者情報</h1>
      <h2 className='text-xl font-semibold mb-2'>サービス名</h2>
      <p className='mb-4'>Moodify</p>

      <h2 className='text-xl font-semibold mb-2'>運営者</h2>
      <p className='mb-4'>山田 亜樹（個人事業主）</p>

      <h2 className='text-xl font-semibold mb-2'>事業内容</h2>
      <p className='mb-4'>
        - ウェブサービス「Moodify」の企画・開発・運営
        <br />
        - 感情分析AIの研究開発
        <br />- メンタルヘルスに関するコンサルティング
      </p>

      <h2 className='text-xl font-semibold mb-2'>連絡先</h2>
      <p className='mb-4'>
        メールアドレス: info@moodify.com
        <br />
        ※お問い合わせはメールでのみ受け付けております。
      </p>

      <p className='mt-8'>
        <Link href='/' className='text-blue-600 hover:underline'>
          ホームに戻る
        </Link>
      </p>
    </div>
  );
}
