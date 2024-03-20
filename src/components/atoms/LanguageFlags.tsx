'use client';

import { usePathname } from 'next/navigation';

import styles from '../organisms/styles/change-lang.module.css';

export function LanguajeFlags() {
    return (
        <div className={styles._container}>
            <a className={styles._container_img} href={'/es'}>
                <img alt={'arg'} className={styles._img_selected} src={'/lang/españa-30.png'} />
            </a>
            <a className={styles._container_img} href={'/en'}>
                <img
                    alt={'eeuu'}
                    className={styles._img_selected}
                    src={'/lang/estados-unidos-30.png'}
                />
            </a>
        </div>
    );
}
