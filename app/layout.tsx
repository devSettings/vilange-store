import type { Metadata } from 'next';

import './globals.css';
import { cn } from '@/lib/utils';
import { GeistSans } from 'geist/font/sans';
import NavBar from '@/components/navbar';

export const metadata: Metadata = {
  title: 'Vilange Store',
  description: 'Vilange Store - Your one stop shop for all your needs',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen  font-sans antialiased',
          GeistSans.className
        )}
      >
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
