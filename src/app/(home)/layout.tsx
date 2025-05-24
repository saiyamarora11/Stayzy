'use client';

import { FC } from 'react';
import { AppShell } from '@mantine/core';
import BottomNavigation from './components/BottomNavigation';
import { useLenis } from '../hooks/useLenis';

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {
  useLenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  return (
    <AppShell
      padding="md"
      footer={{ height: 60 }}
    >
      <AppShell.Main>
        {children}
      </AppShell.Main>
      <BottomNavigation />
    </AppShell>
  );
};

export default HomeLayout;
