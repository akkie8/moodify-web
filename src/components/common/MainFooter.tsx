import Link from 'next/link';

export function MainFooter() {
  return (
    <footer className='text-center pt-12 pb-6 text-gray-500 bg-gray-50'>
      <div className='flex flex-col items-center justify-center gap-4 text-xs md:flex-row mb-6'>
        <Link href='/about'>運営者情報</Link>
        <Link href='/notice'>特定商取引法に基づく表記</Link>
        <Link href='/terms'>利用規約</Link>
        <Link href='/policy'>プライバシーポリシー</Link>
        <Link href='/contact'>お問い合わせ</Link>
      </div>
      <hr className='w-10/12 mx-auto my-4 border-gray-200'></hr>
      <p className='mb-1'>omoma © 2025</p>
    </footer>
  );
}
