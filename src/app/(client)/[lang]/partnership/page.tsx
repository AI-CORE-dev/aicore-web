import { SchedulleCall } from '@/components/molecules';
import { BannerSuscribe } from '@/components/molecules/partnership/BannerSuscribe';
import { LetsProgressTogether } from '@/components/molecules/partnership/LetsProgressTogether';
import { PartnerComment } from '@/components/molecules/partnership/PartnerComment';
import { PartnerReview } from '@/components/molecules/partnership/PartnerReview';
import { Header } from '@/components/organisms/Header';

function PartnershipPage() {
    return (
        <>
            <Header isButtonSecondary isVideo title={CDATAHEADER.title} />
            <main>
                <LetsProgressTogether />
                <PartnerReview />
                <PartnerComment />
                <PartnerReview isTitle={false} />
                <BannerSuscribe />
                <SchedulleCall />
            </main>
        </>
    );
}

const CDATAHEADER = {
    title: 'Partnership',
    subtitle: '',
    textButton: 'Contactanos',
    textButtonSecondary:
        'Agenda una reunión de 30 minutos con nuestros desarrolladores de negocios.',
};

export default PartnershipPage;
