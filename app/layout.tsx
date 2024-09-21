import type { Metadata } from 'next';
import './globals.css';
import { Footer, Header } from '@/components';

export const metadata: Metadata = {
  title: 'NBA Soft IT-Company',
  description: 'Where your ideas meet our solutions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
