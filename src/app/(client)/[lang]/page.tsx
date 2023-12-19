// 'use client';

import type { SupportedLangs } from '@/lang/getDictionary';

import { Header } from '@/components/organisms/Header';
import {
    HowWeCanHelp,
    ClientsReview,
    CompaniesWePromote,
    PartnerShip,
    InstitutuionalVideo,
} from '@/components/molecules';
import { getDictionary } from '@/lang/getDictionary';

import styles from './page.module.css';

export default async function Home({ params }: { params: { lang: SupportedLangs } }) {
    const dictionary = await getDictionary(params.lang);

    return (
        <>
            <Header
                isButtonSecondary
                isHome
                isVideo
                subtitle={DATAHEADER.subtitle}
                textButton={DATAHEADER.textButton}
                textButtonSecondary={DATAHEADER.textButtonSecondary}
                title={DATAHEADER.title}
            />

            <main className={styles._main}>
                <HowWeCanHelp />
                <InstitutuionalVideo />
                <CompaniesWePromote />
                <PartnerShip />
                <ClientsReview />
            </main>
        </>
    );
}

const DATAHEADER = {
    title: 'Soluciones tecnológicas a medida para organizaciones que apuestan por la innovación.',
    subtitle:
        'Estamos acá para acompañarte como socio tecnológico a materializar tus ideas en productos, pensados y diseñados a medida para darte esa ventaja que estás buscando.',
    textButton: 'Contactanos',
    textButtonSecondary:
        'Agenda una reunión de 30 minutos con nuestros desarrolladores de negocios.',
};
