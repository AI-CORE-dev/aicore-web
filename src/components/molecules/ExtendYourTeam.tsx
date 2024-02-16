import { CARG } from '@/helpers/consts';

import styles from './styles/extend-your-team.module.css';

export function ExtendYourTeam() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <h2 className={styles._title}>Porque expandir tu equipo junto a AI CORE</h2>
                <p className={styles._subtitle}>
                    Experiencia, eficiencia y rapidez . Estos son los pilares sobre los cuales
                    diseñamos nuestra solución de staff augmentation y lo que nos ha permitido
                    convertirnos en aliado de grandes companias que buscan fortalecer sus equipos.
                </p>
                <ul className={styles._container_items}>
                    {CARG.map((item) => (
                        <li key={item.id} className={styles._list_item}>
                            <p className={styles._item_title}>{item.title}</p>
                            <p className={styles._item_subtitle}>{item.subtitle}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
