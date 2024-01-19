import { Header } from '@/components/organisms/Header';
import {
    CarouselReviewClient,
    Recognition,
    ScheduleCall,
    WhyOptForMVP,
    WorkProcess,
} from '@/components/molecules';

function Consultancy() {
    return (
        <>
            <Header isButtonSecondary isHome isVideo title={'Consultancy'} />
            <main>
                <WhyOptForMVP isOtherPage={false} subtitle={'lorem'} title={'Consultancy'} />
                <CarouselReviewClient type />
                <CarouselReviewClient />
                <Recognition />
                <ScheduleCall />
            </main>
        </>
    );
}

export default Consultancy;
