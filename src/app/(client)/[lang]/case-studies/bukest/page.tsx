import { ScheduleCall } from '@/components/molecules';
import { Header } from '@/components/organisms/Header';

function Bukest() {
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
    title: 'Bukest',
    subtitle: '',
    textButton: 'Contactanos',
    textButtonSecondary:
        'Agenda una reunión de 30 minutos sin cargo con nuestros desarrolladores de negocios.',
};

export default Bukest;
