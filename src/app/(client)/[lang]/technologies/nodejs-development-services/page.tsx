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

function Nodejs() {
    return (
        <>
            <Header
                isButtonSecondary
                isVideo
                subtitle={CDATAHEADER.subtitle}
                textButtonSecondary={CDATAHEADER.textButtonSecondary}
                title={CDATAHEADER.title}
            />
            <main>
                <ServicesNumbers />
                <CarouselReviewClient />
                <OurExpertise CEXPERTISE={CEXPERTISENODE} />
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
    title: 'Sumá desarrolladores de Node.js',
    subtitle:
        'Potencia tus desarrollos con nuestros especialistas en Node.js, potencia tu capacidad de crear software ágiles, eficiente y escalables, rápidos y en tiempo real que contribuyan éxito de tus proyectos y fidelicen a tus usuarios.',
    textButton: 'Contactanos',
    textButtonSecondary: 'Contactanos para sumar desarrolladores de Node.js a tu equipo',
};

const CEXPERTISENODE = [
    {
        id: 0,
        title: 'Apps para streaming',
        description:
            'Brinda una experiencia perfecta en la entrega de contenido vía streaming para tus usuarios con el expertise de nuestros desarrolladores Node.js. Apalancate en nuestra amplia trayectoria en la creación de aplicaciones de transmisión, incluidas plataformas de transmisión de video en vivo y servicios de transmisión de música. Al utilizar Node.js, permitimos a los usuarios descargar primero los componentes principales y acceder al resto de los elementos del software bajo demanda. Dado que los datos provienen de una secuencia, podemos procesarlos en paralelo durante la carga. Con su API de transmisión, Node.js garantiza una transmisión de datos eficiente, reduciendo la sobrecarga del servidor y de la computadora local.',
    },
    {
        id: 1,
        title: 'Chats en tiempo real',
        description:
            'Node.js, con su enfoque asincrónico y basado en eventos, es una excelente opción para crear chats en tiempo real, que se han vuelto necesarios para las necesidades de comunicación y la eficiencia empresarial. Nuestros desarrolladores de Node.js se especializan en crear aplicaciones de chat en tiempo real para garantizar una comunicación fluida en tiempo real y una respuesta rápida del usuario. Utilizamos una amplia gama de tecnologías y bibliotecas de Node.js para garantizar una funcionalidad de chat confiable: Socket.IO, Express.js, Redis, MongoDB, WebSockets, Pusher, Sails.js, Feather.js y otros. Podemos combinar y personalizar estas tecnologías para cumplir con los requisitos específicos de su chat en tiempo real, plataforma de mensajería, atención al cliente en vivo o chatbots.',
    },
    {
        id: 2,
        title: 'SPA complejo',
        description:
            'Emplee a nuestros desarrolladores para manejar Node.js como backend para aplicaciones de página única (SPA). Con Node.js, se beneficia del uso de un único lenguaje (JavaScript) para todo el proyecto, la capacidad de compartir código y estructura de datos entre las aplicaciones frontend y backend, y el potencial de renderizado del lado del servidor. Además, Node.js maneja de manera eficiente solicitudes simultáneas de clientes y cargas de trabajo pesadas de entrada/salida. Hemos implementado con éxito proyectos en diversas industrias, como Agritech, Martech, PropTech, EdTech, Fintech, Fitness & Healthcare, Ride-sharing, Foodtech, Gestión de eventos, Reclutamiento y Recursos Humanos y Comercio electrónico. Somos competentes en la integración de la lógica del lado del servidor con la interfaz del lado del cliente y ofrecemos SPA complejos escalables de alta calidad.',
    },
    {
        id: 3,
        title: 'Herramientas de colaboración',
        description:
            'La colaboración en tiempo real es una característica crucial de las aplicaciones modernas. Ya sea que necesite aplicaciones de coworking, plataformas de gestión de proyectos, herramientas de videoconferencia/audio o soluciones colaborativas de edición de documentos, nuestros desarrolladores de Node.js tienen la experiencia para crear sólidas herramientas de colaboración en tiempo real. Node.js es ideal para crear herramientas de colaboración debido a su arquitectura asincrónica y API basada en eventos. Las aplicaciones de colaboración generan múltiples eventos y solicitudes de E/S a la vez, por lo que Node.js utiliza WebSockets y Event API para evitar bloqueos del servidor, lo que garantiza una entrega eficiente de datos en tiempo real.',
    },
];

const CTYPEOFWORK = {
    title: '¿Para que proyectos nos buscan?',
    description:
        'Somos expertos en desarrollo de productos digitales. En AI CORE tenemos la capacidad de montar desarrollos para cualquier industria. Contanos el alcance del producto a desarrollar, nosotros te apoyamos con nuestras skills en metodologías ágiles, expertos en desarrollos de software y la arquitectura en la nube.',
    options: [
        {
            id: 0,
            title: 'Desarrollamos tus aplicaciones web y móviles.',
        },
        {
            id: 1,
            title: 'Desarrollamos la interfaz y experiencia de para tu usuario (UI/UX).',
        },
        {
            id: 2,
            title: 'Desarrollamos tus aplicaciones de una sola página (SPA).',
        },
        {
            id: 3,
            title: 'Integramos con sistemas backend y APIs.',
        },
        {
            id: 4,
            title: 'Desarrollamos basandonos en componentes.',
        },
    ],
};

const CSTARTTECHINALAUDIT = {
    title: 'Contá con nuestros especialistas en Node.js para tu próximo proyecto.',
    subtitle:
        'Teniendo a AI CORE como tu socio tecnológico apoyándote en tus desarrollos de Node.js la calidad de tu producto está garantizada. Incorpora a nuestros desarrolladores especializados y evalúa su experiencia mediante CVs detallados y transparentes.Te ayudamos a ampliar tus equipos con especialistas en modalidad remota. Nuestros desarrolladores de Node.js cuentan con experiencia demostrable a la hora de aportar calidad a tus proyectos y adaptarse a tus necesidades. Ofrecemos beneficios sobre la subcontratación para cuidar tu budget sin descuidar la calidad técnica.',
    btnText: 'RECIBI EL CV DE NUESTROS ESPECIALISTAS EN NODE.JS',
    btnLink: 'SOLICITA DESARROLLADORES',
    img: '/node-developer.webp',
    alt: 'node-developer',
};

const CEXTENDYOURTEAM = {
    title: '¿Por qué expandir tu equipo con nuestros especialistas en Node.js?',
    description:
        'Potencia tus desarrollos con nuestra experiencia para obtener la escalabilidad, rentabilidad, rapidez, y resultados que estas buscando. Nuestros desarrolladores de Node.js aportan soluciones de red escalables, incluido el desarrollo completo, aplicaciones móviles multiplataforma y desarrollo de API. Elegi a AI CORE como tu socio tecnológico.',
    options: [
        {
            id: 0,
            title: 'Tarda menos',
            subtitle:
                'Amplíe su equipo con nuestros desarrolladores de Node.js y ahorre un tiempo precioso. La contratación de ingenieros locales en EE. UU. suele tardar una media de 2 meses. Puede causar un retraso significativo en proyectos con plazos ajustados. En Brocoders, proporcionamos el talento backend adecuado en tan solo 7 días.',
        },
        {
            id: 1,
            title: 'Es mas flexible',
            subtitle:
                'Ya sea que necesite soporte a corto o largo plazo, contrate a nuestros desarrolladores de Node.js por el período que se adapte a sus necesidades y elimine el costo de la contratación a tiempo completo. No dude en ampliar su equipo cuando sea necesario y garantizar la adaptabilidad del proyecto.',
        },
        {
            id: 2,
            title: 'Sumas expertos',
            subtitle:
                'Queremos elegir la mejor opción para los desarrolladores de Node.js para su equipo. Comencemos con una reunión para aclarar los detalles del proyecto y comprender sus requisitos únicos. Luego le presentamos candidatos calificados para que pueda examinarlos y entrevistarlos personalmente. Seleccione la combinación perfecta para su proyecto y formaremos rápidamente su equipo eficiente.',
        },
        {
            id: 3,
            title: 'Reduces costos',
            subtitle:
                'Asociarse con una empresa subcontratada le brinda la ventaja de reducir costos. Al contratar a nuestros desarrolladores de Node.js, elimina los gastos de contratación, capacitación del personal, espacio de oficina, facturas de energía, licencias de software, beneficios para empleados, incrementos de nómina y costos logísticos. Sólo paga por el trabajo real por proyecto.',
        },
        {
            id: 4,
            title: 'Cumplis con tus deadlines',
            subtitle:
                'Con nuestro equipo de desarrolladores de Node.js, puedes cumplir fácilmente con los plazos del proyecto. Puede contratar y supervisar empleados rápidamente para acelerar el proceso de desarrollo. Nuestros desarrolladores están listos para comenzar tan pronto como se unan a su equipo.',
        },
        {
            id: 5,
            title: 'Potencias tu equipo',
            subtitle:
                'Nuestros especialistas en Node.js se integran con tu equipo y se enfocan en generar colaboración y sinergia durante todo el proceso de desarrollo. Tu comunicación con ellos es  directa y gestionas la carga de trabajo y horas de cada desarrollador. Nosotros nos encargamos de todo el papeleo, el diseño del equipo y las operaciones de nómina, permitiéndote enfocarte en una gestión eficiente.',
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

export default Nodejs;
