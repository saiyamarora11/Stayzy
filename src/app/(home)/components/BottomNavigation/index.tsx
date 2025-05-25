import { Group, Tooltip, UnstyledButton } from '@mantine/core';
import { IconHeart, IconHome2, IconUser } from '@tabler/icons-react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, useState } from 'react';
import styles from './bottomNavigation.module.css';

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
  <motion.div whileTap={{ scale: 0.95 }}>
    <UnstyledButton
      component={Link}
      href={href}
      onClick={onClick}
      className={`${styles.navItem} ${isActive ? styles.active : ''}`}
    >
      <motion.div
        className={styles.navIcon}
        animate={{ scale: isActive ? 1.1 : 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      >
        {icon}
      </motion.div>
      <div className={styles.navLabel}>{label}</div>
    </UnstyledButton>
  </motion.div>
);

const BottomNavigation: FC = () => {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const { scrollY } = useScroll();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const threshold = 10;

  useMotionValueEvent(scrollY, 'change', (current) => {
    const direction = current > lastScrollY ? 'down' : 'up';

    if (Math.abs(current - lastScrollY) > threshold) {
      setScrollDirection(direction);
    }


    if (direction === 'up' || current < 50) {
      setVisible(true);
    }

    else if (direction === 'down' && current > 50) {
      setVisible(false);
    }


    setLastScrollY(current);
  });

  const isHomeOrTab = ['/', '/experiences', '/services'].includes(pathname as string);

  const navItems: NavItem[] = [
    {
      icon: <IconHome2 size={24} stroke={1.5} />,
      label: 'Home',
      href: '/',
    },
    {
      icon: <IconHeart size={24} stroke={1.5} />,
      label: 'Wishlist',
      href: '/wishlist',
    },
    {
      icon: <IconUser size={24} stroke={1.5} />,
      label: 'Profile',
      href: '/profile',
    },
  ];

  return (
    <motion.nav
      className={styles.bottomNav}
      initial={{ translateY: 0 }}
      animate={{ translateY: visible ? 0 : 100 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      <Group justify="space-around" wrap="nowrap">
        {navItems.map((item) => (
          <Tooltip key={item.href} label={item.label} position="top" withArrow disabled>
            <NavItem
              icon={item.icon}
              label={item.label}
              href={item.href}
              isActive={item.href === '/' ? isHomeOrTab : pathname === item.href}
              onClick={item.onClick}
            />
          </Tooltip>
        ))}
      </Group>
    </motion.nav>
  );
};

export default BottomNavigation;
