import styles from './styles/partner-review.module.css';

interface IProps {
    isTitle?: boolean;
}

export function PartnerReview({ isTitle = true }: IProps) {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                {isTitle ? (
                    <>
                        <h2 className={styles._title}>Nuestros partners</h2>
                        <div className={styles._text}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        </div>
                    </>
                ) : null}

                <div className={styles._container_review}>
                    <div className={styles._header}>
                        <div>
                            <div className={styles._header_title}>Ai Core IT Specialist</div>
                            <div className={styles._header_subtitle}>Argentina, Buenos Aires</div>
                            <a
                                className={styles._header_link}
                                href={'https://aicore.com.ar/'}
                                rel={'noopener'}
                                target={'_blank'}
                            >
                                aicore.com
                            </a>
                        </div>

                        <div>
                            <img
                                alt={'aicore-logo'}
                                className={styles._logo}
                                src={
                                    'https://aicore.com.ar/wp-content/uploads/2021/05/Logo-Aicore-co.png'
                                }
                            />
                        </div>
                    </div>

                    <div className={styles._review}>
                        <div className={styles._container_image}>
                            <img
                                alt={'nosotros'}
                                className={styles._img}
                                src={'/about_us/socios.jpg'}
                            />
                        </div>
                        <div className={styles._description}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iusto
                            vitae praesentium, quos quisquam error maiores fuga, obcaecati
                            perferendis id architecto ex vero omnis labore accusamus reprehenderit
                            expedita porro fugiat! Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Commodi a deserunt quo beatae ducimus. Mollitia
                            praesentium iste laboriosam. Debitis blanditiis ea eum ratione, aliquam
                            nulla suscipit explicabo possimus tenetur. Sint? Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Nisi, culpa architecto earum, quam
                            labore recusandae, deserunt perspiciatis cupiditate repudiandae
                            repellendus vitae tempore explicabo dignissimos unde aliquid amet nam
                            numquam nemo! vitae praesentium, quos quisquam error maiores fuga,
                            obcaecati perferendis id architecto ex vero omnis labore accusamus
                            reprehenderit expedita porro fugiat! Lorem ipsum dolor, sit amet
                            consectetur
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
