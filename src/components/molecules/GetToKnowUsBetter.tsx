import styles from './styles/get-to-know-us-better.module.css';

function FirstChild() {
    return (
        <ul
            style={{
                display: 'flex',
                flexDirection: 'row-reverse',
                marginTop: '5rem',
            }}
        >
            <li key={0} className={styles._container_child}>
                <article>
                    <p className={styles._title}>Alfredo Agustin Rey</p>
                    <p className={`${styles._title} ${styles._position}`}>Co-Founder - CEO</p>

                    <a
                        className={styles._linkedin}
                        href={'https://www.linkedin.com/in/alfredo-agust%C3%ADn-rey-9820ab36/'}
                    >
                        Linkedin
                    </a>
                    <div className={styles._image_container}>
                        <img
                            alt={'Alfredo Agustin Rey'}
                            className={styles._image}
                            src={'/about_us/alfred.jpg'}
                        />
                    </div>
                    <div>
                        <p className={styles._ask}>¿Cuál es el propósito de AI CORE?</p>
                        <p className={styles._answer}>
                            En nuestro ADN está como motor de ser el mejor socio tecnológico para
                            los proyectos de nuestros clientes, lo que implica involucramiento,
                            compromiso y responsabilidad, no solo con la calidad sino también con
                            los deadlines y la velocidad de respuesta. Nunca negociamos sacrificar
                            la calidad por eso entre la enorme demanda de productos tecnológicos
                            nuestro norte para crecer fue apostar en el talento y el compromiso.
                        </p>
                    </div>
                </article>
            </li>
        </ul>
    );
}

export function GetToKnowUsBetter() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <h2 className={styles._text}>Conocenos Mejor</h2>
                <FirstChild />
                <ul
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                    }}
                >
                    {INFOFOUNDERS.map((item) => (
                        <li key={item.id} className={styles._container_article}>
                            <article className={styles._article}>
                                <div>
                                    <p className={styles._title}>{item.name}</p>
                                    <p className={`${styles._title} ${styles._position}`}>
                                        {item.position} {item.employment}
                                    </p>

                                    <a className={styles._linkedin} href={item.linkedin}>
                                        Linkedin
                                    </a>
                                    <div className={styles._image_container}>
                                        <img
                                            alt={item.name}
                                            className={styles._image}
                                            src={item.image}
                                        />
                                    </div>
                                    <div>
                                        <p className={styles._ask}>{item.ask}</p>
                                        <p className={styles._answer}>{item.answer}</p>
                                    </div>
                                </div>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

const INFOFOUNDERS = [
    // {
    //     id: 0,
    //     name: 'Alfredo Agustin Rey ',
    //     position: 'Co-Founder',
    //     employment: 'CEO',
    //     image: '/about_us/alfred.jpg',
    //     linkedin: 'https://www.linkedin.com/in/alfredo-agust%C3%ADn-rey-9820ab36/',
    //     ask: '¿Cuál es el propósito de AI CORE como desarrolladora?',
    //     answer: 'En nuestro ADN está como motor de ser el mejor socio tecnológico para los proyectos de nuestros clientes, lo que implica involucramiento, compromiso y responsabilidad, no solo con la calidad sino también con los deadlines y la velocidad de respuesta. Nunca negociamos sacrificar la calidad por eso entre la enorme demanda de productos tecnológicos nuestro norte para crecer fue apostar en el talento y el compromiso.',
    // },
    {
        id: 1,
        name: 'Ivan Addolorato',
        position: 'Co-Founder',
        employment: 'CTO',
        image: '/about_us/coco.jpg',
        linkedin: 'https://www.linkedin.com/in/ivan-addolorato-070ab8224/',
        ask: '¿Que te hace sentir orgulloso de  AI CORE? ',
        answer: 'No olvidarnos de disfrutar! Es un camino lleno de desafíos, en el corto y en largo plazo pero nunca nos olvidamos de que esto es lo que disfrutamos, el dia a dia con el equipo y el empuje por dar el mejor delivery y la satisfacción para los proyectos de nuestros clientes.',
    },
    {
        id: 2,
        name: 'Ezquiel Maranga',
        position: 'Co-Founder',
        employment: 'COO',
        image: '/about_us/ezequiel.jpg',
        linkedin: 'https://www.linkedin.com/in/ezequiel-maranga-20b61921/',
        ask: '¿Cuál es la filosofía de trabajo de AI CORE?',
        answer: 'AI CORE esta formado por distintos perfiles, con diferentes visiones y backgrounds, pensamos nuestros equipos de esta forma para lograr enriquecer cada proyecto y generar sinergías entre nuestros colaboradores.',
    },
];
