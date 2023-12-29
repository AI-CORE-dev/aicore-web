import React from 'react';

import styles from './styles/form-send-message.module.css';

export function FormSendMessage() {
    return (
        <div className={styles._inner}>
            <form action={''}>
                <div className={styles._container_input}>
                    <label className={styles._label} htmlFor={'name'}>
                        Nombre Completo
                    </label>
                    <input className={styles._input} id={'name'} name={'name'} type={'text'} />
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <div
                        style={{
                            paddingRight: '1rem',
                        }}
                    >
                        <label className={styles._label} htmlFor={'email'}>
                            Email
                        </label>
                        <input
                            className={styles._input}
                            id={'email'}
                            name={'email'}
                            type={'email'}
                        />
                    </div>

                    <div>
                        <label className={styles._label} htmlFor={'phone'}>
                            Teléfono
                        </label>
                        <input className={styles._input} id={'phone'} name={'phone'} type={'tel'} />
                    </div>
                </div>
                <div className={styles._container_input}>
                    <label className={styles._label} htmlFor={'message'}>
                        Mensaje
                    </label>
                    <textarea className={styles._input} id={'message'} name={'message'} />
                </div>
                <div className={styles._radio}>
                    <label className={styles._label} htmlFor={'check'}>
                        Necesitas nuestro DNA?
                    </label>
                    <ul className={styles._ul}>
                        <li
                            style={{
                                marginBottom: '1rem',
                            }}
                        >
                            <input
                                className={styles._input_radio}
                                id={'check'}
                                name={'check'}
                                type={'radio'}
                            />
                            <label className={styles._label} htmlFor={'check'}>
                                Si
                            </label>
                        </li>
                        <li
                            style={{
                                marginBottom: '1rem',
                            }}
                        >
                            <input
                                className={styles._input_radio}
                                id={'check'}
                                name={'check'}
                                type={'radio'}
                            />
                            <label className={styles._label} htmlFor={'check'}>
                                No
                            </label>
                        </li>
                    </ul>
                </div>
                <div
                    style={{
                        marginBottom: '1rem',
                    }}
                >
                    <input id={'terms'} name={'terms'} type={'checkbox'} />
                    <label
                        className={styles._label}
                        htmlFor={'terms'}
                        style={{
                            paddingLeft: '1rem',
                        }}
                    >
                        Acepto los términos y condiciones
                    </label>
                </div>
                <div className={styles._container_button}>
                    <button className={styles._button} type={'submit'}>
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
}
