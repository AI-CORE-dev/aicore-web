'use client';

import { handleScroll } from '@/helpers/handleScrolSchedule';

import styles from './styles/banner-contact-us.module.css';

export function BannerContactUs() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <h2 className={styles._title}>
                    Si estos son tus objetivos, agenda una reunión con nosotros para dar el primer
                    paso en tu procesos de transformación digital.
                </h2>
                <button className={styles._btn} type={'button'} onClick={handleScroll}>
                    Contactanos
                </button>
            </div>
        </section>
    );
}
