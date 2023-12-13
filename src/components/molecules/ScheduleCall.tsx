'use client';

import React, { useState } from 'react';

import styles from './styles/schedule-call.module.css';
import './styles/Calendar.css';

export function ScheduleCall() {
    {
        /*const [value, setValue] = useState(new Date());

    const onChange = (nextValue: Date) => {
        setValue(nextValue);
    };*/
    }

    return (
        <section className={styles._section}>
            <div>
                <h2 className={styles._title}>Agenda una meet o envíanos un mensaje</h2>
                <p className={styles._subtitle}>
                    Nos encantán los desafíos, queremos ser un aliado tecnológico de impacto en tu
                    negocio.
                </p>

                <div className={styles['_container-calendar']}>
                    <div className={styles['_box-calendar']}>
                        {/* <Calendar
                            className={styles._calendar}
                locale="es-ES"
                value={value}
                onChange={onChange}
                            tileClassName={styles._tile}
                            //tileContent={({ date, view }) => view === 'month' && date.getDay() === 0 ? <p className={styles['tile-content']}>Cerrado</p> : null}
                        /> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
