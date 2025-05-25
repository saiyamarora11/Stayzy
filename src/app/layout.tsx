import type { Metadata } from 'next';
import './globals.css';

import '@mantine/carousel/styles.css';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';

import { theme } from '@/theme';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import ClientLayout from './components/ClientLayout';
import QueryProvider from './providers/query-provider';

export const metadata: Metadata = {
  title: 'Stayzy - Find Your Perfect Stay',
  description: 'Discover amazing properties for your next stay with Stayzy',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="light">
          <QueryProvider>
            <ClientLayout>{children}</ClientLayout>
          </QueryProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
