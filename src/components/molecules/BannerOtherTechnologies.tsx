import styles from './styles/banner-other-technologies.module.css';

export function BannerOtherTechnologies() {
    return (
        <section className={styles._section}>
            <div className={styles._container}>
                <p className={styles._title}>
                    Buscás expertos en tecnologías que no están listadas aquí?
                </p>
                <p className={styles._subtitle}>
                    No te preocupes, contactanos y con nuestra base de candidatos y reclutamiento
                    encontraremos los perfiles que estás buscando para tu proyecto.
                </p>
                <a className={styles._btn} href={'/contact'}>
                    Contactanos
                </a>
            </div>
        </section>
    );
}
