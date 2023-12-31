import type { Metadata } from 'next';

import './globals.css';
import { Navbar } from '@/components/organisms/Navbar';
import { Footer } from '@/components/organisms/Footer';
import { FloatingButton } from '@/components/organisms/FloatingButton';

export const metadata: Metadata = {
    title: 'Aicore-web',
    description: 'Pagina web aicore',
};

function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang={'en'}>
            <body>
                <Navbar />
                {children}

                <FloatingButton />

                <Footer />
            </body>
        </html>
    );
}

export default RootLayout;
