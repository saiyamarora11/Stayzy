// bottom navigation
import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AppShell, Group, UnstyledButton, Tooltip } from '@mantine/core';
import { 
  IconHome2, 
  IconSearch, 
  IconHeart, 
  IconMessage, 
  IconUser 
} from '@tabler/icons-react';
import styles from './BottomNavigation.module.css';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  onClick?: () => void;
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive: boolean;
  onClick?: () => void;
}

const NavItem: FC<NavItemProps> = ({ icon, label, href, isActive, onClick }) => (
  <UnstyledButton 
    component={Link} 
    href={href}
    onClick={onClick}
    className={`${styles.navItem} ${isActive ? styles.active : ''}`}
  >
    <div className={styles.navIcon}>{icon}</div>
    <div className={styles.navLabel}>{label}</div>
  </UnstyledButton>
);

const BottomNavigation: FC = () => {
  const pathname = usePathname();

  // Navigation items
  const navItems: NavItem[] = [
    { 
      icon: <IconSearch size={24} stroke={1.5} />, 
      label: 'Explore', 
      href: '/' 
    },
    { 
      icon: <IconHeart size={24} stroke={1.5} />, 
      label: 'Wishlist', 
      href: '/wishlist' 
    },
    { 
      icon: <IconUser size={24} stroke={1.5} />, 
      label: 'Profile', 
      href: '/profile' 
    }
  ];

  return (
    <AppShell.Footer className={styles.bottomNav} withBorder={false}>
      <Group justify="space-around" wrap="nowrap">
        {navItems.map((item) => (
          <Tooltip 
            key={item.href} 
            label={item.label} 
            position="top" 
            withArrow
            disabled
          >
            <NavItem 
              icon={item.icon}
              label={item.label}
              href={item.href}
              isActive={pathname === item.href}
              onClick={item.onClick}
            />
          </Tooltip>
        ))}
      </Group>
    </AppShell.Footer>
  );
};

export default BottomNavigation;