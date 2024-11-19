'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function WelcomePage() {
  const router = useRouter();

  return (
    <div className='container mx-auto'>
      <section className='text-center mb-20'>
        <h1 className='text-4xl font-bold mb-16 text-gray-800 mt-36'>
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
          Moodifyは、あなたの感情を理解し、前向きな変化をサポートするAIジャーナリングアプリです。
        </p>
        <Button size='lg' onClick={() => router.push('/login')}>
          無料で始める
        </Button>
      </section>

      <section className='grid md:grid-cols-3 gap-8 mb-20 px-20'>
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

      <section className='text-center p-12'>
        <h2 className='text-3xl font-bold mb-20 text-gray-800'>あなたの心の整理をサポートします</h2>
        <Image
          className='m-auto mb-20'
          src='/moonlight.svg'
          alt='Moodify'
          width={300}
          height={100}
        />
        <p className='text-xl mb-16 text-gray-600'>
          他責から自責へ、そして前向きな行動へ。
          <br />
          Moodifyで、次の一歩を踏み出しましょう。
        </p>
        <Button size='lg'>今すぐ始める</Button>
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
        <div className='text-4xl mb-4'>{icon}</div>
        <h3 className='text-xl font-semibold mb-2 text-gray-800'>{title}</h3>
        <p className='text-gray-600'>{description}</p>
      </CardContent>
    </Card>
  );
}
