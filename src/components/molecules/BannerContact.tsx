import styles from './styles/banner-contact.module.css';

export function BannerContact() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <div>
                    <p className={styles._text}>Lorem ipsum dolor sit, amet consectetur</p>
                    <p className={styles._secondary_text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, adipisci nisi
                        culpa tenetur dolores iste expedita totam suscipit voluptatum eos quas,
                        quidem saepe consectetur nobis optio harum et ullam neque. Lorem ipsum dolor
                    </p>
                </div>

                <div>
                    <a className={styles._btn_white} href={'/contact'}>
                        Contratanos
                    </a>
                    <p className={styles._text_or}>O</p>
                    <a className={styles._btn_black} href={'/contact'}>
                        Solicitar Auditoria técnica
                    </a>
                </div>
            </div>
        </section>
    );
}
