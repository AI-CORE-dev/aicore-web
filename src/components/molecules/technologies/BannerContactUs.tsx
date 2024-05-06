import styles from './styles/banner-contact-us.module.css';

interface IProps {
    title: string;
    subtitle: string;
    btnText: string;
}

export function BannerContactUs({ title, subtitle, btnText }: IProps) {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <p className={styles._text}>{subtitle}</p>
                <h2 className={styles._title}>{title}</h2>
                <a className={styles._btn} href={'/contact'}>
                    {btnText}
                </a>
            </div>
        </section>
    );
}
