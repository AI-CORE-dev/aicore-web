import styles from './styles/work-process.module.css';

export function WorkProcess() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <h2 className={styles._title}>WorkProcess</h2>

                <div className={styles._module_container}>
                    <ul className={styles._module_list}>
                        <li>
                            <button className={styles._module_btn} type={'button'}>
                                Llamada de Introduccion
                            </button>
                        </li>
                        <li>
                            <button className={styles._module_btn} type={'button'}>
                                Fase de descrubrimiento
                            </button>
                        </li>
                        <li>
                            <button className={styles._module_btn} type={'button'}>
                                Fase de diseño
                            </button>
                        </li>
                        <li>
                            <button className={styles._module_btn} type={'button'}>
                                Fase de desarrollo
                            </button>
                        </li>
                        <li>
                            <button className={styles._module_btn} type={'button'}>
                                Lanzamiento del producto
                            </button>
                        </li>
                        <li>
                            <button className={styles._module_btn} type={'button'}>
                                Soporte
                            </button>
                        </li>
                    </ul>

                    {/* <ul className={styles._module_content}>
                        <li className={styles._module_item_li}>
                            <article className={styles._tabs_colum_fisrt}>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                                    odio suscipit. Excepturi vitae fugiat numquam eos nobis magnam,
                                    incidunt repellat, quae suscipit eveniet sunt, id qui. Omnis aut
                                    unde quas.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                                    odio suscipit. Excepturi vitae fugiat numquam eos nobis magnam,
                                    incidunt repellat, quae suscipit eveniet sunt, id qui. Omnis aut
                                    unde quas.
                                </p>
                            </article>
                            <div className={styles._tabs_colum_last} />
                        </li>
                        <li className={styles._module_item_li}>
                            <article className={styles._tabs_colum_fisrt}>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                                    odio suscipit. Excepturi vitae fugiat numquam eos nobis magnam,
                                    incidunt repellat, quae suscipit eveniet sunt, id qui. Omnis aut
                                    unde quas.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                                    odio suscipit. Excepturi vitae fugiat numquam eos nobis magnam,
                                </p>
                            </article>
                            <div className={styles._tabs_colum_last} />
                        </li>
                        <li className={styles._module_item_li}>
                            <article className={styles._tabs_colum_fisrt}>
                                <h3>Low fidelity prototype</h3>
                                <p>
                                    Based on gathered data and driven by the iterative development
                                    model, we identify the feature flow and prepare the wireframes
                                    along with a low-fidelity MVP prototype
                                </p>
                                <h3>Feature-based estimation</h3>
                                <p>
                                    It’s crucial to evaluate the entire project and provide a
                                    customer with a clear vision of how much time and money the
                                    development process might take. That said, we use a feature
                                    decomposition to split the functionality into small parts, which
                                    can then be analyzed by our technical experts.
                                </p>
                                <p>
                                    Our customers have full access to all relevant data, so they can
                                    assess further steps, as well as protect the budget to
                                    investors. Once it’s done, we adjust a toolset and a tech stack
                                    for the development stage.
                                </p>
                                <h3>Design</h3>
                                <p>
                                    Our UI/UX designers have extensive experience in creating
                                    eye-catching and user-friendly apps that proved to be remarkable
                                    solutions. We stick to Figma to design the UI/UX elements for
                                    our MVP projects. If requested, we provide a customer with an
                                    interactive prototype, so he can test the interface usability
                                    and leave his feedback.
                                </p>
                            </article>
                            <div className={styles._tabs_colum_last} />
                        </li>
                        <li className={styles._module_item_li}>
                            <article className={styles._tabs_colum_fisrt}>
                                <p>
                                    It’s time to establish a development environment, define the
                                    project’s architecture, make a roadmap and choose the right
                                    candidates to set up a team that fits your company’s
                                    requirements and vision. To strengthen the overall performance
                                    and ensure everything is working properly, we carry out
                                    functional, integration and usability tests. We also integrate
                                    manual and auto QA testing at this stage.
                                </p>
                                <p>
                                    At the end of each sprint, we provide the stakeholders with a
                                    demo to showcase the workflow and the functionality we’ve
                                    already made. Hence, all the stakeholders have a clear vision of
                                    the working process, so they can leave feedback and make sure we
                                    are on the right path.
                                </p>
                                <h3>Project management</h3>
                                <p>
                                    We involve experienced project managers to take care of every
                                    step and the entire technological process, so you can pay
                                    maximum attention to your strategic and business goals. Based on
                                    years of practice, we’ve come up with a robust and
                                    well-established workflow, which proved to be highly effective
                                    and client-oriented.
                                </p>
                                <h3>Transparent work process</h3>
                                <p>
                                    To ensure a project’s safety, we apply the latest security and
                                    agile-driven practices, as well as provide transparent reports,
                                    according to a customer’s request. Besides, you can come to our
                                    office any time to work with our team and look at the whole
                                    working process yourself. Moreover, we can strengthen a project
                                    by applying extra resources once you request to do so.
                                </p>
                            </article>
                            <div className={styles._tabs_colum_last} />
                        </li>
                        <li className={styles._module_item_li}>
                            <article className={styles._tabs_colum_fisrt}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
                                    eum ipsam odio incidunt dolores omnis, ipsa culpa quae alias
                                    velit corporis est a nemo impedit, labore molestias, deserunt id
                                    ex.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
                                    eum ipsam odio incidunt dolores omnis, ipsa culpa quae alias
                                    velit corporis est a nemo impedit, labore molestias, deserunt id
                                    ex.
                                </p>
                            </article>
                            <div className={styles._tabs_colum_last} />
                        </li>
                        <li className={styles._module_item_li}>
                            <article className={styles._tabs_colum_fisrt}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
                                    eum ipsam odio incidunt dolores omnis, ipsa culpa quae alias
                                    velit corporis est a nemo impedit, labore molestias, deserunt id
                                    ex.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
                                    eum ipsam odio incidunt dolores omnis, ipsa culpa quae alias
                                    velit corporis est a nemo impedit, labore molestias, deserunt id
                                    ex.
                                </p>
                            </article>
                            <div className={styles._tabs_colum_last} />
                        </li>
                    </ul> */}
                </div>
            </div>
        </section>
    );
}
