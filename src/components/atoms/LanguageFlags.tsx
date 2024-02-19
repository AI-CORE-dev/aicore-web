import type { NextRequest } from 'next/server';

import styles from '../organisms/styles/change-lang.module.css';

export function LanguajeFlags(request: NextRequest) {
    return (
        <div className={styles._container}>
            <a className={styles._container_img} href={'/es'}>
                <img alt={'arg'} className={styles._img} src={'/lang/argentina-30.png'} />
            </a>
            <a className={styles._container_img} href={'/en'}>
                <img alt={'eeuu'} className={styles._img} src={'/lang/estados-unidos-30.png'} />
            </a>
        </div>
    );
}
