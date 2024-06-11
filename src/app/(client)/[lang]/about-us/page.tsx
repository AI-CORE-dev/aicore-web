import React from 'react';

import {
    AboutUs,
    InstagramFeed,
    ClientsReview,
    GetToKnowUsBetter,
    OurValues,
    Recognition,
    PartnerShip,
    SchedulleCall,
    InstitutuionalVideo,
} from '@/components/molecules';
import { Header } from '@/components/organisms/Header';

function AboutPage() {
    return (
        <>
            <Header
                isButtonSecondary
                isVideo
                subtitle={DATAHEADER.subtitle}
                textButton={DATAHEADER.textButton}
                textButtonSecondary={DATAHEADER.textButtonSecondary}
                title={DATAHEADER.title}
            />
            <main>
                <AboutUs />
                <InstitutuionalVideo idVideo={'CdSaMoBIPmc'} />
                <GetToKnowUsBetter />
                <OurValues />
                <Recognition />
                <ClientsReview />
                {/* <FeatureProjects /> */}
                <InstagramFeed />
                <PartnerShip />
                <SchedulleCall />
            </main>
        </>
    );
}

export default AboutPage;

const DATAHEADER = {
    title: 'Somos más que un proveedor - somos el aliado tecnológico que tu organización necesita.',
    subtitle:
        'Desde el día uno asumimos tu proyecto como nuestro y ponemos a disposición nuestro talento y experiencia para que logres esa ventaja que estás buscando en el mercado.',
    textButton: 'Contactanos',
    textButtonSecondary:
        'Agenda una reunión de 30 minutos con nuestros desarrolladores de negocios.',
};
