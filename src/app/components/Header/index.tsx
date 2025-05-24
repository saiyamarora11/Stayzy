'use client';

import { Container, Tabs, Text } from '@mantine/core';
import { usePathname, useRouter } from 'next/navigation';
import { FC } from 'react';
import styles from './header.module.css';

interface NavTab {
  label: string;
  value: string;
  href: string;
}

const Header: FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const showHeader = ['/', '/experiences', '/services'].includes(pathname as string);

  if (!showHeader) return null;

  const navTabs: NavTab[] = [
    { label: 'Homes', value: 'homes', href: '/' },
    { label: 'Experiences', value: 'experiences', href: '/experiences' },
    { label: 'Services', value: 'services', href: '/services' },
  ];

  const activeTab =
    pathname === '/'
      ? 'homes'
      : pathname === '/experiences'
        ? 'experiences'
        : pathname === '/services'
          ? 'services'
          : null;

  return (
    <header className={styles.header}>
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
            const tab = navTabs.find((t) => t.value === value);
            if (tab) {
              router.push(tab.href);
            }
          }}
        >
          <Tabs.List grow>
            {navTabs.map((tab) => (
              <Tabs.Tab key={tab.value} value={tab.value} className={styles.tab}>
                {tab.label}
              </Tabs.Tab>
            ))}
          </Tabs.List>
        </Tabs>
      </Container>
    </header>
  );
};

export default Header;
