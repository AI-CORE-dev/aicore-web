import {
    BannerContact,
    BannerOtherTechnologies,
    DedicatedDevelopmentTeam,
    ExtendYourTeam,
    OurSolutionsForTalenGap,
    Recognition,
    SchedulleCall,
    ServicesNumbers,
    StartTechnicalAudit,
    TypeOfWork,
} from '@/components/molecules';
import { Header } from '@/components/organisms/Header';

function StaffAugmentation() {
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
                <ServicesNumbers CNUMBERS={CNUMBERS} />

                <OurSolutionsForTalenGap />
                <BannerOtherTechnologies />
                <DedicatedDevelopmentTeam />
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
                <Recognition />
                <BannerContact />
                <SchedulleCall />
            </main>
        </>
    );
}

const CDATAHEADER = {
    title: 'Solucionamos los gaps con los skills tecnológicos que tu proyecto necesita',
    subtitle:
        'Suma de forma rápida y sencilla perfiles para fortalecer tus proyectos, en AI CORE contamos con los especialistas y el tiempo de respuesta para sumarlos a tu equipo de inmediato.',
    textButton: 'Contactanos',
    textButtonSecondary:
        'Contactate con nosotros - coordina una reunión con nuestro desarrollador de negocios',
};

const CTYPEOFWORK = {
    title: 'Estos son los proyectos que desarrollamos',
    description:
        'No importa la clase de producto que estés construyendo. En AI CORE podemos desarrollar para cualquier industria, nuestros expertise reside en el desarrollo de productos a través de metodologías ágiles logrando así flexibilidad y calidad para cumplir cualquier requisito.',
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
        'Revisamos tu app desde su perspectiva técnica y te proveemos de un reporte de nuestros desarrolladores senior listo para que puedas accionar y priorizar. De esta forma podes evaluar nuestras skills y decidir sobre ello si queres trabajar con nosotros.',
    btnText: 'Descargar nuestro reporte para auditoría.',
    btnLink: 'Contactanos',
    img: '/service-staff.jpg',
    alt: '',
};

const CEXTENDYOURTEAM = {
    title: '¿Por qué expandir tu equipo con talentos AI CORE?',
    description:
        'Potencia tus desarrollos con nuestra experiencia para ganar la escalabilidad, rentabilidad, rapidez, y resultados que estás buscando. Nuestros desarrolladores aportan soluciones de para todo tipo de proyectos que involucren desarrollo de aplicaciones web y móviles.',
    options: [
        {
            id: 0,
            title: 'Tardá menos',
            subtitle:
                'Amplía tu equipo con nuestros desarrolladores y ahorra un tiempo y recursos en tus proyectos. La contratación de especialistas en TI suele tardar una media de 2 meses. Esto puede causar un retraso importante en tus proyectos con plazos ajustados. En AI CORE, proporcionamos el talento que buscás en tan sólo 15 días.',
        },
        {
            id: 1,
            title: 'Es más flexible',
            subtitle:
                'Ya sea que necesites soporte a corto o largo plazo, contratá a nuestros desarrolladores por el período que tus proyectos requieran y reducí al mismo tiempo el costo asociado a la contratación a tiempo completo. Escala tu equipo de manera inmediata cuando sea necesario y garantiza la adaptabilidad del proyecto ante cualquier imprevisto.',
        },
        {
            id: 2,
            title: 'Sumá expertos',
            subtitle:
                'Siempre queremos elegir el mejor talento para sumar a nuestros equipos. En AI CORE comenzamos con una reunión exploratoria para aclarar los detalles del proyecto y comprender sus requisitos y características únicas. Luego te presentamos los mejores candidatos calificados para que puedas examinarlos y entrevistarlos personalmente. Seleccioná la combinación de talentos para tu proyecto que nosotros rápidamente ensamblamos un equipo eficiente y funcional para ponerlo a disposición para tu proyecto.',
        },
        {
            id: 3,
            title: 'Reducción de costos',
            subtitle:
                'Asociarse con AI CORE como aliado de Staffing te va a brindar la ventaja de reducir costos. Al contratar a nuestros desarrolladores, eliminamos los gastos de contratación, capacitación de personal, espacio de oficina, facturas de energía, licencias de software, beneficios para empleados, incrementos de nómina y costos logísticos. Sólo pagás por el trabajo real que nuestro talento aporta a tu proyecto.',
        },
        {
            id: 4,
            title: 'Cumplí con tus deadlines',
            subtitle:
                'Con nuestro equipo de desarrolladores vas a lograr cumplir fácilmente con los plazos de tu proyecto. Podés contratar y supervisar a nuestro staff rápidamente para acelerar el proceso de desarrollo. Nuestros desarrolladores ya están listos para comenzar a sumar valor tan pronto como se unan a su equipo.',
        },
        {
            id: 5,
            title: 'Potencia a tu equipo',
            subtitle:
                'Nuestros especialistas se integran con tu equipo actual sin problema y se enfocan en generar resultados, colaboración y sinergia durante todo el proceso de desarrollo. Tu comunicación con ellos es directa y gestionas la carga de trabajo y horas de cada desarrollador. Nosotros nos encargamos de todo el papeleo, el diseño del equipo y las operaciones de nómina, permitiéndote enfocar todo tu tiempo en una gestión eficiente.',
        },
    ],
};

const CNUMBERS = [
    {
        id: 1,
        title: '+30',
        subtitle: 'Desarrolladores',
    },
    {
        id: 2,
        title: '+1000',
        subtitle: 'Candidatos en nuestras bases',
    },
    {
        id: 3,
        title: '15 días',
        subtitle: 'Para sumar talentos en tu equipo',
    },
    {
        id: 4,
        title: '98%',
        subtitle: 'Satisfacción de nuestros clientes',
    },
];

export default StaffAugmentation;
