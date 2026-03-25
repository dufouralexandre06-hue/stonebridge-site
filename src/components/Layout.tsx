import { ReactNode } from 'react';
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  variant?: 'dark' | 'light';
}

const Layout = ({ children, variant = 'dark' }: LayoutProps) => {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: variant === 'light' ? '#F5F5F5' : '#0F1B2D' }}
    >
      <Navigation variant={variant} />
      <MobileNavigation variant={variant} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
