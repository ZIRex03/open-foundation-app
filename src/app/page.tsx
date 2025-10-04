'use client';

import { RootLayout } from '@/components/Layout/RootLayout';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {

  const router = useRouter()

  useEffect(() => {
    router.push('/earnings')
  }, [router])

  return (
    <RootLayout>
      <div className="container">
        <h1 className="page-title">Добро пожаловать!</h1>
        <p className="text">Это тестовое Telegram Mini App</p>
      </div>
    </RootLayout>
  );
}