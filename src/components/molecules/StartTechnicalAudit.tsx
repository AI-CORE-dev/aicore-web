import styles from './styles/start-technical-audit.module.css';

interface IProps {
    title: string;
    subtitle: string;
    btnText: string;
    btnLink: string;
    img: string;
    alt: string;
}

export function StartTechnicalAudit({ title, subtitle, btnText, btnLink, img, alt }: IProps) {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <div className={styles._content_img}>
                    <img
                        alt={alt}
                        src={img}
                        style={{
                            position: 'absolute',

                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                    />
                    <div className={styles._content}>
                        <h3 className={styles._content_title}>{title}</h3>
                        <p className={styles._content_subtitle}>{subtitle}</p>
                        {/* <a className={styles._btn_text} href={'/'}>
                        {' '}
                        {btnText}
                    </a> */}
                        <a className={styles._btn} href={'/contact'}>
                            {btnLink}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
