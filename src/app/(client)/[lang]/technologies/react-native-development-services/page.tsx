import { SchedulleCall, ServicesNumbers } from '@/components/molecules';
import { BannerContactUs } from '@/components/molecules/technologies/BannerContactUs';
import { WhyOptForNew } from '@/components/molecules/technologies/WhyOptForNew';
import { Header } from '@/components/organisms/Header';

function ReactNative() {
    return (
        <>
            <Header
                isButtonSecondary
                isVideo
                subtitle={CDATAHEADER.subtitle}
                textButton={CDATAHEADER.textButton}
                textButtonSecondary={CDATAHEADER.textButtonSecondary}
                title={CDATAHEADER.title}
            />
            <main>
                <WhyOptForNew
                    data={CWHYOPTFORNEW.data}
                    subtitle={CWHYOPTFORNEW.subtitle}
                    title={CWHYOPTFORNEW.title}
                />
                <ServicesNumbers CNUMBERS={CNUMBERS} />
                <BannerContactUs
                    btnText={CBANNERCONTACTUS.btnText}
                    subtitle={CBANNERCONTACTUS.subtitle}
                    title={CBANNERCONTACTUS.title}
                />
                <SchedulleCall />
            </main>
        </>
    );
}

const CDATAHEADER = {
    title: 'Nuestro talento en React Native en tu empresa.',
    subtitle:
        'Creamos soluciones web y móviles de alta calidad para plataformas iOS y Android al mismo tiempo, reduciendo así drásticamente sus gastos y permitiéndote lanzarte al mercado en rápidamente.',
    textButton: 'Contactanos',
    textButtonSecondary: '',
};

const CWHYOPTFORNEW = {
    title: '¿Qué tiene de especial React Native?',
    subtitle:
        'React Native es una de las tecnologías más populares para el desarrollo de aplicaciones móviles. Es una librería de código abierto creada por Facebook que permite crear aplicaciones nativas para Android y iOS.',
    data: [
        {
            id: 0,
            title: 'Lanzamientos rápidos',
            subtitle:
                'Los elementos de React Native y las funciones multiplataforma te permite crear una aplicación para iOS y Android al mismo tiempo. Por lo tanto, la inversión del presupuesto y el tiempo dedicado a la etapa de desarrollo se reduce a la mitad, lo que resulta en un tiempo de comercialización más rápido.',
        },
        {
            id: 1,
            title: 'Estabilidad por años.',
            subtitle:
                'Como marco de código abierto, React Native está respaldado por una comunidad sólida y activa, que incluye ingenieros y especialistas externos. La tecnología se mejora constantemente lo garantiza que no quede obsoleta y siga siendo referente a la hora de desarrollar con los más altos estándares de calidad.',
        },
        {
            id: 2,
            title: 'Open-ended features',
            subtitle:
                'Hoy en día el entorno de React cuenta con uno de los mejores conjuntos de componentes para el diseño y depuración listos para usar que los desarrolladores pueden utilizar para casi cualquier proyecto o idea. En AI CORE potenciamos tu solución con nuevas funciones para maximizar su retorno de la inversión (ROI) y garantizar un producto digital de primer nivel.',
        },
    ],
};

const CNUMBERS = [
    {
        id: 1,
        title: '+30',
        subtitle: 'Desarrolladores',
    },
    {
        id: 2,
        title: '+10000',
        subtitle: 'Candidatos en nuestras bases',
    },
    {
        id: 3,
        title: '15 días',
        subtitle: 'Para sumar talentos a tu equipo',
    },
    {
        id: 4,
        title: '+50',
        subtitle: 'Proyectos potenciados',
    },
];

const CBANNERCONTACTUS = {
    title: 'Arma tu dream team con AI CORE ',
    subtitle:
        'Potencia tus desarrollos con nuestro talento, contanos qué tenés en mente y nosotros diseñamos el equipo perfecto para materializar tu producto tecnológico de ensueño.',
    btnText: 'Contactar',
};

export default ReactNative;
