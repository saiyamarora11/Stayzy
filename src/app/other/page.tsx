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
  IconCode
} from '@tabler/icons-react';

export default function OtherPage() {
  return (
    <Container size="lg" py="xl">
      <Title order={1} ta="center" mt={50}>
        Other Page
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This is another page in your application.
      </Text>
      
      <Group justify="center" mt={50}>
        <Button 
          component="a" 
          href="/"
          variant="outline"
        >
          Back to Home
        </Button>
      </Group>
    </Container>
  );
}
