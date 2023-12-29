export const CPAGES = [
    { id: 0, isCollapse: false, items: [], text: 'Sobre Nosotros', href: '/about-us' },
    { id: 1, isCollapse: false, items: [], text: 'Carrera', href: '/careers' },
    { id: 2, isCollapse: false, items: [], text: 'Casos', href: '/case-studies' },
    {
        id: 3,
        isCollapse: true,
        items: [
            { id: 0, text: 'Staff Augmentation', href: '/services/staff-augmentation' },
            { id: 1, text: 'Consultoría', href: '/services/consultancy' },
            { id: 2, text: 'MVPaaS', href: '/services/MVPaaS' },
            { id: 3, text: 'Outsourcing', href: '/services/outsourcing' },
        ],
        text: 'Servicios',
        href: '/services',
    },
    {
        id: 4,
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
        id: 5,
        isCollapse: true,
        items: [
            { id: 2, text: 'NextJS', href: '/technologies/nextjs-development-services' },
            { id: 1, text: 'NodeJS', href: '/technologies/nodejs-development-services' },
            {
                id: 0,
                text: 'React Native',
                href: '/technologies/react-native-development-services',
            },
            { id: 3, text: 'ReactJS', href: '/technologies/reactjs-development-services' },
        ],
        text: 'Tecnologías',
        href: '/tecnologies',
    },
    { id: 6, isCollapse: false, items: [], text: 'Blog', href: '/blog' },
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
            color_background: '#ff5500',
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
            button: 'Conocé más de lo que hicimos para la industría de seguros.',
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
            color_background: '#0099ff',
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
            button: 'lorem lorem lorem lorem',
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
            color_background: '#5000ca',
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
            button: 'lorem lorem lorem lorem',
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
            color_background: '#e7008a',
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
            button: 'lorem lorem lorem lorem',
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
            color_background: '#00cba9',
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
            button: 'lorem lorem lorem lorem',
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
            color_background: '#ffd700',
            title: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            subtitle:
                '"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."',
            cofounder: 'lorem ipsum',
            src: '',
            background: '',
        },
    },
];
