import styles from './styles/start-technical-audit.module.css';

export function StartTechnicalAudit() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <img
                    alt={''}
                    className={styles._img}
                    src={
                        'https://brocoders.com/static/b38978b8dae3a9461984cac1e9ef0947/cooperation-icon.svg'
                    }
                />

                <div className={styles._content}>
                    <h3 className={styles._content_title}>Lorem ipsum dolor sit amet</h3>
                    <p className={styles._content_subtitle}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quos nulla
                        eum id nisi explicabo laudantium mollitia, tempora molestiae harum vel,
                        dignissimos hic. Culpa maiores molestias saepe quam pariatur tempore?
                    </p>
                    <a className={styles._btn_text} href={'/'}>
                        {' '}
                        Descargar reporte tecnico
                    </a>
                    <a className={styles._btn} href={'/contact'}>
                        Solicitar una auditoria
                    </a>
                </div>

                <div className={styles._content_img}>
                    <img alt={''} src={'/working-on-macbook.webp'} />
                </div>
            </div>
        </section>
    );
}
