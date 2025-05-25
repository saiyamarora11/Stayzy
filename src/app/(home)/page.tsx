'use client';

import { Container, Group, Text, ThemeIcon, Title } from '@mantine/core';
import { IconRocket } from '@tabler/icons-react';
import { FC } from 'react';
import { useProperties } from '../api/properties';

const HomePage: FC = () => {
  const { data: properties, isLoading, error, isError } = useProperties();

  return (
    <Container size="lg" py="xl">
      <Title order={1} ta="center" mt={50}>
        Welcome to Stayzy
      </Title>
      <Group justify="center" mb={5}>
        <ThemeIcon size="xl" radius="xl" color="blue">
          <IconRocket size={24} />
        </ThemeIcon>
      </Group>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl" mb="xl">
        Discover amazing properties for your next stay
      </Text>
    </Container>
  );
};

export default HomePage;
