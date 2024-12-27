import Link from 'next/link';

export default function CompanyInfo() {
  return (
    <div className='container max-w-md mx-0 px-4 py-10 text-sm md:max-w-xl md:mx-auto'>
      <h1 className='mb-8 text-base font-medium md:text-center'>運営者情報</h1>
      <h2 className='mb-2 text-sm'>サービス名</h2>
      <p className='mb-5 pb-5 border-b'>Moodify</p>

      <h2 className='mb-2 text-sm'>運営者</h2>
      <p className='mb-5 pb-5 border-b'>山田 亜樹（個人事業主）</p>

      <h2 className='mb-2 text-sm'>事業内容</h2>
      <p className='mb-5 pb-5 border-b'>
        - ウェブサービス「Moodify」の企画・開発・運営
        <br />
        - 感情分析AIの研究開発
        <br />- メンタルヘルスに関するコンサルティング
      </p>

      <h2 className='mb-2 text-sm'>連絡先</h2>
      <p className='mb-5 pb-5 border-b'>
        メールアドレス: info@moodify.com
        <br />
        ※お問い合わせはメールでのみ受け付けております。
      </p>

      <p className='text-center'>
        <Link href='/' className='text-blue-600 hover:underline'>
          ホームに戻る
        </Link>
      </p>
    </div>
  );
}
