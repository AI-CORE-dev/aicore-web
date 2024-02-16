import styles from './styles/our-solutions-for-talent-gap.module.css';

export function OurSolutionsForTalenGap() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <h2 className={styles._title}>Nuestra solución para tus gaps</h2>
                <p className={styles._subtitle}>
                    Expandimos y complementamos tu equipo interno con nuestros desarrolladores o
                    armamos un equipo dinámico y complementario para que consolides tu área de
                    tecnología.
                </p>
            </div>

            <div className={styles._inner}>
                <h2 className={styles._title_gap}>
                    Sumá desarrolladores expertos para que trabajen para tu equipo y materialicen
                    tus proyectos
                </h2>
                <p className={styles._subtitle_gap}>
                    Desde de front y back, node y react contamos con una amplia cobertura de
                    tecnologías y especialistas listos para afrontar desafíos y aportar valor a tus
                    proyectos, contanos lo que tienes en mente y encontramos los perfiles que mejor
                    hagan match.
                </p>
            </div>

            <div>
                <div className={styles._container_img}>
                    {CIMG.map((img) => (
                        <img
                            key={img.id}
                            alt={'bg_img.png'}
                            className={styles._img}
                            src={img.src}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

const CIMG = [
    {
        id: 0,
        src: 'https://brocoders.com/static/3ca2637d12400941290ecd325ebc2739/react-logo.svg',
    },
    {
        id: 1,
        src: 'https://brocoders.com/static/4bfe740566e5cf926b847d3a8a237ffe/nodejs-logo.svg',
    },
    {
        id: 2,
        src: 'https://brocoders.com/static/be1da5e9afe5a740b012b5df5236b446/react-native-logo.svg',
    },
    {
        id: 3,
        src: 'https://brocoders.com/static/a74c763d4b62a92024b4819a25c73ff1/express-js-logo.svg',
    },
    {
        id: 4,
        src: 'https://brocoders.com/static/28304c778f67c237a9cf56ae2b65de20/gatsby-logo.svg',
    },
    {
        id: 5,
        src: 'https://brocoders.com/static/b2928dc5d5de4b27f26b90ce4d0cdbcd/mongo-logo.svg',
    },
    {
        id: 6,
        src: 'https://brocoders.com/static/7af1a895997b861a2ded68d98b36b341/blockchain-logo.svg',
    },
    {
        id: 7,
        src: 'https://brocoders.com/static/9a1f9884d9b59ab49a2897bed322fc57/azure_aws.svg',
    },
];
