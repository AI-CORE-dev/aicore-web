import { Recognition, ScheduleCall, WhyOptForMVP } from '@/components/molecules';
import { Header } from '@/components/organisms/Header';

function MobileAplicationDevelopment() {
    return (
        <>
            <Header
                isButtonSecondary
                isHome
                isVideo
                subtitle={CDATAHEADER.subtitle}
                textButton={CDATAHEADER.textButton}
                textButtonSecondary={CDATAHEADER.textButtonSecondary}
                title={CDATAHEADER.title}
            />

            <main>
                <WhyOptForMVP
                    isOtherPage
                    subtitle={
                        'Trabajamos con metodologías agiles, lo que nos permite construir aplicaciones de todo tipo, desde plataformas de redes sociales hasta un marketplace. AI CORE ofrece un desarrollo a medida de aplicaciones webs con un equipo de expertos en distintas disciplinas para asegurar un producto que garantice al usuario una experiencia única.'
                    }
                    title={'¿Qué te ofrecemos?'}
                />
                <Recognition />

                <ScheduleCall />
            </main>
        </>
    );
}

const CDATAHEADER = {
    title: 'Desarrollo de Aplicaciones Mobile',
    subtitle:
        'Contamos con expertos con más de 15 años de experiencia en el desarrollo de aplicaciones web. Con un enfoque boutique traducimos tu vision a una aplicación web personalizada y sin perder ningun detalle que agregue valor.',
    textButton: 'Desarrolla tu web',
    textButtonSecondary:
        'Agenda una reunión de 30 minutos con nuestros desarrolladores de negocios.',
};

export default MobileAplicationDevelopment;
