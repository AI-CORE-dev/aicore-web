import styles from './styles/type-of-work.module.css';

interface IOption {
    id: number;
    title: string;
}

interface IProps {
    title: string;
    description: string;
    options: IOption[];
}

export function TypeOfWork({ title, description, options }: IProps) {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <h3 className={styles._title}>{title}</h3>
                <div className={styles._content}>
                    <p className={styles._text}>{description}</p>
                    <ul className={styles._ul_options}>
                        {options.map((item) => (
                            <li key={item.id} className={styles._li_option}>
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
