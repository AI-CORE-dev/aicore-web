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

const CDEDICATEDTEAM = [
    {
        id: 0,
        title: 'Business analysts',
        src: 'https://brocoders.com/static/1296ca18e598c35c99c3486cdaee6ecf/usiness-analysts.svg',
    },

    {
        id: 1,
        title: 'UI/UX designers',
        src: 'https://brocoders.com/static/d6879dfafd9336d2160921228d1e5cf9/ui-designers.svg',
    },

    {
        id: 2,
        title: 'Web/mobile developers',
        src: 'https://brocoders.com/static/2addcba5d904ab085b2368c0e546a81c/mobile-developers.svg',
    },

    {
        id: 3,
        title: 'QA specialists',
        src: 'https://brocoders.com/static/f7004a1b2398bd29229f8080b63f7b21/qa-specialists.svg',
    },
    {
        id: 4,
        title: 'DevOps engineers',
        src: 'https://brocoders.com/static/e8992ad6babdfda2eb3f9e778b659da8/devops-engineers.svg',
    },
    {
        id: 5,
        title: 'Project managers',
        src: 'https://brocoders.com/static/5494896843dc5904489721b6764d0011/project-managers.svg',
    },
];
