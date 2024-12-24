import Link from 'next/link';

export default function LegalNotice() {
  return (
    <div className='container mx-auto px-4'>
      <h1 className='text-3xl font-bold mb-8'>特定商取引法に基づく表記</h1>

      <h2 className='text-xl font-semibold mb-2'>販売業者</h2>
      <p className='mb-4'>Moodify（個人事業主）</p>

      <h2 className='text-xl font-semibold mb-2'>運営責任者</h2>
      <p className='mb-4'>山田 亜樹</p>

      <h2 className='text-xl font-semibold mb-2'>連絡先</h2>
      <p className='mb-4'>
        メールアドレス: support@moodify.com
        <br />
        ※お問い合わせはメールでのみ受け付けております。
      </p>

      <h2 className='text-xl font-semibold mb-2'>販売価格</h2>
      <p className='mb-4'>各商品・サービスページにて表示しています。</p>

      <h2 className='text-xl font-semibold mb-2'>支払方法</h2>
      <p className='mb-4'>クレジットカード決済（VISA, MasterCard, American Express, JCB）</p>

      <h2 className='text-xl font-semibold mb-2'>引渡し時期</h2>
      <p className='mb-4'>デジタルコンテンツの場合：購入後即時にアクセス可能となります。</p>

      <h2 className='text-xl font-semibold mb-2'>返品・キャンセルについて</h2>
      <p className='mb-4'>
        デジタルコンテンツの性質上、購入後のキャンセル・返品はお受けできません。
      </p>

      <p className='mt-8'>
        <Link href='/' className='text-blue-600 hover:underline'>
          ホームに戻る
        </Link>
      </p>
    </div>
  );
}
