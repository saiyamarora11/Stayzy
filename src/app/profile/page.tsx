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

export default function OtherPage() {
  return (
    <Container size="lg" py="xl">
      <Title order={1} ta="center">
        Profile Page
      </Title>

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
