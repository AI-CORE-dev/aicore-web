import {
    BannerContact,
    BannerOtherTechnologies,
    CarouselReviewClient,
    DedicatedDevelopmentTeam,
    ExtendYourTeam,
    OurSolutionsForTalenGap,
    Recognition,
    ScheduleCall,
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
                <ServicesNumbers />
                <CarouselReviewClient />
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
                <CarouselReviewClient />
                <Recognition />
                <BannerContact />
                <ScheduleCall />
            </main>
        </>
    );
}

const CDATAHEADER = {
    title: 'Solucionamos los gaps con los skills tecnológicos que tu proyecto necesita',
    subtitle:
        'Suma de formá rápida y sencilla perfiles para fortalecer tus proyectos, en AI CORE contamos con los especialistas y el tiempo de respuesta para sumarlos a tu equipo de inmediato.',
    textButton: 'Contactanos',
    textButtonSecondary:
        'Contactate con nosotros - coordina una reunión con nuestro desarrollador de negocios',
};

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
    btnLink: 'Contactanos',
    img: '/working-on-macbook.webp',
    alt: '',
};

const CEXTENDYOURTEAM = {
    title: '¿Por qué expandir tu equipo con nuestros especialistas?',
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

export default StaffAugmentation;
