import { SchedulleCall } from '@/components/molecules';
import { Header } from '@/components/organisms/Header';

function Sodtrack() {
    return (
        <>
            <Header isVideo isButtonPrimary={false} title={CDATAHEADER.title} />
            <main>
                <SchedulleCall />
            </main>
        </>
    );
}

const CDATAHEADER = {
    title: 'Sodtrack',
    subtitle: '',
    textButton: 'Contactanos',
    textButtonSecondary:
        'Agenda una reunión de 30 minutos con nuestros desarrolladores de negocios.',
};

export default Sodtrack;
