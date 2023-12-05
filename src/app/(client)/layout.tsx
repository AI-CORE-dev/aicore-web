import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import './globals.css';
import { Navbar } from '@/components/organisms/Navbar';
import { Footer } from '@/components/organisms/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Aicore-web',
    description: 'Pagina web aicore',
};

function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang={'en'}>
            <body className={inter.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}

export default RootLayout;
