import { Header } from '@/components/organisms/Header';

function Information() {
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
    title: 'Information',
    subtitle: '',
    textButton: 'Contactanos',
    textButtonSecondary:
        'Agenda una reunión de 30 minutos sin cargo con nuestros desarrolladores de negocios.',
};

export default Information;
