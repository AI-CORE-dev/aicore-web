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
                                también sitios web responsive optimizados para SEO.Todo esto apoyado
                                en un diseño atractivo pensado desde su concepción para lograr que
                                la interacción con el usuario sea clara y significativa. Nos tomamos
                                el tiempo de entender tu negocio para alinearnos con los propósitos
                                de tu marca.
                            </p>
                        </li>

                        <li className={styles._item_list}>
                            <h4 className={styles._tile}>Desarrollo back end</h4>
                            <p className={styles._text}>
                                Garantizamos el mejor rendimiento de tu producto sea cuál sea su
                                complejidad mediante sistemas back-end potentes, estables,
                                confiables y escalables. Aplicamos las mejores prácticas en la
                                arquitectura de aplicaciones web para garantizar eficiencia y
                                coherencia al realizar las operaciones que hacen a la lógica
                                cotidiana de tu empresa así como también con alta seguridad para dar
                                protección ante cualquier problema de cara al servidor o el núcleo
                                del sistema.
                            </p>
                        </li>

                        <li className={styles._item_list}>
                            <h4 className={styles._tile}>Devops y infraestructura Cloud</h4>
                            <p className={styles._text}>
                                Aceleramos el tiempo de respuesta de tu empresa a los desafíos del
                                entorno, donde la agilidad de las cargas de trabajo,la eficiencia y
                                el rendimiento son un must, así como también optimizar los costos de
                                prueba e implementación con los servicios DevOps y Cloud.
                            </p>
                        </li>

                        <li className={styles._item_list}>
                            <h4 className={styles._tile}>Quality Assurance</h4>
                            <p className={styles._text}>
                                Entregamos una experiencia de usuario de primer nivel apoyada en un
                                rendimiento perfecto y sin bugs de tu aplicación web. Durante todo
                                el ciclo del desarrollo nos encargamos de ejecutar los controles de
                                calidad necesarios, así como pruebas del software para garantizar su
                                estabilidad y eficiencia junto con predicción, identificación y
                                prevención de posibles riesgos.
                            </p>
                        </li>
                    </ul>
                ) : (
                    <ul className={styles._list}>
                        <li className={styles._item_list}>
                            <h4 className={styles._tile}>Capacidad de desarrollo</h4>
                            <p className={styles._text}>
                                Desarrolla eficientemente negocios en las áreas de Arquitectura e
                                implementación de Software.
                            </p>
                        </li>

                        <li className={styles._item_list}>
                            <h4 className={styles._tile}>Potencia las áreas de tu empresa</h4>
                            <p className={styles._text}>
                                Aplicamos nuestro conocimiento en su empresa para encontrar
                                soluciones técnicas que favorezcan la ejecución estratégica de sus
                                objetivos comerciales, productivos y de negocio.
                            </p>
                        </li>

                        <li className={styles._item_list}>
                            <h4 className={styles._tile}>Desarrolla tus ventajas competitivas.</h4>
                            <p className={styles._text}>
                                Apoyate en nuestra experiencia en tecnología para aumentar tu
                                competitividad en el mercado
                            </p>
                        </li>

                        <li className={styles._item_list}>
                            <h4 className={styles._tile}>
                                Infraestructura y seguridad informática.
                            </h4>
                            <p className={styles._text}>
                                Desarrollate con confianza, te garantizamos sistemas seguros y
                                confiables para proteger tus datos a la vez que permitimos
                                operaciones digitales fluidas.
                            </p>
                        </li>
                    </ul>
                )}
            </div>
        </section>
    );
}
