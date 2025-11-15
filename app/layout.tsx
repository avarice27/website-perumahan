import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Website Perumahan - Temukan Properti Impian Anda',
  description: 'Platform terpercaya untuk menemukan properti impian Anda di seluruh Indonesia. Rumah, apartemen, tanah, dan properti komersial.',
  keywords: 'properti, rumah, apartemen, tanah, perumahan, indonesia, jual beli properti',
  authors: [{ name: 'Website Perumahan' }],
  openGraph: {
    title: 'Website Perumahan - Temukan Properti Impian Anda',
    description: 'Platform terpercaya untuk menemukan properti impian Anda di seluruh Indonesia.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="font-sans antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
