import { Header } from '@/components/organisms/Header';

function Insurance() {
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
    title: 'Insurance',
    subtitle: '',
    textButton: 'Contactanos',
    textButtonSecondary:
        'Agenda una reunión de 30 minutos sin cargo con nuestros desarrolladores de negocios.',
};

export default Insurance;
