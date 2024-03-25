import { Header } from '@/components/organisms/Header';
import {
    HowWeCanHelp,
    ScheduleCall,
    ExtendYourTeam,
    BannerOtherTechnologies,
    SliderLogos,
    ListTechnologies,
    FaQ,
    InstitutuionalVideo,
    SchedulleLanding,
} from '@/components/molecules';
import { BannerContactUs } from '@/components/molecules/technologies/BannerContactUs';

import styles from './page.module.css';

export default async function Home() {
    return (
        <>
            <Header
                subtitle={CDATAHEADER.subtitle}
                textButton={CDATAHEADER.textButton}
                textButtonSecondary={CDATAHEADER.textButtonSecondary}
                title={CDATAHEADER.title}
            />

            <main className={styles._main}>
                <HowWeCanHelp />
                <InstitutuionalVideo />
                <BannerContactUs />
                <ExtendYourTeam options={CEXTENDYOURTEAM.options} title={CEXTENDYOURTEAM.title} />
                <BannerOtherTechnologies />
                <SliderLogos />
                <ListTechnologies />
                <FaQ CFAQ={CFAQ} title={'¿Cómo trabajamos?'} />
                <SchedulleLanding />
            </main>
        </>
    );
}

const CDATAHEADER = {
    title: 'Reduci tus costos operativos y conta con información en tiempo real con un desarrollo a medida para tu empresa.',
    subtitle:
        'Somos especialistas en automatizar procesos con IA y desarrollar aplicaciones que agilizan y dan eficiencia a tus operaciones.',
    textButton: 'Contactanos',
    textButtonSecondary: 'Contanos tu proyecto.',
};

const CEXTENDYOURTEAM = {
    title: '¿Qué podemos aportarle a tu modelo de negocio?',
    options: [
        {
            id: 0,
            title: 'Simplicidad',
            subtitle:
                'Integramos todos tus sistemas, datos y automatizamos lo repetitivo para que puedas enfocarte en la estrategía de tu negocio.',
        },
        {
            id: 1,
            title: 'Costo-eficiencia',
            subtitle:
                'Al automatizar tareas repetitivas y eficientizar tus operaciones gastas menos en ecursos que completen tareas manuales que no aportan un valor agregada y tardas un considerablemente menos.',
        },
        {
            id: 2,
            title: 'Adaptabilidad',
            subtitle:
                'Siendo flexible, eficiente y contando con la información estratégica recolectada por nuestros sistemas logras adaptarte a cambios y fluctuaciones con una mayor capacidad de respuesta.',
        },
        {
            id: 3,
            title: 'Integración a tus sistemas actuales',
            subtitle:
                ' No es necesario tirar tu inversión por la basura ni comenzar de 0, nuestros desarrollos a medida se integran con tus sistemas actuales, eficientizando puntos claves, recolectando los datos existentes y potenciando su uso.',
        },

        {
            id: 4,
            title: 'Seguridad',
            subtitle:
                'Hacemos foco en la seguridad y la privacidad de tu información para mitigar cualquier tipo de riesgo cibernetico o brecha.',
        },

        {
            id: 5,
            title: 'Insigths',
            subtitle:
                'Al cruzar la información de todas tus operaciones y visualizarla de forma fácil y práctica te damos el insumo para que tomes las mejores decisiones estratégicas para tu negocio y crezcas en el mercado.',
        },
    ],
};

const CFAQ = [
    {
        id: 0,
        question: '¿Fase de descubrimiento?',
        answer: 'Generamos reuniones para entender la idea, los usuarios y los requerimientos lo que garantiza que nuestro desarrollo materialize tu visión.',
    },
    {
        id: 1,
        question: 'Diseño y desarrollo',
        answer: 'Alineamos el diseño presentando las pantallas y navegación del producto a desarrollar para garantizar una experiencia de usuario optima y estetica. ',
    },
    {
        id: 2,
        question: 'Testing',
        answer: 'Generamos pruebas diversas con diferentes profesionales para tener un producto sólido y avanzar a la codificación de los requerimientos.',
    },
];
