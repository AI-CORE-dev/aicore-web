import { ServicesNumbers } from '@/components/molecules';
import { Header } from '@/components/organisms/Header';

function StaffAugmentation() {
    return (
        <>
            <Header
                isButtonSecondary
                isHome
                isVideo
                subtitle={dataHeader.subtitle}
                textButton={dataHeader.textButton}
                textButtonSecondary={dataHeader.textButtonSecondary}
                title={dataHeader.title}
            />

            <main>
                <ServicesNumbers />
            </main>
        </>
    );
}

const dataHeader = {
    title: 'Solucionamos los gaps con los skills tecnológicos que tu proyecto necesita',
    subtitle:
        'Suma de formá rápida y sencilla perfiles para fortalecer tus proyectos, en AI CORE contamos con los especialistas y el tiempo de respuesta para sumarlos a tu equipo de inmediato.',
    textButton: 'Contactanos',
    textButtonSecondary:
        'Contactate con nosotros - coordina una reunión con nuestro desarrollador de negocios',
};

export default StaffAugmentation;
