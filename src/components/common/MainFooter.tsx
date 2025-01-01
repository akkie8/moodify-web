import Link from 'next/link';

export function MainFooter() {
  return (
    <footer className='bg-gray-50 pb-6 pt-12 text-center text-gray-500'>
      <div className='mb-6 flex flex-col items-center justify-center gap-4 text-xs md:flex-row'>
        <Link href='/about'>運営者情報</Link>
        <Link href='/notice'>特定商取引法に基づく表記</Link>
        <Link href='/terms'>利用規約</Link>
        <Link href='/policy'>プライバシーポリシー</Link>
        <Link href='/contact'>お問い合わせ</Link>
      </div>
      <hr className='mx-auto my-4 w-10/12 border-gray-200'></hr>
      <p className='mb-1'>omoma © 2025</p>
    </footer>
  );
}
