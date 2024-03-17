import styles from './styles/banner-contact-us.module.css';

export function BannerContactUs() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <h2 className={styles._title}>
                    Si estos son tus objetivos, agenda una reunión con nosotros para dar el primer
                    paso en tu procesos de transformación digital.
                </h2>
                <a className={styles._btn} href={'/contact'}>
                    Contactanos
                </a>
            </div>
        </section>
    );
}
