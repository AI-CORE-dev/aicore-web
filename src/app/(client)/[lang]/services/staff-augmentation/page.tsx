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
                <ExtendYourTeam />
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

export default StaffAugmentation;
