import Link from 'next/link';

export default function CompanyInfo() {
  return (
    <div className='container mx-auto flex flex-col justify-center px-4 py-16 text-center'>
      <h1 className='font-bold text-2xl mb-8 md:mb-10 md:text-4xl'>運営者情報</h1>
      <h2 className='mb-2 text-lg font-semibold  md:mb-4 md:text-2xl'>サービス名</h2>
      <p className='mb-4 text-sm md:text-xl'>Moodify</p>

      <h2 className='mb-2 text-lg font-semibold md:mb-4 md:text-2xl'>運営者</h2>
      <p className='mb-4 text-sm md:text-xl'>山田 亜樹（個人事業主）</p>

      <h2 className='mb-2 text-lg font-semibold md:mb-4 md:text-2xl'>事業内容</h2>
      <p className='mb-4 text-sm md:text-xl'>
        - ウェブサービス「Moodify」の企画・開発・運営
        <br />
        - 感情分析AIの研究開発
        <br />- メンタルヘルスに関するコンサルティング
      </p>

      <h2 className='mb-2 text-lg font-semibold md:mb-4 md:text-2xl'>連絡先</h2>
      <p className='mb-4 text-sm md:text-xl'>
        メールアドレス: info@moodify.com
        <br />
        ※お問い合わせはメールでのみ受け付けております。
      </p>

      <p className='mt-8 text-sm md:text-xl'>
        <Link href='/' className='text-blue-600 hover:underline'>
          ホームに戻る
        </Link>
      </p>
    </div>
  );
}
