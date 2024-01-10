import styles from './styles/our-node-expertise.module.css';

export function OurNodeExpertise() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <h2 className={styles._title}>Nuestra experiencia con Node</h2>
                <p className={styles._subtitle}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
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

const CEXPERTISE = [
    {
        id: 0,
        title: 'Streaming apps',
        description:
            'Optimize streaming content delivery to your users with the help of our Node.js developers. Leverage our expertise in building various streaming applications, including live video streaming platforms and music streaming services. Using Node.js, we allow users to download the core components first and access the rest software elements on-demand. Since the data is coming through a stream, we can process it in parallel during loading. With its streaming API, Node.js ensures efficient data streaming, reducing server and local computer overload.',
    },
    {
        id: 1,
        title: 'Real-time chats',
        description:
            'Optimize streaming content delivery to your users with the help of our Node.js developers. Leverage our expertise in building various streaming applications, including live video streaming platforms and music streaming services. Using Node.js, we allow users to download the core components first and access the rest software elements on-demand. Since the data is coming through a stream, we can process it in parallel during loading. With its streaming API, Node.js ensures efficient data streaming, reducing server and local computer overload.',
    },
    {
        id: 2,
        title: 'Complex SPA',
        description:
            'Optimize streaming content delivery to your users with the help of our Node.js developers. Leverage our expertise in building various streaming applications, including live video streaming platforms and music streaming services. Using Node.js, we allow users to download the core components first and access the rest software elements on-demand. Since the data is coming through a stream, we can process it in parallel during loading. With its streaming API, Node.js ensures efficient data streaming, reducing server and local computer overload.',
    },
    {
        id: 3,
        title: 'Collaboration tools',
        description:
            'Optimize streaming content delivery to your users with the help of our Node.js developers. Leverage our expertise in building various streaming applications, including live video streaming platforms and music streaming services. Using Node.js, we allow users to download the core components first and access the rest software elements on-demand. Since the data is coming through a stream, we can process it in parallel during loading. With its streaming API, Node.js ensures efficient data streaming, reducing server and local computer overload.',
    },
];
