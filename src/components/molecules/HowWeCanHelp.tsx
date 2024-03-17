import React from 'react';

import styles from './styles/how-we-can-help.module.css';

export function HowWeCanHelp() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <div className={styles._container_text}>
                    <h2 className={styles._title_help}>
                        ¿Por que incorporar un desarrollo a medida?
                    </h2>
                    <p className={styles._subtitle_help}>
                        Trabajamos codo a codo con organizaciones que buscan generar valor mediante
                        sistemas a medidas, estás son las razones por las cuales podría interesarte:
                    </p>
                </div>

                <ul className={styles._list_help}>
                    {CAIDS.map((aid) => (
                        <li key={aid.id} className={styles._item_list}>
                            <a className={styles._container_card} href={aid.redirection}>
                                <span className={styles._container_image}>
                                    <img
                                        alt={aid.title}
                                        className={styles._image}
                                        src={aid.image}
                                    />
                                </span>
                                <p className={styles._subtitle_card}>{aid.subtitle}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

const CAIDS = [
    {
        id: 0,
        title: 'Consolidá tu departamento de IT.',
        subtitle: 'Buscás reducir costos operativos y automatizar tareas repetitivas y manuales.',
        image: '/3.svg',
        redirection: '/services/staff-augmentation',
    },
    {
        id: 1,
        title: 'Comenza tu transformación',
        subtitle: 'Queres contar con información clave en tiempo real para la toma de decisiones.',
        image: '/4.svg',
        redirection: '/services/consultancy',
    },
    {
        id: 2,
        title: 'Desarrolla tu WEB',
        subtitle: 'Necesitas una mayor eficiencia para competir en el mercado actual.',
        image: '/5.svg',
        redirection: '/services/web-application-development',
    },
    {
        id: 3,
        title: 'Desarrolla tu APP',
        subtitle: 'Deseas simplificar procesos complejos que involucran varios sistemas actuales',
        image: '/1.svg',
        redirection: '/services/web-application-development',
    },
    {
        id: 4,
        title: 'Desarrolla tu Producto',
        subtitle: 'Queres ser más adaptable y flexible a las necesidades de tus clientes.',
        image: '/2.svg',
        redirection: '/services/web-application-development',
    },
];
