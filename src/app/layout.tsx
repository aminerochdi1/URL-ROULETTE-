import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Your Page Title',
  description: 'Description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-fixed bg-cover">
        <main className="flex min-h-screen items-center justify-center p-4">
          {children}
        </main>
      </body>
    </html>
  );
}