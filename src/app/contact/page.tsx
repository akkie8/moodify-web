import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function ContactPage() {
  return (
    <div className='container mx-auto px-4 py-12'>
      <Card className='max-w-3xl mx-auto'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold'>お問い合わせ</CardTitle>
          <CardDescription>
            より良いサービスを提供するため、皆様からのご意見・ご要望をお聞かせください。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='relative w-full overflow-hidden pt-[162.5%]'>
            <iframe
              src='https://docs.google.com/forms/d/e/1FAIpQLSel5Sb6u2KYyf2fWhsIYkS_iquYIFX_CRGOLJAqM0vVUe1YDQ/viewform?embedded=true'
              className='absolute top-0 left-0 h-full w-full border-0'
              title='フィードバックフォーム'
              loading='lazy'
            >
              読み込んでいます...
            </iframe>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
