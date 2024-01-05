import { ScheduleCall, WhyOptForMVP, WorkProcess } from '@/components/molecules';
import { Header } from '@/components/organisms/Header';

function MVPaaS() {
    return (
        <>
            <Header isButtonSecondary isHome isVideo />
            <main>
                <WhyOptForMVP />
                <WorkProcess />
                <ScheduleCall />
            </main>
        </>
    );
}

export default MVPaaS;
