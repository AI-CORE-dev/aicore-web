import { CDEDICATEDTEAM } from '@/helpers/consts';

import styles from './styles/dedicated-development-team.module.css';

export function DedicatedDevelopmentTeam() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <p className={styles._title}>
                    Un equipo funcional listado para sumar a tu proyecto.
                </p>
                <p className={styles._subtitle}>
                    Si buscás un equipo listo para encarar y gestionar los proyectos que tenés en
                    mente nosotros lo armamos a medida para tu situación, gestionado por un senior
                    proyect manager para comenzar a encarar el proyecto de manera ágil y añadiendo
                    el máximo valor posible.
                </p>

                <ul className={styles._ul_images}>
                    {CDEDICATEDTEAM.map((item) => (
                        <li key={item.id} className={styles._list_image}>
                            <img alt={item.title} src={item.src} />
                            <p className={styles._label_image}>{item.title}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
