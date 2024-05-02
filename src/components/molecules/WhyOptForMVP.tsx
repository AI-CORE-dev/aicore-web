import styles from './styles/why-opt-for-mvp.module.css';

interface IProps {
    title: string;
    subtitle: string;
    isOtherPage: boolean;
}

export function WhyOptForMVP({
    title = 'title',
    subtitle = 'subtitle',
    isOtherPage = false,
}: IProps) {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <h2 className={styles._title}>{title}</h2>
                <p className={styles._subtitle}>{subtitle}</p>
                {isOtherPage ? (
                    <ul className={styles._list}>
                        <li className={styles._item_list}>
                            <h4 className={styles._tile}>Desarrollo front end</h4>
                            <p className={styles._text}>
                                Desarrollamos aplicaciones web con una interfaz intuitiva como
                                también sitios web responsive optimizados para SEO.
                                <span className={styles._span}>
                                    Todo esto apoyado en un diseño atractivo pensado desde su
                                    concepción para lograr que la interacción con el usuario sea
                                    clara y sigfinicativa.
                                </span>
                                Nos tomamos el tiempo de entender tu negocio para alinearnos con los
                                propósitos de tu marca.
                            </p>
                        </li>

                        <li className={styles._item_list}>
                            <h4 className={styles._tile}>Desarrollo back end</h4>
                            <p className={styles._text}>
                                Garantizamos el mejor rendimiento de tu producto sea cuál sea su
                                complejidad mediante sistemas back-end potentes, estables,
                                confiables y escalables.{' '}
                                <span className={styles._span}>
                                    Aplicamos las mejores prácticas en la arquitectura de
                                    aplicaciones web para garantizar eficiencia y coherencia al
                                    realizar las operaciones que hacen a la lógica
                                </span>{' '}
                                cotidiana de tue empresa así como tambíen con alta seguridad para
                                dar protección ante cualquier problema de cara al servidor o el
                                núcleo del sistema.
                            </p>
                        </li>

                        <li className={styles._item_list}>
                            <h4 className={styles._tile}>Devops y infraestructura Cloud</h4>
                            <p className={styles._text}>
                                <span className={styles._span}>
                                    Aceleramos el tiempo de respuesta de tu empresa a los desafíos
                                    del entorno, donde la agilidad de las cargas de trabajo,
                                </span>
                                la eficiencia y el rendimiento son un must, asi como tambíen
                                optimizar los costos de prueba e implementación con los servicios
                                DevOps y Cloud.
                            </p>
                        </li>

                        <li className={styles._item_list}>
                            <h4 className={styles._tile}>Quality Assurance</h4>
                            <p className={styles._text}>
                                Entregamos una experiencia de usuario de primer nivel apoyada en un
                                rendimiento perfecto y sin bugs de tu aplicación web.
                                <span className={styles._span}>
                                    {' '}
                                    Durante todo el ciclo del desarrollo nos encargamos de ejecutar
                                    los controles de calidad necesarios,
                                </span>{' '}
                                asi como pruebas del software para garantizar su estabilidad y
                                eficiencia junto con predicción, identificación y prevención de
                                posibles riesgos.
                            </p>
                        </li>
                    </ul>
                ) : (
                    <ul className={styles._list}>
                        <li className={styles._item_list}>
                            <h4 className={styles._tile}>Versatilidad</h4>
                            <p className={styles._text}>
                                Genera espacios de simulación de forma conveniente en cualquier
                                lugar
                            </p>
                        </li>

                        <li className={styles._item_list}>
                            <h4 className={styles._tile}>Impacto</h4>
                            <p className={styles._text}>
                                Logra acciones de marketing impactantes y memorables ya sea en
                                eventos o punto de venta.
                            </p>
                        </li>

                        <li className={styles._item_list}>
                            <h4 className={styles._tile}>Aprendizaje inmersivo</h4>
                            <p className={styles._text}>
                                Posibilita el aprendizaje basado en la experiencia fomentando el
                                desarrollo de habilidades en situaciones realistas
                            </p>
                        </li>

                        <li className={styles._item_list}>
                            <h4 className={styles._tile}>Inmersión</h4>
                            <p className={styles._text}>
                                Sumergí a tu usuario en una experiencia inmersiva para conectar con
                                tu producto y tu marca como nunca antes
                            </p>
                        </li>
                    </ul>
                )}
            </div>
        </section>
    );
}
