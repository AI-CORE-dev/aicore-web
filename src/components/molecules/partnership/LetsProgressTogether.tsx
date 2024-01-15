import styles from './styles/lets-progress-together.module.css';

export function LetsProgressTogether() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <div className={styles._text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda laudantium
                    nisi nulla, totam vero mollitia fugit natus corporis, tempora necessitatibus et
                    reiciendis? Cumque tempora est voluptate quos, sunt ut quas? Lorem ipsum dolor
                </div>
                <div className={styles._container}>
                    <div className={styles._title}>Lorem ipsun dolor amet!</div>
                    <div>
                        <a className={styles._btn} href={'/contact'}>
                            {' '}
                            Contactanos
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
