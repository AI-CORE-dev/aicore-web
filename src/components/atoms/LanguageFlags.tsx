'use client';

import { usePathname } from 'next/navigation';

import styles from '../organisms/styles/change-lang.module.css';

export function LanguajeFlags() {
    const pathname = usePathname();

    return (
        <div className={styles._container}>
            <a className={styles._container_img} href={'/es'}>
                <img
                    alt={'arg'}
                    className={pathname.startsWith('/es') ? styles._img_selected : styles._img}
                    src={'/lang/españa-30.png'}
                />
            </a>
            <a className={styles._container_img} href={'/en'}>
                <img
                    alt={'eeuu'}
                    className={pathname.startsWith('/en') ? styles._img_selected : styles._img}
                    src={'/lang/estados-unidos-30.png'}
                />
            </a>
        </div>
    );
}
