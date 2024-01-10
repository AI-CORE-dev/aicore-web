import React from 'react';

import styles from './styles/how-we-can-help.module.css';

export function HowWeCanHelp() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <div className={styles._container_text}>
                    <h2 className={styles._title_help}>¿Cómo podemos ayudar a tu organización?</h2>
                    <p className={styles._subtitle_help}>
                        Trabajamos codo a codo con organizaciones que buscan generar valor mediante
                        la tecnología… somos expertos en definir, desarrollar, lanzar, integrar y
                        optimizar proyectos tecnológicos de todo tipo.
                    </p>
                </div>

                <ul className={styles._list_help}>
                    {CAIDS.map((aid) => (
                        <li key={aid.id} className={styles._item_list}>
                            <div className={styles._container_card}>
                                <span className={styles._container_image}>
                                    <img
                                        alt={aid.title}
                                        className={styles._image}
                                        src={aid.image}
                                    />
                                </span>

                                <h3 className={styles._title_card}>{aid.title}</h3>
                                <p className={styles._subtitle_card}>{aid.subtitle}</p>
                            </div>
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
        title: 'Entra al mercado rapidamente.',
        subtitle: 'Desarrollo de MVPs - MVPaaS',
        image: '/1.svg',
    },
    {
        id: 1,
        title: 'Escala tu negocio con sistemas a medida.',
        subtitle: 'Outsourcing',
        image: '/2.svg',
    },
    {
        id: 2,
        title: 'Consolidá tu departamento de IT.',
        subtitle: 'Staff Augmentation - Dedicated Teams - CTOaaS.',
        image: '/3.svg',
    },
    {
        id: 3,
        title: 'Comenza tu transformación',
        subtitle: 'Consultoría.',
        image: '/4.svg',
    },
    {
        id: 4,
        title: 'Desarrolla tu web, app o AI.',
        subtitle: 'Boutique Development',
        image: '/5.svg',
    },
];
