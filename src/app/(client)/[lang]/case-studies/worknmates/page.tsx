import { ScheduleCall } from '@/components/molecules';
import { Header } from '@/components/organisms/Header';

function Worknmates() {
    return (
        <>
            <Header isVideo isButtonPrimary={false} title={CDATAHEADER.title} />
            <main>
                <ScheduleCall />
            </main>
        </>
    );
}

const CDATAHEADER = {
    title: 'Worknmates',
    subtitle: '',
    textButton: 'Contactanos',
    textButtonSecondary:
        'Agenda una reunión de 30 minutos sin con nuestros desarrolladores de negocios.',
};

export default Worknmates;
