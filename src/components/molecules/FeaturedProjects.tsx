import React from 'react';

import { CPROJECTS } from '@/helpers/consts';

import styles from './styles/featured-projects.module.css';

export function FeatureProjects() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <h2 className={styles._title}>Proyectos Destacados</h2>

                <ul>
                    {CPROJECTS.map((project) => (
                        <li key={project.id} className={styles._project_card}>
                            <div
                                style={{
                                    width: '50%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: 'gray',
                                }}
                            >
                                <img
                                    alt={'fav-icon'}
                                    className={styles._img}
                                    src={
                                        'https://aicore.com.ar/wp-content/uploads/2021/05/Logo-Favicon-Aicore.png'
                                    }
                                />
                            </div>
                            {/* <iframe
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
                            /> */}

                            <div className={styles._container_info}>
                                <h2
                                    className={styles._title}
                                    style={{ fontSize: '30px', marginBottom: '24px' }}
                                >
                                    {project.title}
                                </h2>
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
                                                            alt={'node'}
                                                            src={
                                                                'https://brocoders.com/static/6228000327bdcbad0cdcdc3016895c64/node-js-logo.svg'
                                                            }
                                                        />
                                                        <img
                                                            alt={'amazon'}
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
