import { FC } from 'react';
import { 
  Container, 
  Title, 
  Text, 
  Button, 
  Group, 
  Card, 
  SimpleGrid,
  rem,
  ThemeIcon
} from '@mantine/core';
import { 
  IconRocket,
} from '@tabler/icons-react';

const HomePage: FC = () => {
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
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
       Home page
      </Text>
    </Container>
  );
};

export default HomePage;
