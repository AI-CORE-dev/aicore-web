import React from 'react';

import {
    AboutUs,
    InstagramFeed,
    ClientsReview,
    GetToKnowUsBetter,
    OurValues,
    ScheduleCall,
    Recognition,
    PartnerShip,
    FeatureProjects,
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
                <GetToKnowUsBetter />
                <OurValues />
                <Recognition />
                <ClientsReview />
                <FeatureProjects />

                <InstagramFeed />
                <PartnerShip />
                <ScheduleCall />
            </main>
        </>
    );
}

export default AboutPage;

const DATAHEADER = {
    title: 'Somos más que un proveedor - somos el aliado tecnológico que tu organización necesita',
    subtitle:
        'Desde el día uno asumimos el proyecto como nuestro y lo desarrollamos mientras damos apoyo y consultoría para que logres obtener de la ventaja.',
    textButton: 'Contactanos',
    textButtonSecondary:
        'Agenda una reunión de 30 minutos sin cargo con nuestros desarrolladores de negocios.',
};
