import { Header } from '@/components/organisms/Header';

function Health() {
    return (
        <>
            <Header isButtonSecondary isVideo title={CDATAHEADER.title} />
            <main>
                <div />
            </main>
        </>
    );
}

const CDATAHEADER = {
    title: 'Health',
    subtitle: '',
    textButton: 'Contactanos',
    textButtonSecondary:
        'Agenda una reunión de 30 minutos sin cargo con nuestros desarrolladores de negocios.',
};

export default Health;
