import React from 'react';

import { Header } from '@/components/organisms/Header';
import {
    AboutUs,
    InstagramFeed,
    InstitutionalPhotos,
    OpenPositions,
    OurValues,
} from '@/components/molecules';

function CareersPage() {
    return (
        <>
            <Header subtitle={DH.subtitle} textButton={DH.textButton} title={DH.title} />

            <main>
                <AboutUs isCareers />
                <OurValues />
                <InstitutionalPhotos />
                <OpenPositions />
                <InstagramFeed />
            </main>
        </>
    );
}

export default CareersPage;

const DH = {
    title: 'Desarrolla tu carrera profesional en AI CORE.',
    subtitle:
        'No somos solamente una empresa de sistemas. En AI CORE creemos y apostamos por el talento y el potencial de aquellos que conforman nuestra comunidad y nuestros proyectos.',
    textButton: 'Conoce las vacantes',
};
