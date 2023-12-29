import styles from './styles/featured-projects.module.css';

export function FeatureProjects() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <h2 className={styles._title}>Proyectos Destacados</h2>

                <ul>
                    {CPROJECTS.map((project) => (
                        <li key={project.id} className={styles._project_card}>
                            <iframe
                                allowFullScreen
                                height={'400px'}
                                loading={'lazy'}
                                sandbox={
                                    'allow-same-origin allow-scripts allow-popups allow-presentation'
                                }
                                src={project.videoUrl}
                                style={{
                                    display: 'flex',
                                    flex: 1,
                                    width: '100%',
                                }}
                                title={'video'}
                            />

                            <div className={styles._container_info}>
                                <h2 className={styles._title}>{project.title}</h2>
                                <p className={styles._description}>{project.description}</p>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className={styles._field_name}>Industria</td>
                                            <td className={styles._field_value}>
                                                {project.industry}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={styles._field_name}>Locacion</td>
                                            <td className={styles._field_value}>
                                                {project.location}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={styles._field_name}>Tecnologías</td>
                                            <td>
                                                <ul>
                                                    <li>
                                                        <img
                                                            alt={'react'}
                                                            src={
                                                                'https://brocoders.com/static/6228000327bdcbad0cdcdc3016895c64/node-js-logo.svg'
                                                            }
                                                        />
                                                        <img
                                                            alt={'react'}
                                                            src={
                                                                'https://brocoders.com/static/62243934ffd392447ffd8fd0777d717e/amazon-logo.svg'
                                                            }
                                                        />
                                                        <img
                                                            alt={'react'}
                                                            src={
                                                                'https://brocoders.com/static/d3ce721a9f2336ff037afa15d1ad0271/react-logo.svg'
                                                            }
                                                        />
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={styles._field_name}>Equipo</td>
                                            <td className={styles._field_value}>{project.team}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <a className={styles._button_lean_more} href={'/'}>
                                    Leer mas
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

const CPROJECTS = [
    {
        id: 0,
        videoUrl: 'https://www.youtube.com/embed/7e90gBu4pas',
        title: 'Aon',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio assumenda repellendus cumque blanditiis? Ex blanditiis vitae amet modi, hic odit voluptatem sit eos nisi expedita voluptate sunt quaerat laborum dicta.',
        industry: 'Seguros',
        location: 'Estados Unidos',
        technologies: ['nodejs', 'react', 'amazon'],
        team: '7 specialists (PM, Designer, QA, Frontend, Backend, DevOps)',
        href: '/',
    },
    {
        id: 1,
        videoUrl: 'https://www.youtube.com/embed/7e90gBu4pas',
        title: 'Bukest',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio assumenda repellendus cumque blanditiis? Ex blanditiis vitae amet modi, hic odit voluptatem sit eos nisi expedita voluptate sunt quaerat laborum dicta.',
        industry: 'Booking de servicios',
        location: 'Argentina',
        technologies: ['nodejs', 'react', 'amazon'],
        team: '7 specialists (PM, Designer, QA, Frontend, Backend, DevOps)',
        href: '/',
    },
    {
        id: 2,
        videoUrl: 'https://www.youtube.com/embed/7e90gBu4pas',
        title: 'Worknmates',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio assumenda repellendus cumque blanditiis? Ex blanditiis vitae amet modi, hic odit voluptatem sit eos nisi expedita voluptate sunt quaerat laborum dicta.',
        industry: 'Booking de servicios',
        location: 'Estados Unidos',
        technologies: ['nodejs', 'react', 'amazon'],
        team: '7 specialists (PM, Designer, QA, Frontend, Backend, DevOps)',
        href: '/',
    },
    {
        id: 3,
        videoUrl: 'https://www.youtube.com/embed/7e90gBu4pas',
        title: 'Fiserv',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio assumenda repellendus cumque blanditiis? Ex blanditiis vitae amet modi, hic odit voluptatem sit eos nisi expedita voluptate sunt quaerat laborum dicta.',
        industry: 'Seguros',
        location: 'Estados Unidos',
        technologies: ['nodejs', 'react', 'amazon'],
        team: '7 specialists (PM, Designer, QA, Frontend, Backend, DevOps)',
        href: '/',
    },
];
