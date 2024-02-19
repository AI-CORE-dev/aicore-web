import React from 'react';

import styles from './styles/recruiment-process.module.css';

export function RecruimentProcess() {
    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <h2 className={styles._title}>Proceso de reclutamiento:</h2>

                <ul className={styles._ul}>
                    {PROCESS.map((process) => (
                        <li key={process.id} className={styles._card}>
                            <div className={styles._card_content}>
                                <img
                                    alt={process.title}
                                    className={styles._img}
                                    src={process.img}
                                />
                                <p className={styles._description}>{process.title}</p>
                            </div>
                            {/* <div className={styles._line} /> */}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

const PROCESS = [
    {
        id: 0,
        title: 'Revisión de tu aplicación',
        img: '/carrers/recruiment_process/1.png',
    },
    {
        id: 1,
        title: 'Llamada con RRHH',
        img: '/carrers/recruiment_process/2.png',
    },
    {
        id: 2,
        title: 'Entrevista técnica con nuestros expertos',
        img: '/carrers/recruiment_process/3.png',
    },
    {
        id: 3,
        title: 'Follow up',
        img: '/carrers/recruiment_process/4.png',
    },
    {
        id: 4,
        title: 'Oferta formar de trabajo',
        img: '/carrers/recruiment_process/5.png',
    },
];
