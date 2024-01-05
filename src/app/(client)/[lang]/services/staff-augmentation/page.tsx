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
                <TypeOfWork />
                <StartTechnicalAudit />
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

export default StaffAugmentation;
