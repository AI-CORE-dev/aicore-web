import {
    CarouselReviewClient,
    Recognition,
    ScheduleCall,
    WhyOptForMVP,
    WorkProcess,
} from '@/components/molecules';
import { Header } from '@/components/organisms/Header';

function MVPaaS() {
    return (
        <>
            <Header isButtonSecondary isHome isVideo />
            <main>
                <WhyOptForMVP isOtherPage={false} subtitle={'lorem'} title={'WhyOptForMVP'} />
                <CarouselReviewClient type />
                <WorkProcess />
                <CarouselReviewClient />
                <Recognition />
                <ScheduleCall />
            </main>
        </>
    );
}

export default MVPaaS;
