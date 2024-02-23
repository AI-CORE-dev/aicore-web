export const CPAGES = [
    { id: 0, isCollapse: false, items: [], text: 'Nosotros', href: '/about-us' },
    {
        id: 1,
        isCollapse: true,
        items: [
            { id: 0, text: 'Seguros', href: '/industries/insurance' },
            { id: 1, text: 'Booking de Servicios', href: '/industries/booking-of-services' },
            { id: 2, text: 'Informacion', href: '/industries/information' },
            { id: 3, text: 'Procesamiento de Pagos', href: '/industries/payment-processing' },
            { id: 4, text: 'Salud', href: '/industries/health' },
            { id: 5, text: 'Finanzas', href: '/industries/finances' },
        ],
        text: 'Industrias',
        href: '/industries',
    },
    {
        id: 3,
        isCollapse: true,
        items: [
            { id: 0, text: 'Staff Augmentation', href: '/services/staff-augmentation' },
            { id: 1, text: 'Consultoría', href: '/services/consultancy' },
            {
                id: 2,
                text: 'Dessarrollo de Producto',
                href: '/services/product-development/',
            },
        ],
        text: 'Servicios',
        href: '/services',
    },
    {
        id: 2,
        isCollapse: true,
        items: [
            { id: 1, text: 'NodeJS', href: '/technologies/nodejs-development-services' },
            {
                id: 0,
                text: 'React Native',
                href: '/technologies/react-native-development-services',
            },
            { id: 3, text: 'ReactJS', href: '/technologies/reactjs-development-services' },
        ],
        text: 'Tecnologías',
        href: '/technologies',
    },
    { id: 3, isCollapse: false, items: [], text: 'Proyectos', href: '/case-studies' },
    { id: 4, isCollapse: false, items: [], text: 'Carrera', href: '/careers' },
    { id: 5, isCollapse: false, items: [], text: 'Blog', href: '/blog' },
];

export const CCAROUSELITEM = [
    {
        id: 0,
        title: 'Seguros',
        content: {
            title: 'Eficientizando el control de las pólizas de seguro',
            subtitle:
                'Eficientizamos el control de las pólizas de seguro para nuestro cliente Aon, para lograr esto desarrollamos una aplicación e inteligencia artificial integrada que se encarga de interpretar la información de las pólizas automáticamente generando métricas y reportes de los análisis al instante.',
            button: 'Conocé más en profundidad lo que hicimos para la industria de seguros.',
            href: '/industries/insurance',
            techs: [
                {
                    id: 0,
                    alt: 'react-logo',
                    src: '/technologies/2.svg',
                },
                {
                    id: 1,
                    alt: 'node-logo',
                    src: '/technologies/3.svg',
                },
                {
                    id: 2,
                    alt: 'react-native-logo',
                    src: '/technologies/4.svg',
                },
                {
                    id: 3,
                    alt: 'amazon-logo',
                    src: '/technologies/4.svg',
                },
            ],
        },
        cases: {
            color_background: '#252422',
            title: 'Eficientizando el control de las polizas de seguros con IA para Aon.',
            subtitle:
                '"Cuando encaramos este proyecto para Aon sabíamos que era crucial aportar una camino para interpretar diferentes formatos en los cuales se presentaban los contratos digitales con el objetivo de recopilar información crucial para la toma de desciciones."',
            cofounder: 'AON',
            src: '/bg_img.png',
            background: '',
        },
    },
    {
        id: 1,
        title: 'Booking de Servicios',
        content: {
            title: 'Eficientizando la contratación de espacios de trabajo',
            subtitle:
                'Worknmates comenzo como un marketplace de coworkings orientado B2C, ante su necesidad pivotear y reconvertirce para orientarse ahora al B2B y asumiendo el rol de socio tecnológico reinventamos su solución, plataforma y funcionalidades rapidamente para permitirles transcicionar de la mejor manera. Gracias a esto Wokrnmates logró probar su idea en el mercado, escalarla y lograr expandirse y crecer en el mercado Latinomaericano consiguiendo asi la financiación para continuar.',
            button: 'Conocé más de lo que hicimos para la industría de Booking de servicios.',
            href: '/industries/booking-of-services',
            techs: [
                {
                    id: 0,
                    alt: 'react-logo',
                    src: '/technologies/1.svg',
                },
                {
                    id: 1,
                    alt: 'node-logo',
                    src: '/technologies/1.svg',
                },
                {
                    id: 2,
                    alt: 'react-native-logo',
                    src: '/technologies/1.svg',
                },
                {
                    id: 3,
                    alt: 'amazon-logo',
                    src: '/technologies/4.svg',
                },
            ],
        },
        cases: {
            color_background: '#212529',
            title: 'Potenciando la revolución del trabajo híbrido junto a Worknmates.',
            subtitle:
                '"Acompañamos a Worknmates mediante nuestra solución de MVPaaS y CTOaaS en la concepción y desarrollando su marketplace de coworkings + home office market place que permite reservar espacios de trabajo a las empresas que desean implementar un modelo hibrido."',
            cofounder: 'Gonzalo Agüero',
            src: '/bg_img.png',
            background: '',
        },
    },
    {
        id: 2,
        title: 'Información',
        content: {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            subtitle:
                'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
            button: 'Conocé lo que hicimos para la industria de Informacion.',
            href: '/industries/information',
            techs: [
                {
                    id: 0,
                    alt: 'react-logo',
                    src: '/technologies/3.svg',
                },
                {
                    id: 1,
                    alt: 'node-logo',
                    src: '/technologies/3.svg',
                },
                {
                    id: 2,
                    alt: 'react-native-logo',
                    src: '/technologies/3.svg',
                },
                {
                    id: 3,
                    alt: 'amazon-logo',
                    src: '/technologies/4.svg',
                },
            ],
        },
        cases: {
            color_background: '#343A40',
            title: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            subtitle:
                '"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."',
            cofounder: 'lorem ipsum',
            src: '',
            background: '',
        },
    },
    {
        id: 3,
        title: 'Procesamiento de pagos',
        content: {
            title: 'lorem impsum dolor sit amet, consectetur adipiscing elit.',
            subtitle:
                'loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
            button: 'Conocé más en profundidad lo que hicimos para la industria de Procesamiento de Pagos.',
            href: '/industries/payment-processing',
            techs: [
                {
                    id: 0,
                    alt: 'react-logo',
                    src: '/technologies/1.svg',
                },
                {
                    id: 1,
                    alt: 'node-logo',
                    src: '/technologies/2.svg',
                },
                {
                    id: 2,
                    alt: 'react-native-logo',
                    src: '/technologies/3.svg',
                },
                {
                    id: 3,
                    alt: 'amazon-logo',
                    src: '/technologies/4.svg',
                },
            ],
        },
        cases: {
            color_background: '#495057',
            title: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            subtitle:
                '"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."',
            cofounder: 'lorem ipsum',
            src: '',
            background: '',
        },
    },
    {
        id: 4,
        title: 'Salud',
        content: {
            title: 'lorem impsum dolor sit amet, consectetur adipiscing elit.',
            subtitle:
                'loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
            button: 'Conocé más en profundidad lo que hicimos para la industria de Salud',
            href: '/industries/health',
            techs: [
                {
                    id: 0,
                    alt: 'react-logo',
                    src: '/technologies/1.svg',
                },
                {
                    id: 1,
                    alt: 'node-logo',
                    src: '/technologies/2.svg',
                },
                {
                    id: 2,
                    alt: 'react-native-logo',
                    src: '/technologies/3.svg',
                },
                {
                    id: 3,
                    alt: 'amazon-logo',
                    src: '/technologies/4.svg',
                },
            ],
        },
        cases: {
            color_background: '#6C757D',
            title: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            subtitle:
                '"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."',
            cofounder: 'lorem ipsum',
            src: '',
            background: '',
        },
    },
    {
        id: 5,
        title: 'Finanzas',
        content: {
            title: 'lorem impsum dolor sit amet, consectetur adipiscing elit.',
            subtitle:
                'loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
            button: 'Conocé más en profundidad lo que hicimos para la industria de Finanzas.',
            href: '/industries/finances',
            techs: [
                {
                    id: 0,
                    alt: 'react-logo',
                    src: '/technologies/1.svg',
                },
                {
                    id: 1,
                    alt: 'node-logo',
                    src: '/technologies/2.svg',
                },
                {
                    id: 2,
                    alt: 'react-native-logo',
                    src: '/technologies/3.svg',
                },
                {
                    id: 3,
                    alt: 'amazon-logo',
                    src: '/technologies/4.svg',
                },
            ],
        },
        cases: {
            color_background: '#ADB5BD',
            title: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            subtitle:
                '"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."',
            cofounder: 'lorem ipsum',
            src: '',
            background: '',
        },
    },
];

export const CAWARDS = [
    {
        id: 0,
        image: '/1.svg',
        alt: 'award1',
    },
    {
        id: 1,
        image: '/2.svg',
        alt: 'award2',
    },
    {
        id: 2,
        image: '/3.svg',
        alt: 'award3',
    },
    {
        id: 3,
        image: '/4.svg',
        alt: 'award4',
    },
    {
        id: 4,
        image: '/5.svg',
        alt: 'award5',
    },
];

export const CDEFINITIONS = [
    {
        id: 0,
        title: '+30',
        subtitle: 'Desarrolladores',
    },
    {
        id: 1,
        title: '+40',
        subtitle: 'Proyectos realizados',
    },
    {
        id: 2,
        title: '15',
        subtitle: 'Años de experiencia IT',
    },
    {
        id: 3,
        title: '60%',
        subtitle: 'De staff senior',
    },
];

export const CINFOFOUNDERS = [
    {
        id: 0,
        name: 'Alfredo Agustin Rey ',
        position: 'Co-Founder',
        employment: 'CEO',
        image: '/about_us/alfred.jpg',
        linkedin: 'https://www.linkedin.com/in/alfredo-agust%C3%ADn-rey-9820ab36/',
        ask: '¿Cuál es el propósito de AI CORE como desarrolladora?',
        answer: 'En nuestro ADN está como motor de ser el mejor socio tecnológico para los proyectos de nuestros clientes, lo que implica involucramiento, compromiso y responsabilidad, no solo con la calidad sino también con los deadlines y la velocidad de respuesta. Nunca negociamos sacrificar la calidad por eso entre la enorme demanda de productos tecnológicos nuestro norte para crecer fue apostar en el talento y el compromiso.',
    },
    {
        id: 1,
        name: 'Ivan Addolorato',
        position: 'Co-Founder',
        employment: 'CTO',
        image: '/about_us/coco.jpg',
        linkedin: 'https://www.linkedin.com/in/ivan-addolorato-070ab8224/',
        ask: '¿Que te hace sentir orgulloso de  AI CORE? ',
        answer: 'No olvidarnos de disfrutar! Es un camino lleno de desafíos, en el corto y en largo plazo pero nunca nos olvidamos de que esto es lo que disfrutamos, el dia a dia con el equipo y el empuje por dar el mejor delivery y la satisfacción para los proyectos de nuestros clientes.',
    },
    {
        id: 2,
        name: 'Ezquiel Maranga',
        position: 'Co-Founder',
        employment: 'COO',
        image: '/about_us/ezequiel.jpg',
        linkedin: 'https://www.linkedin.com/in/ezequiel-maranga-20b61921/',
        ask: '¿Cuál es la filosofía de trabajo de AI CORE?',
        answer: 'AI CORE esta formado por distintos perfiles, con diferentes visiones y backgrounds, pensamos nuestros equipos de esta forma para lograr enriquecer cada proyecto y generar sinergías entre nuestros colaboradores.',
    },
];

export const CDATAARTICLE = [
    {
        id: 0,
        title: 'El futuro de la fuerza laboral: combinación de equipos internos y equipos aumentados: modelo híbrido',
        date: '2024-01-08',
        category: ['Augmentation', 'Web Development'],
        img: 'https://aicore.com.ar/wp-content/uploads/2021/05/Logo-Favicon-Aicore.png',
        name: 'Eduardo Brizuela',
        profession: 'Ingeniero & Abogado',
        link: '/blog/template',
    },
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor, nisl eget',
        date: '2024-03-04',
        category: ['Consulting', 'App Development'],
        img: 'https://aicore.com.ar/wp-content/uploads/2021/05/Logo-Favicon-Aicore.png',
        name: 'Ezequiel Maranga',
        profession: 'COO',
        link: '/blog/template',
    },
];

export const CVALUES = [
    {
        id: 0,
        value: 0,
        active: false,
    },
    {
        id: 1,
        value: 1,
        active: false,
    },
    {
        id: 2,
        value: 2,
        active: false,
    },
    {
        id: 3,
        value: 3,
        active: false,
    },
    {
        id: 4,
        value: 4,
        active: false,
    },
];

export const CCLIENTREVIEWS = [
    {
        id: 0,
        avatar: '/1.svg',
        title: 'Empresa 1',
        description:
            ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatemullam harum fuga at quos atque temporibus perferendis distinctioinventore. Laborum debitis, nobis quis placeat repudiandae harum minusrerum? Fuga, culpa. Lorem ipsum, dolor sit amet consectetur adipisicingelit. Rem laboriosam id non magnam odit obcaecati ducimus temporibusquaerat alias harum! Quibusdam similique sapiente a aperiam, aliquamautem vel culpa ducimus?',
        employee: 'Jeff Bezos',
        position: 'Ceo & founder',
        href: '/',
    },
    {
        id: 1,
        avatar: '/2.svg',
        title: 'Empresa 2',
        description:
            ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatemullam harum fuga at quos atque temporibus perferendis distinctioinventore. Laborum debitis, nobis quis placeat repudiandae harum minusrerum? Fuga, culpa. Lorem ipsum, dolor sit amet consectetur adipisicingelit. Rem laboriosam id non magnam odit obcaecati ducimus temporibusquaerat alias harum! Quibusdam similique sapiente a aperiam, aliquamautem vel culpa ducimus?',
        employee: 'Jeff Bezos 2',
        position: 'Product Manager',
        href: '/',
    },
    {
        id: 2,
        avatar: '/3.svg',
        title: 'Empresa 3',
        description:
            ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatemullam harum fuga at quos atque temporibus perferendis distinctioinventore. Laborum debitis, nobis quis placeat repudiandae harum minusrerum? Fuga, culpa. Lorem ipsum, dolor sit amet consectetur adipisicingelit. Rem laboriosam id non magnam odit obcaecati ducimus temporibusquaerat alias harum! Quibusdam similique sapiente a aperiam, aliquamautem vel culpa ducimus?',
        employee: 'Jeff Bezos 3',
        position: 'Ceo & founder',
        href: '/',
    },
];

export const CCLIENTREVIEWS2 = [
    {
        id: 0,
        cases: {
            color_background: '#121113',
            title: 'Eficientizando el control de las polizas de seguros con IA para Aon.',
            subtitle:
                '"Cuando encaramos este proyecto para Aon sabíamos que era crucial aportar una camino para interpretar diferentes formatos en los cuales se presentaban los contratos digitales con el objetivo de recopilar información crucial para la toma de desciciones."',
            cofounder: 'AON',
            src: '/bg_img.png',
            background: '',
        },
    },
    {
        id: 1,
        cases: {
            color_background: '#343A40',
            title: 'Potenciando la revolución del trabajo híbrido junto a Worknmates.',
            subtitle:
                '"Acompañamos a Worknmates mediante nuestra solución de MVPaaS y CTOaaS en la concepción y desarrollando su marketplace de coworkings + home office market place que permite reservar espacios de trabajo a las empresas que desean implementar un modelo hibrido."',
            cofounder: 'Gonzalo Agüero',
            src: '/bg_img.png',
            background: '',
        },
    },
    {
        id: 2,
        cases: {
            color_background: '#252422',
            title: 'lorem ipsum dolor sit amet, consectetur adipiscing elit',
            subtitle:
                'Acompañamos a Worknmates mediante nuestra solución de MVPaaS y CTOaaS en la concepción y desarrollando su marketplace de coworkings + home office market place que permite reservar espacios de trabajo a las empresas que desean implementar un modelo hibrido."',
            cofounder: 'lorem ipsum',
            src: '',
            background: '',
        },
    },
];

export const CCLIENTS = [
    {
        id: 0,
        name: 'Gonzalo Agüero',
        job: 'CEO - Founder',
        company: 'Worknmates',
        review: '"Siempre valoramos mucho es su involucramiento como usuarios de nuestra solución. Eso es fundamental porque obtenemos feedback de ellos, su visión sobre el negocio, su apoyo en cada momento del camino de llevar adelante una start up."',
        score: 5,
        avatar: '/cli_worknmates.svg',
    },
    {
        id: 1,
        name: 'Damian Schuchner',
        job: 'CEO - Founder',
        company: 'Bukest',
        review: '"Trabajamos codo a codo con AI CORE para poder reconvertirnos. Ellos fueron cruciales para nunca bajar los brazos y siempre que necesitábamos pivotear tener su apoyo tecnológico y humano."',
        score: 5,
        avatar: '/cli_bukest.svg',
    },

    {
        id: 2,
        name: 'Lorem Ipsum',
        job: 'CEO - Founder',
        company: 'Lorem',
        review: '"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."',
        score: 5,
        avatar: 'https://aicore.com.ar/wp-content/uploads/2021/05/Logo-Favicon-Aicore.png',
    },
];

export const CDEDICATEDTEAM = [
    {
        id: 0,
        title: 'Business analysts',
        src: 'https://brocoders.com/static/1296ca18e598c35c99c3486cdaee6ecf/usiness-analysts.svg',
    },

    {
        id: 1,
        title: 'UI/UX designers',
        src: 'https://brocoders.com/static/d6879dfafd9336d2160921228d1e5cf9/ui-designers.svg',
    },

    {
        id: 2,
        title: 'Web/mobile developers',
        src: 'https://brocoders.com/static/2addcba5d904ab085b2368c0e546a81c/mobile-developers.svg',
    },

    {
        id: 3,
        title: 'QA specialists',
        src: 'https://brocoders.com/static/f7004a1b2398bd29229f8080b63f7b21/qa-specialists.svg',
    },
    {
        id: 4,
        title: 'DevOps engineers',
        src: 'https://brocoders.com/static/e8992ad6babdfda2eb3f9e778b659da8/devops-engineers.svg',
    },
    {
        id: 5,
        title: 'Project managers',
        src: 'https://brocoders.com/static/5494896843dc5904489721b6764d0011/project-managers.svg',
    },
];

export const CARG = [
    {
        id: 0,
        title: 'Ahorrar tiempo',
        subtitle:
            'Hoy en día conseguir perfiles puntuales para proyectos de IT suele ser un proceso tedioso que puede dejar parado tus proyectos de 60 a 90 días aproximadamente. En AI CORE ponemos a disposición ese talento en 15 días.',
    },
    {
        id: 1,
        title: 'Te aportamos flexibilidad',
        subtitle:
            'Escala rapidamente o reducí el tamaño de tu equipo logrando mayor flexibilidad y control ante cambios en el proyecto y sus deadlines.',
    },
    {
        id: 2,
        title: 'Elige lo mejor',
        subtitle:
            'Según sus requisitos, le proporcionamos los candidatos más relevantes para que los revise. Puedes hacer tu propia investigación y entrevistar a cada candidato para asegurarte de que se ajusten a tu proyecto.',
    },
    {
        id: 3,
        title: 'Reducir costos',
        subtitle:
            'Paga solo por las horas de desarrollo y evitá incurrir en presupuestos más robustos que se desprenden de tercerizar el proyecto.',
    },
    {
        id: 4,
        title: 'Cumplir con los plazos',
        subtitle:
            'Comenza de inmediato a trabajar en tu proyecto para cumplirlo en tiempo y forma de la forma más eficiente.',
    },
    {
        id: 5,
        title: 'Consigue tu propio equipo',
        subtitle:
            'Generamos a medida un equipo listo para trabajar en tu proyecto y cubrirlo en su totalidad.',
    },
];

export const CPROJECTS = [
    {
        id: 0,
        videoUrl: 'https://www.youtube.com/embed/7e90gBu4pas',
        title: 'Aon',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio assumenda repellendus cumque blanditiis? Ex blanditiis vitae amet modi, hic odit voluptatem sit eos nisi expedita voluptate sunt quaerat laborum dicta.',
        industry: 'Seguros',
        location: 'Estados Unidos',
        technologies: ['nodejs', 'react', 'amazon'],
        team: '7 specialists (PM, Designer, QA, Frontend, Backend, DevOps)',
        href: '/',
    },
    {
        id: 1,
        videoUrl: 'https://www.youtube.com/embed/7e90gBu4pas',
        title: 'Bukest',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio assumenda repellendus cumque blanditiis? Ex blanditiis vitae amet modi, hic odit voluptatem sit eos nisi expedita voluptate sunt quaerat laborum dicta.',
        industry: 'Booking de servicios',
        location: 'Argentina',
        technologies: ['nodejs', 'react', 'amazon'],
        team: '7 specialists (PM, Designer, QA, Frontend, Backend, DevOps)',
        href: '/',
    },
    {
        id: 2,
        videoUrl: 'https://www.youtube.com/embed/7e90gBu4pas',
        title: 'Worknmates',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio assumenda repellendus cumque blanditiis? Ex blanditiis vitae amet modi, hic odit voluptatem sit eos nisi expedita voluptate sunt quaerat laborum dicta.',
        industry: 'Booking de servicios',
        location: 'Estados Unidos',
        technologies: ['nodejs', 'react', 'amazon'],
        team: '7 specialists (PM, Designer, QA, Frontend, Backend, DevOps)',
        href: '/',
    },
    {
        id: 3,
        videoUrl: 'https://www.youtube.com/embed/7e90gBu4pas',
        title: 'Fiserv',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio assumenda repellendus cumque blanditiis? Ex blanditiis vitae amet modi, hic odit voluptatem sit eos nisi expedita voluptate sunt quaerat laborum dicta.',
        industry: 'Seguros',
        location: 'Estados Unidos',
        technologies: ['nodejs', 'react', 'amazon'],
        team: '7 specialists (PM, Designer, QA, Frontend, Backend, DevOps)',
        href: '/',
    },
];
