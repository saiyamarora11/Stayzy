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
  IconBrandGithub,
  IconRocket,
  IconBook,
  IconCode,
  IconArrowRight
} from '@tabler/icons-react';
import Link from "next/link";

// Define the Home component as a React Functional Component
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
        Your Next.js application with Mantine UI and route groups
      </Text>

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl" mt={50}>
        <Card shadow="md" radius="md" padding="lg">
          <ThemeIcon size={50} radius="md" variant="light" color="blue">
            <IconRocket style={{ width: rem(30), height: rem(30) }} stroke={1.5} />
          </ThemeIcon>
          <Text fw={500} size="lg" mt="md">
            Get Started
          </Text>
          <Text size="sm" c="dimmed" mt="sm">
            Build your application with modern UI components and responsive design
          </Text>
          <Button variant="light" color="blue" fullWidth mt="md" radius="md">
            Start Building
          </Button>
        </Card>

        <Card shadow="md" radius="md" padding="lg">
          <ThemeIcon size={50} radius="md" variant="light" color="green">
            <IconBook style={{ width: rem(30), height: rem(30) }} stroke={1.5} />
          </ThemeIcon>
          <Text fw={500} size="lg" mt="md">
            Documentation
          </Text>
          <Text size="sm" c="dimmed" mt="sm">
            Explore the Mantine documentation to learn about all available components
          </Text>
          <Button 
            component="a" 
            href="https://mantine.dev/docs/getting-started/" 
            target="_blank"
            variant="light" 
            color="green" 
            fullWidth 
            mt="md" 
            radius="md"
          >
            Read Docs
          </Button>
        </Card>

        <Card shadow="md" radius="md" padding="lg">
          <ThemeIcon size={50} radius="md" variant="light" color="orange">
            <IconCode style={{ width: rem(30), height: rem(30) }} stroke={1.5} />
          </ThemeIcon>
          <Text fw={500} size="lg" mt="md">
            Examples
          </Text>
          <Text size="sm" c="dimmed" mt="sm">
            View example projects and templates to accelerate your development
          </Text>
          <Button 
            component="a" 
            href="https://ui.mantine.dev/" 
            target="_blank"
            variant="light" 
            color="orange" 
            fullWidth 
            mt="md" 
            radius="md"
          >
            View Examples
          </Button>
        </Card>
      </SimpleGrid>

      <Group justify="center" mt={50}>
        <Button 
          component="a" 
          href="https://github.com/mantinedev/mantine" 
          target="_blank"
          leftSection={<IconBrandGithub size={20} />}
          variant="outline"
        >
          GitHub Repository
        </Button>
        
        <Button 
          component={Link}
          href="/other"
          rightSection={<IconArrowRight size={18} />}
          variant="light"
          color="violet"
        >
          Go to Other Page
        </Button>
        
        <Button 
          component={Link}
          href="/api/hello"
          target="_blank"
          variant="subtle"
          color="gray"
        >
          Test API Route
        </Button>
      </Group>
    </Container>
  );
};

export default HomePage;
