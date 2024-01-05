'use client';

import React, { useState } from 'react';
import { useCalendlyEventListener, InlineWidget } from 'react-calendly';

import { FormSendMessage } from '../modals';

import styles from './styles/schedule-call.module.css';

export function ScheduleCall() {
    const [isFormOrCalendar, setIsFormOrCalendar] = useState(false);

    const handleFormOrCalendar = () => {
        setIsFormOrCalendar(!isFormOrCalendar);
    };

    useCalendlyEventListener({
        onProfilePageViewed: () => console.log('onProfilePageViewed'),
        onDateAndTimeSelected: () => console.log('onDateAndTimeSelected'),
        onEventTypeViewed: () => console.log('onEventTypeViewed'),
        onEventScheduled: (e) => console.log(e.data.payload),
    });

    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <h2 className={styles._title}>
                    Agenda una meet o envíanos un <br /> mensaje
                </h2>
                <p className={styles._subtitle}>
                    Nos encantán los desafíos, queremos ser un aliado tecnológico de impacto en tu
                    negocio.
                </p>

                <div className={styles._container_profile}>
                    <div className={`${styles._container_header} ${styles._column}`}>
                        <div className={`${styles._circle}`}>
                            <img
                                alt={'fav-icon'}
                                className={styles._img}
                                src={
                                    'https://aicore.com.ar/wp-content/uploads/2021/05/Logo-Favicon-Aicore.png'
                                }
                            />
                        </div>
                        <div className={styles._container_info}>
                            <p className={styles._name_sale}>Ignacio Antón</p>
                            <p className={styles._profession}>Business Developer</p>
                        </div>
                    </div>
                    <p className={`${styles._description} ${styles._column}`}>
                        Hola! Soy Ignacio, ejecutivo de nuevos negocios en AI CORE. Agendá un
                        espacio en mi agenda para conversar sobre tu proyecto y que podamos comenzar
                        a aportarle valor.
                    </p>
                </div>

                <div className={styles._container_calendar}>
                    <div className={styles._container_top_seccion}>
                        <div className={styles._top_section}>
                            <h2 className={styles._top_title}>
                                {isFormOrCalendar ? 'Envíanos un mensaje' : 'Agenda una meet'}
                            </h2>
                            <button
                                className={styles._top_button}
                                type={'button'}
                                onClick={handleFormOrCalendar}
                            >
                                {!isFormOrCalendar ? 'Envíanos un mensaje' : 'Agenda una meet'}
                            </button>
                        </div>
                    </div>
                    <div
                        style={{
                            width: '100%',
                            backgroundColor: '#F5F5F5BB',
                        }}
                    >
                        {isFormOrCalendar ? (
                            <FormSendMessage />
                        ) : (
                            <InlineWidget
                                pageSettings={{
                                    hideEventTypeDetails: false,
                                    hideLandingPageDetails: false,
                                    hideGdprBanner: false,
                                }}
                                styles={{ height: '700px' }}
                                url={
                                    'https://calendly.com/emiliano-caceres/test?hide_event_type_details=1&hide_gdpr_banner=1'
                                }
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
