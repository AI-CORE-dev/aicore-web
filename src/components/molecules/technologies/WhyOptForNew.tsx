import styles from '../styles/why-opt-for-mvp.module.css';

interface IProps {
    title: string;
    subtitle: string;
    data: {
        id: number;
        title: string;
        subtitle: string;
    }[];
}

export function WhyOptForNew({
    title = 'title',
    subtitle = 'subtitle',
    data = [{ id: 0, title: 'test', subtitle: 'testsub' }],
}: IProps) {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <h2 className={styles._title}>{title}</h2>
                <p className={styles._subtitle}>{subtitle}</p>

                <ul className={styles._list}>
                    {data.map((item) => {
                        return (
                            <li key={item.id} className={styles._item_list_se}>
                                <h4 className={styles._tile}>{item.title}</h4>
                                <p className={styles._text}>{item.subtitle}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
