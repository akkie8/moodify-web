'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function WelcomePage() {
  const router = useRouter();

  return (
    <div className='container mx-auto'>
      <section className='mb-20 text-center'>
        <h1 className='mb-16 mt-36 text-4xl font-bold text-gray-800'>
          感情を整理し、
          <br />
          新たな気づきを得よう
        </h1>
        <Image
          className='m-auto mb-16'
          src='/note-list.svg'
          alt='Moodify'
          width={300}
          height={100}
        />
        <p className='text-nomal mb-16 text-gray-600'>
          Omoma は、あなたの感情を理解し、前向きな変化をサポートするAIジャーナリングアプリです。
        </p>
        <Button size='lg' onClick={() => router.push('/login')}>
          無料で始める
        </Button>
      </section>

      <section className='mb-20 grid gap-8 px-20 md:grid-cols-3'>
        <FeatureCard
          icon='📝'
          title='簡単投稿'
          description='日々の思いや感情をタイムライン形式で簡単に記録できます。'
        />
        <FeatureCard
          icon='🤖'
          title='AIフィードバック'
          description='AIが共感しつつ、建設的な思考へと導きます。'
        />
        <FeatureCard
          icon='📊'
          title='感情の可視化'
          description='感情の波を視覚化し、自己成長を実感できます。'
        />
      </section>

      <section className='p-12 text-center'>
        <h2 className='mb-20 text-3xl font-bold text-gray-800'>あなたの心の整理をサポートします</h2>
        <Image
          className='m-auto mb-20'
          src='/moonlight.svg'
          alt='Moodify'
          width={300}
          height={100}
        />
        <p className='mb-16 text-xl text-gray-600'>Moodifyで、次の一歩を踏み出しましょう。</p>
        <Button size='lg' onClick={() => router.push('/login')}>
          今すぐ始める
        </Button>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <Card className='text-center'>
      <CardContent className='pt-6'>
        <div className='mb-4 text-4xl'>{icon}</div>
        <h3 className='mb-2 text-xl font-semibold text-gray-800'>{title}</h3>
        <p className='text-gray-600'>{description}</p>
      </CardContent>
    </Card>
  );
}
