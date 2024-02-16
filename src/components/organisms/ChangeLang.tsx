import { LanguajeFlags } from '../atoms/LanguageFlags';

import styles from './styles/change-lang.module.css';

export function ChangeLang() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <img
                    alt={'aicore-logo'}
                    className={styles._img_logo_desktop}
                    height={50}
                    src={'https://aicore.com.ar/wp-content/uploads/2021/05/Logo-Aicore-co.png'}
                    width={150}
                />

                <LanguajeFlags />
            </div>
        </section>
    );
}
