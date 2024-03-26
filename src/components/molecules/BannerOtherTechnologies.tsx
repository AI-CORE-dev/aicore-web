import styles from './styles/banner-other-technologies.module.css';

export function BannerOtherTechnologies() {
    return (
        <section className={styles._section}>
            <div className={styles._container}>
                <p className={styles._title}>
                    ¿Listo para comenzar tu procesos de transformación digital?
                </p>
                <p className={styles._subtitle}>
                    Contactanos hoy mismo para una <strong>consulta gratuita</strong> y descubri
                    cómo nuestras soluciones de IT pueden transformar tu empresa.
                </p>
            </div>
        </section>
    );
}
