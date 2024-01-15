import { ScheduleCall } from '@/components/molecules';
import { Header } from '@/components/organisms/Header';

function Nextjs() {
    return (
        <>
            <Header isButtonSecondary isVideo title={'NextJS PAGE'} />
            <main>
                <ScheduleCall />
            </main>
        </>
    );
}

export default Nextjs;
