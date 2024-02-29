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
                <ExtendYourTeam
                    description={CEXTENDYOURTEAM.description}
                    options={CEXTENDYOURTEAM.options}
                    title={CEXTENDYOURTEAM.title}
                />
                <FaQ CFAQ={CFAQ} />
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
        'Agenda una reunión de 30 minutos con nuestros desarrolladores de negocios.',
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

const CEXTENDYOURTEAM = {
    title: 'Extendé tu equipo',
    description:
        'Suma de formá rápida y sencilla perfiles para fortalecer tus proyectos, en AI CORE contamos con los especialistas y el tiempo de respuesta para sumarlos a tu equipo de inmediato.',
    options: [
        {
            id: 0,
            title: 'Desarrollador Fullstack',
            subtitle: 'Desarrollador Fullstack con experiencia en React y Node.js.',
        },
        {
            id: 1,
            title: 'Desarrollador Frontend',
            subtitle: 'Desarrollador Frontend con experiencia en React.',
        },
        {
            id: 2,
            title: 'Desarrollador Backend',
            subtitle: 'Desarrollador Backend con experiencia en Node.js.',
        },
        {
            id: 3,
            title: 'Desarrollador Móvil',
            subtitle: 'Desarrollador Móvil con experiencia en React Native.',
        },
        {
            id: 4,
            title: 'Desarrollador de QA',
            subtitle: 'Desarrollador de QA con experiencia en testing de aplicaciones.',
        },
    ],
};

const CFAQ = [
    {
        id: 0,
        question: '¿Qué es Node.js y por qué es adecuado para el desarrollo web?',
        answer: 'Node.js es un tiempo de ejecución de JavaScript integrado en el motor V8 de Chrome. Permite a los desarrolladores ejecutar JavaScript en el lado del servidor, lo que lo hace ideal para el desarrollo web. Node.js proporciona alta escalabilidad, manejo eficiente de solicitudes simultáneas y un rico ecosistema de bibliotecas y marcos.',
    },
    {
        id: 1,
        question: '¿Qué ventajas tiene utilizar Node.js?',
        answer: 'Gracias a Node.js, los equipos de desarrollo mejoran el rendimiento con menos gasto. La tecnología agrupa todas las solicitudes entrantes en un solo proceso en lugar de establecer muchas. Si alguna conexión queda inactiva, Node.js pasa a otra y ejecuta el código en el mismo hilo. En consecuencia, un proceso utiliza menos memoria que varios. Más aún, Node.js está escrito con JavaScript, por lo que resulta amigable para los especialistas de front-end.',
    },
    {
        id: 2,
        question:
            '¿Cómo puede beneficiar mi proyecto o negocio la contratación de desarrolladores de Node.js?',
        answer: 'Contratar desarrolladores de Node.js aporta numerosos beneficios. Poseen experiencia en la creación de aplicaciones web escalables, sistemas de chat en tiempo real, aplicaciones de transmisión, SPA complejos, API y más. Su conocimiento de JavaScript y Node.js les permite ofrecer soluciones rápidas y confiables, mejorar el rendimiento y brindar una experiencia de usuario excepcional.',
    },
    {
        id: 3,
        question:
            '¿Tiene ejemplos de proyectos exitosos con los que hayan trabajado sus desarrolladores de Node.js?',
        answer: 'Hemos entregado con éxito proyectos para varios clientes en diversas industrias, como comercio electrónico, atención médica, finanzas, marketing y más. Los ejemplos incluyen el desarrollo de aplicaciones de chat en tiempo real, la creación de API escalables y la creación de aplicaciones web eficientes que hayan recibido comentarios positivos de los usuarios.',
    },
    {
        id: 4,
        question: '¿Qué empresas utilizan Node.js?',
        answer: 'Gigantes como Facebook, Google, Amazon y LinkedIn eligieron Node.js para construir sus plataformas. Funciona bien para cualquier aplicación en tiempo real, proporcionando transmisión de video, intercambio de archivos y aplicaciones de red intensivas. Node.js ayuda a las empresas a minimizar sus gastos. LinkedIn redujo seriamente el número de sus servidores de 30 a 3 después de pasar a Node.js.',
    },
];

export default Reactjs;
