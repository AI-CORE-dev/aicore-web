import styles from './styles/banner-contact.module.css';

export function BannerContact() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <div>
                    <p className={styles._text}>
                        Arma tu equipo ideal con la mejor performance junto a AI CORE
                    </p>
                    <p className={styles._secondary_text}>
                        Suma talentos a tus proyectos, o bien auditalo con nosotros para determinar
                        la causa de los posibles problemás en elcódigo que lo puedan estar generando
                        dificultades en tu sistemas.
                    </p>
                </div>

                <div>
                    <a className={styles._btn_white} href={'/contact'}>
                        Contratanos
                    </a>
                    <p className={styles._text_or}>O</p>
                    <a className={styles._btn_black} href={'/contact'}>
                        Solicitar Auditoria
                    </a>
                </div>
            </div>
        </section>
    );
}
