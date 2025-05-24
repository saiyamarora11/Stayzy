import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    '@mantine/core',
    '@mantine/hooks',
    '@mantine/dates',
    '@mantine/carousel',
    '@mantine/notifications',
    '@mantine/charts',
    '@mantine/code-highlight',
    '@mantine/dropzone',
    '@mantine/form',
    '@mantine/modals',
    '@mantine/nprogress',
    '@mantine/spotlight',
    '@mantine/tiptap',
  ],
};

export default nextConfig;
