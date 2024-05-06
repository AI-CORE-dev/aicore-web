import {
    ExtendYourTeam,
    FaQ,
    SchedulleCall,
    ServicesNumbers,
    StartTechnicalAudit,
    TypeOfWork,
} from '@/components/molecules';
import { OurExpertise } from '@/components/molecules/technologies';
import { Header } from '@/components/organisms/Header';

function Reactjs() {
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
                <SchedulleCall />
            </main>
        </>
    );
}

const CDATAHEADER = {
    title: 'Sumá a nuestros expertos en React.js',
    subtitle:
        '¡Aplicaciones web y mobile de primera con React.js! Productos digitales escalables y con el mejor rendimiento, diseñados cuidadosamente para entregar la mejor experiencia de usuario posible y perfecta para fidelizar a los exigentes usuarios de hoy en día.',
    textButton: 'Contactanos',
    textButtonSecondary: '',
};

const CEXPERTISEREACT = [
    {
        id: 0,
        title: 'Nuestra Experiencia en React.js',
        description:
            'Potencia tu equipo interno con nuestros desarrolladores y garantiza productos digitales alineados con las últimas tendencias y mejores prácticas del mercado.',
    },
    {
        id: 1,
        title: 'Aplicaciones Web Progresivas (PWA)',
        description:
            'React.js es clave para desarrollar PWAs, asegurando experiencias similares a aplicaciones accesibles directamente desde navegadores web. Con especialistas en React.js de tu lado desarrollar PWA rápidas y confiables que funcionen perfectamente en todos los dispositivos es posible en tiempo record.            ',
    },
    {
        id: 2,
        title: 'Herramientas de Visualización de Datos',
        description:
            'Contar con talento en React.js te permite contar con una amplia gama de opciones y bibliotecas para crear cuadros, gráficos y paneles. A través de nuestra experiencia transformamos datos en impresionantes representaciones visuales utilizando bibliotecas como D3.js, Victory, Chart.js, entre otras.',
    },
    {
        id: 3,
        title: 'Marketplaces',
        description:
            'Apoyándonos en React.js, creamos interfaces dinámicas que facilitan interacciones fluidas entre compradores y vendedores. Una de las claves para crear un marketplaces sólido y seguro con características como autenticación de usuarios, listado de productos, funcionalidad de búsqueda y gestión de transacciones.',
    },
    {
        id: 4,
        title: 'Desarrollo de E-commerce',
        description:
            'Creamos soluciones rápidas, escalables y compatibles con SEO para que tu E-commerce entregue una experiencia de compra excepcional.',
    },
    {
        id: 5,
        title: 'Desarrollo de Aplicaciones Multiplataforma',
        description:
            'Utilizando React Native, ayudamos a las empresas a crear aplicaciones móviles nativas multiplataforma y a ampliar su presencia digital.',
    },
];

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
            title: 'Aplicaciones de una sola página (SPAs).',
        },
        {
            id: 3,
            title: 'Integraciones con sistemas backend y APIs',
        },
        {
            id: 4,
            title: 'Desarrollos basado en componentes',
        },
    ],
};

const CSTARTTECHINALAUDIT = {
    title: 'Contá con desarrolladores de React.js en tu próximo proyecto',
    subtitle:
        'Accede al talento AI CORE en React.js. Evalúa su experiencia mediante CV detallados y transparentes, para identificar a los candidatos más adecuados Aprovecha los beneficios de nuestra solución de Staff Augmentation para ampliar su equipo con especialistas mediante modalidad remota y escalar tus capacidades internas en desarrollo.',
    btnText: 'SOLICITA DESARROLLADORES',
    btnLink: 'SOLICITA DESARROLLADORES',
    img: '/service-staff.jpg',
    alt: 'react-developer',
};

const CEXTENDYOURTEAM = {
    title: '¿Por qué sumar expertos en React.js?',
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
                'Cumpli con los plazos de tus proyectos, por más desafiantes que sean. Sumá talento y gestionalo como una pieza más de tu equipo. Nuestro staff sabe lo que hace y en AI CORE somos expertos en sumar talento a nuevos proyectos y que comiencen a trabajar de forma rápida adaptándose a tu equipo.',
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
        question: '¿Cuándo se introdujo React.js?',
        answer: 'Facebook compartió React.js en JSConf US en mayo de 2013. Al principio, la comunidad de desarrollo no lo aceptó, ya que preferían colocar el markup y el código JavaScript en el mismo archivo. Sin embargo, nuevas empresas como Netflix y Airbnb eligen React.js para desarrollar sus productos. Destacando su enfoque centrado en componentes.',
    },
    {
        id: 1,
        question: '¿Es React.js un framework?',
        answer: 'Los creadores de React.js presentan a React.js como una biblioteca, no un framework. Sin embargo, parece ser tan poderoso como uno. React.js se ocupa de construir una estructura de componentes de UI, ayudándote a administrar de manera eficiente en lo que sea que estás trabajando.',
    },
    {
        id: 2,
        question: '¿En qué casos se utiliza React.js?',
        answer: 'No hay restricciones para su uso, pero es clave contar con un sólido conocimiento de JavaScript y aplicaciones de página única (SPA). Los desarrolladores utilizan React.js por su facilidad de uso y las experiencias de usuario que ofrece, siendo relativamente rápido de aprender para quienes ya dominan JavaScript.',
    },
    {
        id: 3,
        question: '¿Por qué conviene utilizar React.js?',
        answer: 'Esta biblioteca es una referente en mejores prácticas, facilita el trabajo con componentes de UI y minimiza la carga del navegador mediante su DOM virtual. Además, promueve la reutilización de código, acelerando el proceso de desarrollo.',
    },
    {
        id: 4,
        question: '¿Qué empresas utilizan React.js?',
        answer: 'Grandes empresas como Asana y Dropbox, así como también muchas startups, lo eligen por su capacidad para brindar acciones rápidas del usuario en navegadores y su flexibilidad para adaptarse a cambios de prioridades a la hora de desarrollar. Su estabilidad es otro punto fuerte, ya que las actualizaciones no afectan al código existente.',
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

export default Reactjs;
