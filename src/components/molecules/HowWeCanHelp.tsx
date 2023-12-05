import React from 'react';
import Image from 'next/image';

import styles from './styles/how-we-can-help.module.css';

export function HowWeCanHelp() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <div className={styles._container_text}>
                    <h2 className={styles._title_help}>¿Cómo podemos ayudarte?</h2>
                    <p className={styles._subtitle_help}>
                        Ofrecemos soluciones a medida de desarrollo de soluciones tecnológicas,
                        equipos e Infraestructura IT.
                    </p>
                </div>
                <ul className={styles._list_help}>
                    {aids.map((aid, index) => (
                        <li key={index} className={styles._item_list}>
                            <a className={styles._container_card}>
                                <span className={styles._container_image}>
                                    <Image alt={aid.title} height={70} src={aid.image} width={70} />
                                </span>
                                <h3 className={styles._title_card}>{aid.title}</h3>
                                <p className={styles._subtitle_card}>{aid.subtitle}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

const aids = [
    {
        title: 'Entra al mercado rapidamente.',
        subtitle: 'Desarrollo de MVPs - MVPaaS',
        image: '/h_rocket.svg',
    },
    {
        title: 'Desarrolla tu departamento de IT.',
        subtitle: 'Staff Augmentation - Dedicated Teams - CTOaaS.',
        image: '/h_peoples.svg',
    },
    {
        title: 'Escala tu negocio con sistemas a medida.',
        subtitle: 'Outsourcing',
        image: '/h_settings.svg',
    },
    {
        title: 'Desarrolla tu web y app o AI con nosotros.',
        subtitle: 'Boutique Development',
        image: '/h_phone.svg',
    },
];
