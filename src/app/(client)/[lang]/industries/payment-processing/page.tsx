import { CarouselReviewClient, SchedulleCall } from '@/components/molecules';
import { BlogSection } from '@/components/molecules/BlogSection';
import { WhyOptFor } from '@/components/molecules/technologies/WhyOptFor';
import { Header } from '@/components/organisms/Header';

function PaymentProcessing() {
    return (
        <>
            <Header isButtonSecondary isVideo title={CDATAHEADER.title} />
            <main>
                <WhyOptFor subtitle={'subtitle'} title={'Insurance'} />
                <CarouselReviewClient />
                <BlogSection />
                <SchedulleCall />
            </main>
        </>
    );
}

const CDATAHEADER = {
    title: 'PaymentProcessing',
    subtitle: '',
    textButton: 'Contactanos',
    textButtonSecondary:
        'Agenda una reunión de 30 minutos con nuestros desarrolladores de negocios.',
};

export default PaymentProcessing;
