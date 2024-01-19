import { CarouselReviewClient, ScheduleCall } from '@/components/molecules';
import { BlogSection } from '@/components/molecules/BlogSection';
import { BannerContactUs } from '@/components/molecules/technologies/BannerContactUs';
import { WhyOptFor } from '@/components/molecules/technologies/WhyOptFor';
import { Header } from '@/components/organisms/Header';

function Health() {
    return (
        <>
            <Header isButtonSecondary isVideo title={CDATAHEADER.title} />
            <main>
                <WhyOptFor subtitle={'subtitle'} title={'Finances'} />
                <CarouselReviewClient />
                <BannerContactUs />
                <BlogSection />
                <ScheduleCall />
            </main>
        </>
    );
}

const CDATAHEADER = {
    title: 'Health',
    subtitle: '',
    textButton: 'Contactanos',
    textButtonSecondary:
        'Agenda una reunión de 30 minutos sin cargo con nuestros desarrolladores de negocios.',
};

export default Health;
