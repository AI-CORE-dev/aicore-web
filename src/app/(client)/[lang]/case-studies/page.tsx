import { HomeCasesStudies, ScheduleCall } from '@/components/molecules';
import { Header } from '@/components/organisms/Header';

function CaseStudies() {
    return (
        <>
            <Header isVideo isButtonPrimary={false} />
            <main>
                <HomeCasesStudies />

                <ScheduleCall />
            </main>
        </>
    );
}

export default CaseStudies;
