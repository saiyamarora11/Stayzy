'use client';

import { FC } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { AppShell, Tabs, Container, Text } from '@mantine/core';
import styles from './header.module.css';

interface NavTab {
  label: string;
  value: string;
  href: string;
}

const Header: FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const showHeader = ['/', '/experiences', '/services'].includes(pathname);
  
  if (!showHeader) return null;
  
  const navTabs: NavTab[] = [
    { label: 'Homes', value: 'homes', href: '/' },
    { label: 'Experiences', value: 'experiences', href: '/experiences' },
    { label: 'Services', value: 'services', href: '/services' },
  ];
  

  const activeTab = 
    pathname === '/' ? 'homes' : 
    pathname === '/experiences' ? 'experiences' : 
    pathname === '/services' ? 'services' : 
    null;

  return (
    <AppShell.Header className={styles.header}>
      <Container size="xl">
        <div className={styles.searchContainer}>
          <div className={styles.searchBox}>
            <Text className={styles.searchPlaceholder}>Start your search</Text>
          </div>
        </div>
        
        <Tabs
          value={activeTab}
          className={styles.tabs}
           onChange={(value) => {
            const tab = navTabs.find(t => t.value === value);
            if (tab) {
              router.push(tab.href);
            }
          }}
        >
          <Tabs.List grow>
            {navTabs.map((tab) => (
              <Tabs.Tab
                key={tab.value}
                value={tab.value}
                className={styles.tab}
              >
                {tab.label}
              </Tabs.Tab>
            ))}
          </Tabs.List>
        </Tabs>
      </Container>
    </AppShell.Header>
  );
};

export default Header;