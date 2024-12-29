import Link from 'next/link';

export default function LegalNotice() {
  return (
    <div className='container max-w-md mx-0 px-4 py-10 text-sm md:max-w-xl md:mx-auto'>
      <h1 className='mb-8 tracking-widest text-base font-medium md:text-center'>
        特定商取引法に基づく表記
      </h1>

      <h2 className='mb-2 tracking-widest text-sm'>販売業者</h2>
      <p className='mb-5 pb-5 tracking-widest border-b'>Moodify（個人事業主）</p>

      <h2 className='mb-2 tracking-widest text-sm'>運営責任者</h2>
      <p className='mb-5 pb-5 tracking-widest border-b'>山田 亜樹</p>

      <h2 className='mb-2 tracking-widest text-sm'>連絡先</h2>
      <p className='mb-5 pb-5 leading-6 tracking-widest border-b'>
        メールアドレス: support@moodify.com
        <br />
        ※お問い合わせはメールでのみ受け付けております。
      </p>

      <h2 className='mb-2 tracking-widest text-sm'>販売価格</h2>
      <p className='mb-5 pb-5 leading-6 tracking-widest border-b'>
        各商品・サービスページにて表示しています。
      </p>

      <h2 className='mb-2 tracking-widest text-sm'>支払方法</h2>
      <p className='mb-5 pb-5 leading-6 tracking-widest border-b'>
        クレジットカード決済（VISA, MasterCard, American Express, JCB）
      </p>

      <h2 className='mb-2 tracking-widest text-sm'>引渡し時期</h2>
      <p className='mb-5 pb-5 leading-6 tracking-widest border-b'>
        デジタルコンテンツの場合、購入後即時にアクセス可能となります。
      </p>

      <h2 className='mb-2 tracking-widest text-sm'>返品・キャンセルについて</h2>
      <p className='mb-5 pb-5 leading-6 tracking-widest border-b'>
        デジタルコンテンツの性質上、購入後のキャンセル・返品はお受けできません。
      </p>

      <p className='text-center'>
        <Link href='/' className='text-blue-600 hover:underline'>
          ホームに戻る
        </Link>
      </p>
    </div>
  );
}
