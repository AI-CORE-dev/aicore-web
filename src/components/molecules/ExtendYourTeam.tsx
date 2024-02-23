import { CARG } from '@/helpers/consts';

import styles from './styles/extend-your-team.module.css';

interface IOption {
    id: number;
    title: string;
    subtitle: string;
}

interface IProps {
    title: string;
    description: string;
    options: IOption[];
}

export function ExtendYourTeam({ title = '', description = '', options = [] }: IProps) {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <h2 className={styles._title}>{title}</h2>
                <p className={styles._subtitle}>{description}</p>
                <ul className={styles._container_items}>
                    {options.map((item) => (
                        <li key={item.id} className={styles._list_item}>
                            <p className={styles._item_title}>{item.title}</p>
                            <p className={styles._item_subtitle}>{item.subtitle}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
