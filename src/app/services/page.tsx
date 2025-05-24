import { Container, Title, Text, SimpleGrid, Card, Group, ThemeIcon } from '@mantine/core';
import { IconStar, IconWifi, IconHome, IconChefHat, IconMassage } from '@tabler/icons-react';

export default function ServicesPage() {
  const services = [
    {
      title: 'House Cleaning',
      description: 'Professional cleaning for your property',
      icon: <IconHome size={24} />,
      price: '$80'
    },
    {
      title: 'WiFi Setup',
      description: 'Get your property connected',
      icon: <IconWifi size={24} />,
      price: '$45'
    },
    {
      title: 'Private Chef',
      description: 'Delicious meals cooked at your place',
      icon: <IconChefHat size={24} />,
      price: '$120'
    },
    {
      title: 'Massage',
      description: 'Relaxing massage in your home',
      icon: <IconMassage size={24} />,
      price: '$95'
    },
    {
      title: 'Premium Host',
      description: 'Upgrade to premium hosting services',
      icon: <IconStar size={24} />,
      price: '$60'
    }
  ];

  return (
    <Container size="lg" py="xl">
      <Title order={1} ta="center">
        Services Page
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        Make your stay better with these additional services
      </Text>
      
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} mt={50} spacing="lg">
        {services.map((service, i) => (
          <Card key={i} shadow="sm" padding="lg" radius="md" withBorder>
            <Group>
              <ThemeIcon size="xl" radius="md" color="blue.5">
                {service.icon}
              </ThemeIcon>
              <div>
                <Text fw={500} size="lg">
                  {service.title}
                </Text>
                <Text c="dimmed" size="sm">
                  {service.description}
                </Text>
              </div>
            </Group>
            <Text fw={500} mt="md">
              {service.price}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}