import styles from './styles/our-solutions-for-talent-gap.module.css';

interface IProps {
    texts: {
        title: string;
        subtitle: string;
    }[];
}

export function TextsInfo({ texts }: IProps) {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                {texts.map((text) => (
                    <div key={text.title}>
                        <h2 className={styles._title}>{text.title}</h2>
                        <p className={styles._subtitle}>{text.subtitle}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
