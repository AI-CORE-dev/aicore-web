import { SchedulleCall } from '@/components/molecules';
import { Header } from '@/components/organisms/Header';

function Nextjs() {
    return (
        <>
            <Header isButtonSecondary isVideo title={'NextJS PAGE'} />
            <main>
                <SchedulleCall />
            </main>
        </>
    );
}

export default Nextjs;
