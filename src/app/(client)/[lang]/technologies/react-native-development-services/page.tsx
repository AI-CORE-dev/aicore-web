import { ScheduleCall } from '@/components/molecules';
import { Header } from '@/components/organisms/Header';

function ReactNative() {
    return (
        <>
            <Header isButtonSecondary isVideo />
            <main>
                <ScheduleCall />
            </main>
        </>
    );
}

export default ReactNative;
