'use client';

import { FC, ReactNode } from 'react';
import { AppShell } from '@mantine/core';

import { useLenis } from '../hooks/useLenis';
import BottomNavigation from '../(home)/components/BottomNavigation';
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
    <AppShell
      padding="md"
      header={{ height: { base: 120, md: 140 } }}
      footer={{ height: 60 }}
    >
      <Header />
      <AppShell.Main>
        {children}
      </AppShell.Main>
      <BottomNavigation />
    </AppShell>
  );
};

export default ClientLayout;