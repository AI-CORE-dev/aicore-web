import { InstagramFeed } from '@/components/molecules/InstagramFeed';
import { Header } from '@/components/organisms/Header';

const dh = {
    title: 'Somos más que un proveedor - somos el aliado tecnológico que tu organización necesita',
    subtitle:
        'Desde el día uno asumimos el proyecto como nuestro y lo desarrollamos mientras damos apoyo y consultoría para que logres obtener de la ventaja.',
    textButton: 'Contactanos',
    textButtonSecondary:
        'Agenda una reunión de 30 minutos sin cargo con nuestros desarrolladores de negocios.',
};

function AboutPage() {
    return (
        <>
            <Header
                isButtonSecondary
                subtitle={dh.subtitle}
                textButton={dh.textButton}
                textButtonSecondary={dh.textButtonSecondary}
                title={dh.title}
            />

            {/* Seccion del feed de instagram*/}
            <InstagramFeed />
        </>
    );
}

export default AboutPage;
