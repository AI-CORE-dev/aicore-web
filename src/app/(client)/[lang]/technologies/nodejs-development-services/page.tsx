import {
    CarouselReviewClient,
    ExtendYourTeam,
    FaQ,
    ScheduleCall,
    ServicesNumbers,
    StartTechnicalAudit,
    TypeOfWork,
} from '@/components/molecules';
import { OurNodeExpertise } from '@/components/molecules/technologies';
import { Header } from '@/components/organisms/Header';

function Nodejs() {
    return (
        <>
            <Header isButtonSecondary isVideo />
            <main>
                <ServicesNumbers />
                <CarouselReviewClient />
                <OurNodeExpertise />
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
                <ScheduleCall />
            </main>
        </>
    );
}

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

export default Nodejs;
