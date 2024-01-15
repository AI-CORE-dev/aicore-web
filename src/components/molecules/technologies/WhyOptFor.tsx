import styles from '../styles/why-opt-for-mvp.module.css';

interface IProps {
    title: string;
    subtitle: string;
}

export function WhyOptFor({ title = 'title', subtitle = 'subtitle' }: IProps) {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <h2 className={styles._title}>{title}</h2>
                <p className={styles._subtitle}>{subtitle}</p>

                <ul className={styles._list}>
                    <li className={styles._item_list_se}>
                        <h4 className={styles._tile}>Desarrollo front end</h4>
                        <p className={styles._text}>
                            Desarrollamos aplicaciones web con una interfaz intuitiva como también
                            sitios web responsive optimizados para SEO.
                            <span className={styles._span}>
                                Todo esto apoyado en un diseño atractivo pensado desde su concepción
                                para lograr que la interacción con el usuario sea clara y
                                sigfinicativa.
                            </span>
                            Nos tomamos el tiempo de entender tu negocio para alinearnos con los
                            propósitos de tu marca.
                        </p>
                    </li>

                    <li className={styles._item_list_se}>
                        <h4 className={styles._tile}>Desarrollo back end</h4>
                        <p className={styles._text}>
                            Garantizamos el mejor rendimiento de tu producto sea cuál sea su
                            complejidad mediante sistemas back-end potentes, estables, confiables y
                            escalables.{' '}
                            <span className={styles._span}>
                                Aplicamos las mejores prácticas en la arquitectura de aplicaciones
                                web para garantizar eficiencia y coherencia al realizar las
                                operaciones que hacen a la lógica
                            </span>{' '}
                            cotidiana de tue empresa así como tambíen con alta seguridad para dar
                            protección ante cualquier problema de cara al servidor o el núcleo del
                            sistema.
                        </p>
                    </li>

                    <li className={styles._item_list_se}>
                        <h4 className={styles._tile}>Devops y infraestructura Cloud</h4>
                        <p className={styles._text}>
                            <span className={styles._span}>
                                Aceleramos el tiempo de respuesta de tu empresa a los desafíos del
                                entorno, donde la agilidad de las cargas de trabajo,
                            </span>
                            la eficiencia y el rendimiento son un must, asi como tambíen optimizar
                            los costos de prueba e implementación con los servicios DevOps y Cloud.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
}

const CTEXTS = [
    {
        id: 0,
        title: 'Boosted Time-to-Market',
        subtitle:
            'Reach the market in a blink with a fully-functioning prototype and find out whether your concept is viable and is in demand in the first place. Keep track of the latest trends and satisfy your target audience’s needs with a fast and agile-driven MVP.',
    },
    {
        id: 1,
        title: 'Early Adopters',
        subtitle:
            'Use an MVP and build some bridges with your potential clients to get in-depth feedback. Find out their pain points through surveys and interviews to end up with a successful, user-friendly product.',
    },
    {
        id: 2,
        title: 'Cost-Efficient Strategy',
        subtitle:
            'Based on the full-fledged business analysis, we define and prioritize only those functions that really matter. That said, we spend less time on the development and build an MVP with a limited scope of core features, thus saving your money.',
    },
    {
        id: 3,
        title: 'Streamlined Investment',
        subtitle:
            'Come up with our results-driven MVP to acquire early users and gain product traction, thus increasing your chances to catch the eye of potential investors. Show them your business idea they can evaluate and “touch”.',
    },
];
