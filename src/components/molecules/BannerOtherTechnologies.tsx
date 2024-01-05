import styles from './styles/banner-other-technologies.module.css';

export function BannerOtherTechnologies() {
    return (
        <section className={styles._section}>
            <div className={styles._container}>
                <p className={styles._title}>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                <p className={styles._subtitle}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, omnis numquam
                    necessitatibus veritatis sapiente similique modi nostrum animi eligendi? Sit
                    deleniti provident numquam. Beatae tempore eaque odio quod consectetur deleniti.
                </p>
                <a className={styles._btn} href={'/contact'}>
                    Contactanos
                </a>
            </div>
        </section>
    );
}
