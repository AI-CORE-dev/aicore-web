import {
    HowRetainTalent,
    HowWeCanHelp,
    Recognition,
    SchedulleCall,
    TextsInfo,
    WhyOptForMVP,
} from '@/components/molecules';
import { Header } from '@/components/organisms/Header';

function ProductDevelopment() {
    return (
        <>
            <Header
                isButtonSecondary
                isHome
                isVideo
                subtitle={CDATAHEADER.subtitle}
                textButton={CDATAHEADER.textButton}
                textButtonSecondary={CDATAHEADER.textButtonSecondary}
                title={CDATAHEADER.title}
            />

            <main>
                <HowRetainTalent CARDS={CARDS} isTitle={false} title={'¿Qué te ofrecemos?'} />
                <WhyOptForMVP
                    isOtherPage
                    subtitle={
                        'Trabajamos con metodologías ágiles, lo que nos permite construir aplicaciones de todo tipo, desde plataformas de redes sociales hasta un marketplace. AI CORE ofrece un desarrollo a medida de aplicaciones webs con un equipo de expertos en distintas disciplinas para asegurar un producto que garantice al usuario una experiencia única.'
                    }
                    title={'¿Qué te ofrecemos?'}
                />
                <HowWeCanHelp cards={HOWCANHELP.cards} title={HOWCANHELP.title} />
                <TextsInfo texts={TEXTS} />
                <Recognition />

                <SchedulleCall />
            </main>
        </>
    );
}

const CDATAHEADER = {
    title: 'Desarrollamos a medida tu proyecto utilizando las últimas tecnologías del mercado y las mejores prácticas',
    subtitle:
        'Materializa tus ideas e innova para ganar competitividad mediante nuestro servicios de Outsourcing',
    textButton: 'Desarrolla tu web',
    textButtonSecondary:
        'Agenda una reunión de 30 minutos con nuestros desarrolladores de negocios.',
};

const CARDS = [
    {
        id: 0,
        title: 'Aplicaciones web y móviles.',
        img: '/services/product_development/Aplicaciones_web_y_móviles.svg',
        text: '',
    },
    {
        id: 1,
        title: 'Automatización de procesos',
        img: '/services/product_development/Automatización_de_procesos.svg',
        text: '',
    },
    {
        id: 2,
        title: 'Softwares a medida',
        img: '/services/product_development/Softwares_a_medida.svg',
        text: '',
    },
    {
        id: 3,
        title: 'Desarrollo de MVPs',
        img: '/services/product_development/MVPs.svg',
        text: '',
    },
    {
        id: 4,
        title: 'Inteligencia Artificial (IA)',
        img: '/services/product_development/Inteligencia_Artificial_(IA).svg',
        text: '',
    },
    {
        id: 5,
        title: 'Integraciones y APIs',
        img: '/services/product_development/Integraciones_y_APIs.svg',
        text: '',
    },
];

const TEXTS = [
    {
        id: 0,
        title: '¿Buscas un desarrollo ágil y rápido?',
        subtitle:
            'En AI CORE adoptamos metodologías ágiles como Scrum y Kanban para garantizar la entrega rápida y continua sin descuidar la calidad del desarrollo.',
    },
    {
        id: 1,
        title: '¿Buscás un aliado que te ayude en el diseño de tu solución?',
        subtitle:
            'En AI CORE acompañamos a nuestros clientes en el proceso de transformación digital, asistiendo en la gestión de requerimientos y planificación de proyectos.',
    },
    {
        id: 2,
        title: 'Escala tu producto y continua agregando valor a tus usuarios.',
        subtitle:
            'Somos expertos en escalar productos existentes, corregir errores y sumar nuevas funcionalidades para atraer a tu solución  nuevos usuarios, ganar mercado y mejorar la experiencia de uso.',
    },
    {
        id: 3,
        title: 'Agregá valor a tu solución mediante integraciones de terceros y APIs.',
        subtitle:
            'Integramos servicios de terceros a tu solución aportando funcionalidades de forma rápida y evitando costos innecesarios.',
    },
];

const HOWCANHELP = {
    title: '¿Cómo es nuestro proceso?',
    cards: [
        {
            id: 0,
            title: 'Relevamiento de necesidades y requerimientos',
            image: '/howcanhelp/1.svg',
        },
        {
            id: 1,
            title: 'Diseño del equipo',
            image: '/howcanhelp/2.svg',
        },
        {
            id: 2,
            title: 'Diseño y presentación de prototipos.',
            image: '/howcanhelp/3.svg',
        },
        {
            id: 3,
            title: 'Reportes y demos semanales.',
            image: '/howcanhelp/3.svg',
        },
    ],
};

export default ProductDevelopment;
