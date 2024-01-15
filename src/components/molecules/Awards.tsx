import { CAWARDS } from '@/helpers/consts';

import styles from './styles/awards.module.css';

export function Awards() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <h2 className={styles._title}>Premios</h2>

                <ul className={styles._unordered_list}>
                    {CAWARDS.map((item) => (
                        <li key={item.id} className={styles._list_number}>
                            <img alt={item.alt} className={styles._image} src={item.image} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
