import {
    Awards,
    CarouselReviewClient,
    ExtendYourTeam,
    FaQ,
    ScheduleCall,
    ServicesNumbers,
    StartTechnicalAudit,
    TypeOfWork,
} from '@/components/molecules';
import { OurExpertise } from '@/components/molecules/technologies';
import { Header } from '@/components/organisms/Header';

function Reactjs() {
    return (
        <>
            <Header isButtonSecondary isVideo title={CDATAHEADER.title} />
            <main>
                <ServicesNumbers />
                <CarouselReviewClient />
                <OurExpertise CEXPERTISE={CEXPERTISEREACT} />
                <TypeOfWork
                    description={CTYPEOFWORK.description}
                    options={CTYPEOFWORK.options}
                    title={CTYPEOFWORK.title}
                />
                <StartTechnicalAudit
                    alt={CSTARTTECHINALAUDIT.alt}
                    btnLink={CSTARTTECHINALAUDIT.btnLink}
                    btnText={CSTARTTECHINALAUDIT.btnText}
                    img={CSTARTTECHINALAUDIT.img}
                    subtitle={CSTARTTECHINALAUDIT.subtitle}
                    title={CSTARTTECHINALAUDIT.title}
                />
                <ExtendYourTeam />
                <FaQ />
                <Awards />
                <ScheduleCall />
            </main>
        </>
    );
}

const CDATAHEADER = {
    title: 'React Development Service',
    subtitle: '',
    textButton: 'Contactanos',
    textButtonSecondary:
        'Agenda una reunión de 30 minutos sin cargo con nuestros desarrolladores de negocios.',
};

const CEXPERTISEREACT = [
    {
        id: 0,
        title: 'Streaming apps',
        description:
            'Optimize streaming content delivery to your users with the help of our Node.js developers. Leverage our expertise in building various streaming applications, including live video streaming platforms and music streaming services. Using Node.js, we allow users to download the core components first and access the rest software elements on-demand. Since the data is coming through a stream, we can process it in parallel during loading. With its streaming API, Node.js ensures efficient data streaming, reducing server and local computer overload.',
    },
    {
        id: 1,
        title: 'Real-time chats',
        description:
            'Optimize streaming content delivery to your users with the help of our Node.js developers. Leverage our expertise in building various streaming applications, including live video streaming platforms and music streaming services. Using Node.js, we allow users to download the core components first and access the rest software elements on-demand. Since the data is coming through a stream, we can process it in parallel during loading. With its streaming API, Node.js ensures efficient data streaming, reducing server and local computer overload.',
    },
    {
        id: 2,
        title: 'Complex SPA',
        description:
            'Optimize streaming content delivery to your users with the help of our Node.js developers. Leverage our expertise in building various streaming applications, including live video streaming platforms and music streaming services. Using Node.js, we allow users to download the core components first and access the rest software elements on-demand. Since the data is coming through a stream, we can process it in parallel during loading. With its streaming API, Node.js ensures efficient data streaming, reducing server and local computer overload.',
    },
    {
        id: 3,
        title: 'Collaboration tools',
        description:
            'Optimize streaming content delivery to your users with the help of our Node.js developers. Leverage our expertise in building various streaming applications, including live video streaming platforms and music streaming services. Using Node.js, we allow users to download the core components first and access the rest software elements on-demand. Since the data is coming through a stream, we can process it in parallel during loading. With its streaming API, Node.js ensures efficient data streaming, reducing server and local computer overload.',
    },
];

const CTYPEOFWORK = {
    title: 'Estos son los proyectos que desarrollamos',
    description:
        'No importa la clase de producto que estés constrendo. En AI CORE podemos desarrollar para cualquier industría, nuestros expertise reside en el desarrollo de productos a travez de metodologías ágiles logrando así flexibilidad y calidad para cumplir cualquier requisito.',
    options: [
        {
            id: 0,
            title: 'Desarrollo de MVPs',
        },
        {
            id: 1,
            title: 'Migraciones tecnológicas',
        },
        {
            id: 2,
            title: 'Desarrollo de nuevas funcionalidades',
        },
        {
            id: 3,
            title: 'Desarrollo de proyectos a largo plazo',
        },
        {
            id: 4,
            title: 'Soporte y mantenimiento evolutivo',
        },
    ],
};

const CSTARTTECHINALAUDIT = {
    title: 'Comenza con una auditoría técnica',
    subtitle:
        'Revisamos tu app desde su perspectiva técnica y te proveemos de un reporte de nuestros desarrolladores seniores listo para que puedas accionar y sobre que puntos priorizar. De esta forma podes evaluar nuestras skills y decidir sobre ello si queres trabajar con nosotros sobre el proyecto.',
    btnText: 'Descargar nuestro reporte para auditoría.',
    btnLink: '/',
    img: '/node-developer.webp',
    alt: 'node-developer',
};

export default Reactjs;
