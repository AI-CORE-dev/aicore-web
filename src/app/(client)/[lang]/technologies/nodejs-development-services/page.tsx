import {
    ExtendYourTeam,
    FaQ,
    Recognition,
    SchedulleCall,
    ServicesNumbers,
    StartTechnicalAudit,
    TypeOfWork,
} from '@/components/molecules';
import { Header } from '@/components/organisms/Header';

function Nodejs() {
    return (
        <>
            <Header
                isButtonSecondary
                isVideo
                subtitle={CDATAHEADER.subtitle}
                textButton={CDATAHEADER.textButton}
                textButtonSecondary={CDATAHEADER.textButtonSecondary}
                title={CDATAHEADER.title}
            />
            <main>
                <ServicesNumbers CNUMBERS={CNUMBERS} />
                <FaQ CFAQ={CFAQNODE} title={'Somos expertos en Node.js'} />

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
                <Recognition />
                <SchedulleCall />
            </main>
        </>
    );
}

const CDATAHEADER = {
    title: 'Sumá especialistas en Node.js',
    subtitle:
        'Potencia tus desarrollos con nuestros especialistas en Node.js, aumenta tu capacidad de crear software ágiles, eficientes y escalables para garantizar el éxito de tus proyectos y la retención de usuarios.',
    textButton: 'Contactanos',
    textButtonSecondary: 'Contactanos para sumar desarrolladores de Node.js a tu equipo',
};

const CTYPEOFWORK = {
    title: 'Tu socio tecnológico para materializar todo tipo de proyectos',
    description:
        'Contanos el alcance del producto a materializar que nosotros ponemos el 100% de nuestras skills para entregarte las mejores:',
    options: [
        {
            id: 0,
            title: 'Aplicaciones web y móviles.',
        },
        {
            id: 1,
            title: 'Interfaces que enamoran y una user experience intuitiva (UI/UX).',
        },
        {
            id: 2,
            title: 'Aplicaciones de una sola página (SPAs)',
        },
        {
            id: 3,
            title: 'Integraciones con sistemas backend y APIs.',
        },
        {
            id: 4,
            title: 'Desarrollos basados en componentes.',
        },
    ],
};

const CSTARTTECHINALAUDIT = {
    title: 'Contá con nuestros especialistas  para tu próximo proyecto',
    subtitle:
        '¡Teniendo a AI CORE como socio tecnológico estás cubierto para todos tus desarrollos con nuestro staff! Te damos la posibilidad de incorporar rápidamente a nuestros desarrolladores a tu equipo mediante nuestros servicios de Staff Augmentation… ¿Por dónde empezar? Evalúa su perfil mediante CVs detallados y transparentes, envíanos un mensaje y a brevedad estaremos coordinando una reunión donde te contamos cómo seguir para que puedas ampliar tus equipo en modalidad remota y comenzar a desarrollar con las mejores prácticas.',
    btnText: 'RECIBI EL CV DE NUESTROS ESPECIALISTAS EN NODE.JS',
    btnLink: 'SOLICITA DESARROLLADORES',
    img: '/service-staff.jpg',
    alt: 'node-developer',
};

const CEXTENDYOURTEAM = {
    title: '¿Por qué expandir tu equipo con nuestros especialistas en Node.js?',
    description:
        'Potencia tus desarrollos con nuestra experiencia. Nuestros servicios de staffing están pensandos para darte escalabilidad inmediata para que empieces a ver los resultados que estás buscando.',
    options: [
        {
            id: 0,
            title: 'Es rápido',
            subtitle:
                'Escala tu equipo con nuestros desarrolladores de forma inmediata. La contratación de desarrolladores suele tardar en promedio de 2 meses. Evita retrasos en proyectos, AI CORE pone a disposición talento en tan solo 15 días.',
        },
        {
            id: 1,
            title: 'Es flexible',
            subtitle:
                'Ya sea que necesites fuerza de desarrollo a corto o largo plazo, nuestros desarrolladores de Node.js pueden sumarse a tu proyecto de forma rápida, por el tiempo que requieras y evitando los costos de la contratación de tiempo completo. ¡BOOM! Escalabilidad para tus proyectos.',
        },
        {
            id: 2,
            title: 'Es transparente',
            subtitle:
                'El talento es clave y todos queremos elegir a los mejores en su campo… Pero nunca había sido tan fácil. Comenzamos con una reunión exploratoria para aclarar los detalles de tu proyecto y comprender sus requerimientos. Luego te presentamos nuestro top mejores candidatos para que puedas evaluarlos y entrevistarlos personalmente.',
        },
        {
            id: 3,
            title: 'Cuida tu budget',
            subtitle:
                'Nuestra solución de staffing es ideal para empresas que buscan cuidar su presupuesto sin descuidar la calidad de sus desarrollos. Al sumar a nuestros desarrolladores eliminas los gastos de contratación, capacitación, espacio de oficina, facturas de servicios, licencias de software, beneficios para empleados, equipos, incrementos de nómina y costos logísticos y la lista sigue y sigue. En AI CORE pagas por el tiempo de trabajo real dedicado a tu proyecto.',
        },
        {
            id: 4,
            title: 'Se adapta a tus deadlines',
            subtitle:
                'Cumpli con los plazos de tus proyectos por más desafiantes que sean. Sumá talento y gestionalo como una pieza más de tu equipo. Nuestro staff sabe lo que hace y en AI CORE somos expertos en sumar talento a nuevos proyectos y que comiencen a trabajar de forma rápida adaptándose a tu equipo.',
        },
        {
            id: 5,
            title: 'Se potencia tu equipo',
            subtitle:
                'Nuestros especialistas se integran con tu equipo para colaborar y generar sinergias desde el minuto 1 y  durante todo el proceso de desarrollo. Tu comunicación con ellos es directa para que puedas asignar prioridades y gestionar su tiempo en tu proyecto. Nosotros nos encargamos de todo el papeleo para que tu proyecto despegue.',
        },
    ],
};

const CFAQ = [
    {
        id: 0,
        question: '¿Qué es Node.js y por qué es tan popular en el desarrollo web?',
        answer: ' Node.js es una plataforma de programación que permite crear aplicaciones web dinámicas. Es ideal para el desarrollo web porque utiliza un lenguaje común, como por ejemplo JavaScript, tanto en el lado del cliente como en el servidor.',
    },
    {
        id: 1,
        question: '¿Qué ventajas ofrece desarrollar en Node.js?',
        answer: 'Algunas ventajas de Node.js incluyen su velocidad, escalabilidad y capacidad para manejar muchas solicitudes al mismo tiempo, lo que mejora la experiencia del usuario.',
    },
    {
        id: 2,
        question: '¿Por qué considerar contratar expertos en Node.js?',
        answer: 'Contratar desarrolladores de Node.js puede potenciar tu proyecto aportando rapidez, eficiencia y flexibilidad en el desarrollo de aplicaciones web.',
    },
    {
        id: 3,
        question: '¿Para qué tipo de desarrollos conviene Node.js?',
        answer: 'Algunos ejemplos de los productos digitales popularmente construidos con Node.js incluyen aplicaciones de streaming en tiempo real, aplicaciones de redes sociales y plataformas de e-commerce.',
    },
    {
        id: 4,
        question: '¿Que tipo de empresas utilizan Node.js en sus proyectos?',
        answer: 'Grandes empresas como Netflix, Uber, LinkedIn y PayPal eligen Node.js para desarrollar sus aplicaciones web debido a su rendimiento y escalabilidad.',
    },
];

const CFAQNODE = [
    {
        id: 0,
        question: 'Apps para streaming',
        answer: 'Velocidad relámpago, escalabilidad sin límites y capacidad para el streaming en tiempo real, Nuestros especialistas en Node.js están capacitados para desarrollar experiencias de streaming fluidas y emocionantes. Al desarrollar en Node.js garantizamos una transmisión de datos eficiente, reduciendo la sobrecarga del servidor y de la computadora local.',
    },
    {
        id: 1,
        question: 'Chats en tiempo real',
        answer: 'Node.js, gracias a su enfoque basado en eventos y asincrónico, emerge como una opción sobresaliente para construir chats en tiempo real. Indispensables para las empresas que buscan una comunicación instantánea y directa con clientes y equipos internos, mejorando la atención al cliente, la resolución de problemas y la colaboración en tiempo real, lo que impulsa la eficiencia operativa y la satisfacción del cliente.',
    },
    {
        id: 2,
        question: 'SPA de alta complejidad',
        answer: 'Node.js toma protagonismo en el back-end de tus aplicaciones de una sola página (SPA). ¡Bingo! Ahora puedes usar un solo lenguaje (JavaScript) para todo el proyecto, compartir fácilmente código entre la parte visible y la oculta de tu aplicación, y aprovechar la velocidad que ofrece al procesar muchas solicitudes y trabajos pesados al mismo tiempo. ¡y todo en un solo idioma!',
    },
    {
        id: 3,
        question: 'Herramientas de colaboración',
        answer: 'Apoyándonos en Node.js podemos crear potentes herramientas de colaboración en tiempo real para tu empresa. Utilizamos Node.js debido a su capacidad para manejar múltiples eventos simultáneamente sin bloquear el servidor, lo que garantiza una entrega eficiente de datos en tiempo real para aplicaciones como plataformas de gestión de proyectos, videoconferencias y edición colaborativa de documentos.',
    },
];

const CNUMBERS = [
    {
        id: 1,
        title: '+30',
        subtitle: 'Desarrolladores',
    },
    {
        id: 2,
        title: '+10000',
        subtitle: 'Candidatos en nuestras bases',
    },
    {
        id: 3,
        title: '15 días',
        subtitle: 'Para sumar talentos a tu equipo',
    },
    {
        id: 4,
        title: '+50',
        subtitle: 'Proyectos potenciados',
    },
];

export default Nodejs;
