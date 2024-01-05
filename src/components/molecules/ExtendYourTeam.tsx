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

const CARG = [
    {
        id: 0,
        title: 'Ahorrar tiempo',
        subtitle:
            'Hoy en día conseguir perfiles puntuales para proyectos de IT suele ser un proceso tedioso que puede dejar parado tus proyectos de 60 a 90 días aproximadamente. En AI CORE ponemos a disposición ese talento en 15 días.',
    },
    {
        id: 1,
        title: 'Te aportamos flexibilidad',
        subtitle:
            'Escala rapidamente o reducí el tamaño de tu equipo logrando mayor flexibilidad y control ante cambios en el proyecto y sus deadlines.',
    },
    {
        id: 2,
        title: 'Elige lo mejor',
        subtitle:
            'Según sus requisitos, le proporcionamos los candidatos más relevantes para que los revise. Puedes hacer tu propia investigación y entrevistar a cada candidato para asegurarte de que se ajusten a tu proyecto.',
    },
    {
        id: 3,
        title: 'Reducir costos',
        subtitle:
            'Paga solo por las horas de desarrollo y evitá incurrir en presupuestos más robustos que se desprenden de tercerizar el proyecto.',
    },
    {
        id: 4,
        title: 'Cumplir con los plazos',
        subtitle:
            'Comenza de inmediato a trabajar en tu proyecto para cumplirlo en tiempo y forma de la forma más eficiente.',
    },
    {
        id: 5,
        title: 'Consigue tu propio equipo',
        subtitle:
            'Generamos a medida un equipo listo para trabajar en tu proyecto y cubrirlo en su totalidad.',
    },
];
