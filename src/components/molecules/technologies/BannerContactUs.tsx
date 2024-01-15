import styles from './styles/banner-contact-us.module.css';

export function BannerContactUs() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <p className={styles._text}>
                    Transformar ideas disruptivas en soluciones de primer nivel
                </p>
                <h2 className={styles._title}>
                    Contrata a nuestros desarrolladores de React Native para crear tu aplicación
                </h2>
                <a className={styles._btn} href={'/contact'}>
                    Estimar un proyecto
                </a>
            </div>
        </section>
    );
}
