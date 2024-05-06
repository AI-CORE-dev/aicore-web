import { HomeCasesStudies, SchedulleCall } from '@/components/molecules';
import { Header } from '@/components/organisms/Header';

function CaseStudies() {
    return (
        <>
            <Header isVideo isButtonPrimary={false} title={CDATAHEADER.title} />
            <main>
                <HomeCasesStudies />

                <SchedulleCall />
            </main>
        </>
    );
}

const CDATAHEADER = {
    title: 'Proyectos',
    subtitle: '',
    textButton: 'Contactanos',
    textButtonSecondary:
        'Agenda una reunión de 30 minutos con nuestros desarrolladores de negocios.',
};

export default CaseStudies;
