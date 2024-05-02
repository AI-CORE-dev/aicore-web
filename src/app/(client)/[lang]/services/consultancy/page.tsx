import { Header } from '@/components/organisms/Header';
import {
    CarouselReviewClient,
    Recognition,
    SchedulleCall,
    WhyOptForMVP,
} from '@/components/molecules';

function Consultancy() {
    return (
        <>
            <Header
                isHome
                isVideo
                subtitle={
                    'Tenemos la experiencia que buscás para brindar consultoría sobre empresas empresas que buscán comenzar su camino de transformación tecnológica.'
                }
                textButton={'Contáctanos'}
                title={'Consultoría IT'}
            />
            <main>
                <WhyOptForMVP
                    isOtherPage={false}
                    subtitle={''}
                    title={'¿Buscás comenzar con tu transformación tecnológica?'}
                />
                <Recognition />
                <SchedulleCall />
            </main>
        </>
    );
}

export default Consultancy;
