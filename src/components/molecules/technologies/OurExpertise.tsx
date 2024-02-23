import styles from './styles/our-node-expertise.module.css';

interface IProps {
    id: number;
    title: string;
    description: string;
}

export function OurExpertise({ CEXPERTISE }: { CEXPERTISE: IProps[] }) {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <h2 className={styles._title}>Somos expertos en Node.js</h2>
                <p className={styles._subtitle}>
                    Fortalece tu equipo interno con nuestros especialistas o incorpora un equipo
                    multifuncional diseñado para desarrollar tus proyectos.
                </p>

                <ul>
                    {CEXPERTISE.map((item) => (
                        <li key={item.id} className={styles._list}>
                            <p className={styles._title_list}>{item.title}</p>
                            <p className={styles._description}>{item.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
