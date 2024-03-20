import type { Metadata } from 'next';

import './globals.css';
import Head from 'next/head';

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
            {/* <Head>
                <script
                    async
                    src={
                        'https://www.google.com/recaptcha/enterprise.js?render=6LdS7p4pAAAAAC7fhPmrETTlWt6-rAQi9WkIhIf8'
                    }
                />
            </Head> */}
            <body>
                {/*<ChangeLang />

                <Navbar />*/}

                {children}

                <Footer />
            </body>
        </html>
    );
}

export default RootLayout;
