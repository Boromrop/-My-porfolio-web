import { Inter } from 'next/font/google';
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import { Analytics } from '@vercel/analytics/react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rop Borom - Data Scientist Portfolio',
  description: 'Data Scientist and AI Engineer Portfolio showcasing data science and AI engineering projects',
  keywords: ['Data Science', 'AI', 'Machine Learning', 'Portfolio', 'Software Development'],
  authors: [{ name: 'Rop Borom' }],
  openGraph: {
    title: 'Rop Borom - Data Scientist Portfolio',
    description: 'Portfolio showcasing data science and AI engineering projects',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100`} suppressHydrationWarning>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster position="bottom-right" />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
