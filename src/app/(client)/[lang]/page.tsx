import { Header } from '@/components/organisms/Header';
import {
    HowWeCanHelp,
    ClientsReview,
    PartnerShip,
    InstitutuionalVideo,
    Recognition,
    SchedulleCall,
} from '@/components/molecules';
import { getDictionary } from '@/lang/getDictionary';

import styles from './page.module.css';

export default async function Home() {
    const dictionary = await getDictionary('es');

    return (
        <>
            <Header
                isButtonSecondary
                isHome
                isVideo
                subtitle={dictionary.header_home.subtitle}
                textButton={dictionary.header_home.button}
                textButtonSecondary={dictionary.header_home.text}
                title={dictionary.header_home.title}
            />

            <main className={styles._main}>
                <HowWeCanHelp
                    cards={HOWCANHELP.cards}
                    subtitle={HOWCANHELP.subtitle}
                    title={HOWCANHELP.title}
                />
                <InstitutuionalVideo idVideo={'_yg7X-w_Uhs'} />
                <PartnerShip />
                <ClientsReview />
                <Recognition />
                <SchedulleCall />
            </main>
        </>
    );
}

const HOWCANHELP = {
    id: 0,
    title: '¿Cómo podemos ayudar a tu organización?',
    subtitle:
        'Trabajamos codo a codo con organizaciones que buscan generar valor mediante la tecnología… Somos expertos en definir, desarrollar, lanzar, integrar y optimizar proyectos tecnológicos de todo tipo.',
    cards: [
        {
            id: 2,
            title: 'Consultoria',
            subtitle: 'Te acompañamos en tu proceso de transformación tecnológica.',
            image: '/howcanhelp/1.svg',
            redirection: '/services/consultancy',
        },
        {
            id: 0,
            title: 'IT - Staff Augmentation',
            subtitle: 'Adicioná especialistas a tus equipos y escala tu capacidad de desarrollo.',
            image: '/howcanhelp/2.svg',
            redirection: '/services/staff-augmentation',
        },
        {
            id: 4,
            title: 'Outsourcing',
            subtitle: 'Desarrolla con nosotros tus productos digitales y proyectos tecnológicos.',
            image: '/howcanhelp/3.svg',
            redirection: '/services/product-development',
        },
    ],
};
