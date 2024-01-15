import { CarouselReviewClient, FaQ, Recognition, ScheduleCall } from '@/components/molecules';
import { BlogSection } from '@/components/molecules/BlogSection';
import { BannerContactUs } from '@/components/molecules/technologies/BannerContactUs';
import { WhyOptFor } from '@/components/molecules/technologies/WhyOptFor';
import { Header } from '@/components/organisms/Header';

function ReactNative() {
    return (
        <>
            <Header isButtonSecondary isVideo title={CDATAHEADER.title} />
            <main>
                <WhyOptFor
                    subtitle={
                        'React Native es una de las tecnologías más populares para el desarrollo de aplicaciones móviles. Es una librería de código abierto creada por Facebook que permite crear aplicaciones nativas para Android y iOS.'
                    }
                    title={'¿Por qué React Native?'}
                />
                <CarouselReviewClient type />
                <Recognition />
                <BannerContactUs />
                <FaQ />
                <BlogSection />
                <ScheduleCall />
            </main>
        </>
    );
}

const CDATAHEADER = {
    title: 'React Native Development Service',
    subtitle: '',
    textButton: 'Contactanos',
    textButtonSecondary:
        'Agenda una reunión de 30 minutos sin cargo con nuestros desarrolladores de negocios.',
};

export default ReactNative;
