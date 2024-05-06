import React from 'react';

import { Header } from '@/components/organisms/Header';
import {
    AboutUs,
    HowRetainTalent,
    InstagramFeed,
    InstitutionalPhotos,
    OpenPositions,
    RecruimentProcess,
    OurValues,
    SchedulleCall,
} from '@/components/molecules';

function CareersPage() {
    return (
        <>
            <Header isVideo subtitle={DH.subtitle} textButton={DH.textButton} title={DH.title} />

            <main>
                <AboutUs isCareers />
                <OurValues />
                <InstitutionalPhotos />
                <OpenPositions />
                <HowRetainTalent CARDS={CARDS} title={'¿Qué te ofrecemos?'} />
                <InstagramFeed />
                <RecruimentProcess />
                <SchedulleCall />
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

const CARDS = [
    {
        id: 0,
        title: 'Formación continua',
        img: '/carrers/retain_talents/1.png',
        text: 'Clases de ingles, reintegros en tu formación, plan de carrera personalizado, participación en conferencias, eventos y seminarios.',
    },
    {
        id: 1,
        title: 'Aprende haciendo',
        img: '/carrers/retain_talents/2.png',
        text: 'Trabaja codo a codo con nuestros seniors developers absorbiendo las mejores prácticas del mercado en las ultimas tecnologías utilizadas para el desarrollo de productos.',
    },
    {
        id: 2,
        title: 'Vida saludable',
        img: '/carrers/retain_talents/3.png',
        text: 'Ofrecemos aplicaciónes de bienestar y deporte para que puedas entrenar, cuidar tus hábitos y obra social prepaga para concentrarte en tu salud.',
    },
    {
        id: 3,
        title: 'Trabajo en equipo eficiente.',
        img: '/carrers/retain_talents/4.png',
        text: 'Utilizamos metodologías ágiles como SCRUM para la gestión de proyectos.',
    },
    {
        id: 4,
        title: 'Home Office',
        img: '/carrers/retain_talents/5.png',
        text: 'Brindamos la posibilidad de realizar home office 100%.',
    },
    {
        id: 5,
        title: 'Pasión sobre todas las cosas.',
        img: '/carrers/retain_talents/6.png',
        text: 'Nos involucramos de lleno en lo que nos apasiona, el valor que la tecnología le aporta a las organizaciones y eso se respira en cada meet de cada proyecto y nos empuja a crecer.',
    },
];
