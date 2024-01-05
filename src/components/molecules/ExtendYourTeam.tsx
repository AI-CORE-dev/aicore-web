import styles from './styles/extend-your-team.module.css';

export function ExtendYourTeam() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <h2 className={styles._title}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </h2>
                <p className={styles._subtitle}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non obcaecati numquam
                    corporis quibusdam possimus adipisci quo ea exercitationem quaerat, saepe et
                    sed? Perferendis, eveniet exercitationem nam aliquam vel eius minus!
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
            'En Argentina, se necesitan una media de 60 días para contratar ingenieros localmente. Dos meses es mucho tiempo para proyectos con plazos ajustados. Brocoders puede conseguir el talento adecuado para usted en un plazo de 7 días.',
    },
    {
        id: 1,
        title: 'Se Flexible',
        subtitle:
            'A corto o largo plazo: puede contratar desarrolladores durante el tiempo que los necesite y reducir los costos de realizar contrataciones a tiempo completo. Además, podrás ampliar tu equipo cuando sea necesario.',
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
            'Con nosotros, elimina los costos de contratación, capacitación, espacio de oficina, licencias de software, beneficios para empleados, incrementos de nómina y gastos logísticos. Sólo pagas por el trabajo real.',
    },
    {
        id: 4,
        title: 'Cumplir con los plazos',
        subtitle:
            'Al contratar rápidamente y tomar el control de su personal, puede acelerar su proceso de desarrollo y cumplir con los plazos. Nuestros desarrolladores se pondrán manos a la obra tan pronto como se unan a su equipo.',
    },
    {
        id: 5,
        title: 'Consigue tu propio equipo',
        subtitle:
            'Conoce a todos los desarrolladores, se comunica con ellos directamente y gestiona su trabajo. Cubrimos todos los trámites, configuración de equipos y operaciones de nómina, y facilitamos relaciones productivas.',
    },
];
