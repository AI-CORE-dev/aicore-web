import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import './globals.css';
import { Navbar } from '@/components/organisms/Navbar';
import { Footer } from '@/components/organisms/Footer';
import { FloatingButton } from '@/components/organisms/FloatingButton';

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

                <div style={{ position: 'absolute', backgroundColor: 'purple', zIndex: 999 }}>
                    <FloatingButton />
                </div>
            </body>
        </html>
    );
}

export default RootLayout;
