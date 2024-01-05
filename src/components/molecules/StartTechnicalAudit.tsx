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
                    <h3 className={styles._content_title}>Comenza con una auditoría técnica </h3>
                    <p className={styles._content_subtitle}>
                        Revisamos tu app desde su perspectiva técnica y te proveemos de un reporte
                        de nuestros desarrolladores seniores listo para que puedas accionar y sobre
                        que puntos priorizar. De esta forma podes evaluar nuestras skills y decidir
                        sobre ello si queres trabajar con nosotros sobre el proyecto.
                    </p>
                    <a className={styles._btn_text} href={'/'}>
                        {' '}
                        Descargar nuestro reporte para auditoría.
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
