import styles from './styles/our-values.module.css';

export function OurValues() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                {/* <PhotoContainer alt={'our-values'} src={'/about_us/values/our_values.svg'} /> */}
                <p className={styles._text}>Nuestros Valores</p>
                <div className={styles._container_images}>
                    {CIMAGES.map((image) => (
                        <img
                            key={image.id}
                            alt={'values'}
                            className={styles._image}
                            src={image.src}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

const CIMAGES = [
    {
        id: 0,
        src: '/about_us/values/1.svg',
    },
    {
        id: 1,
        src: '/about_us/values/2.svg',
    },
    {
        id: 2,
        src: '/about_us/values/3.svg',
    },
    {
        id: 3,
        src: '/about_us/values/4.svg',
    },
];
