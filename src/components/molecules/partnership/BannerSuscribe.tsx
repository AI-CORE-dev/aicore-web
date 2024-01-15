import styles from './styles/banner-suscribe.module.css';

export function BannerSuscribe() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <div>
                    <h1 className={styles._text}>Impulsa tu negocio junto a AI CORE</h1>
                    <p className={styles._secondary_text}>
                        Suma talentos a tus proyectos, o bien auditalo con nosotros para determinar
                        la causa de los posibles problemás en elcódigo que lo puedan estar generando
                        dificultades en tu sistemas.
                    </p>
                </div>

                <div>
                    <form action={''}>
                        <div />
                    </form>
                </div>
            </div>
        </section>
    );
}
