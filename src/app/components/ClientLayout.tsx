'use client';

import { AppShell } from '@mantine/core';
import { FC, ReactNode } from 'react';

import { useLenis } from '../hooks/useLenis';

import BottomNavigation from '@/app/(home)/components/BottomNavigation/index';
import Header from './Header';

interface ClientLayoutProps {
  children: ReactNode;
}

const ClientLayout: FC<ClientLayoutProps> = ({ children }) => {
  useLenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
  });

  return (
    <AppShell padding="md" header={{ height: { base: 120, md: 140 }, offset: true }}>
      <Header />
      <AppShell.Main pt={{ base: 135, md: 150 }} pb={70}>
        {children}
      </AppShell.Main>
      <BottomNavigation />
    </AppShell>
  );
};

export default ClientLayout;
