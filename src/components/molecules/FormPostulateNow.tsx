'use client';

import { useState } from 'react';

import styles from './styles/form-postulate-now.module.css';

interface FormState {
    file: File | null;
}

export function FormPostulateNow() {
    const [state, setState] = useState<FormState>({ file: null });

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setState({ file: e.target.files[0] });
        }
    };

    return (
        <section className={styles._section}>
            <div className={styles._inner}>
                <p className={styles._title}>
                    Siempre estamos buscando grandes talentos y personas ambiciosas.
                </p>
                <div className={styles._container_texts}>
                    <p className={styles._subtitle}>Contacto</p>
                    <a
                        className={`${styles._subtitle} ${styles._link}`}
                        href={'mailto:contacto@aicore.com'}
                    >
                        contacto@aicore.com
                    </a>
                </div>
                <p className={styles._text}>
                    Siempre buscamos conectarnos con personas que quieran hacer el mejor trabajo de
                    sus vidas con marcas interesantes. Si está interesado en trabajar con nosotros o
                    en obtener más información, envíenos una nota, un enlace al portafolio o un
                    currículum.
                </p>
                <form action={''}>
                    <div>
                        <div className={styles._container_input}>
                            <label className={styles._label} htmlFor={'name'}>
                                Nombre Completo
                            </label>
                            <input
                                className={styles._input}
                                id={'name'}
                                name={'name'}
                                type={'text'}
                            />
                        </div>

                        <div className={styles._container_input}>
                            <label className={styles._label} htmlFor={'email'}>
                                Correo Electrónico
                            </label>
                            <input
                                className={styles._input}
                                id={'email'}
                                name={'email'}
                                type={'email'}
                            />
                        </div>

                        <div className={styles._container_input}>
                            <label className={styles._label} htmlFor={'position'}>
                                Posicion
                            </label>
                            <select className={styles._select} id={'position'} name={'position'}>
                                <option value={'1'}>Frontend</option>
                                <option value={'2'}>Backend</option>
                                <option value={'3'}>Fullstack</option>
                            </select>
                        </div>

                        <div className={styles._container_input}>
                            <label className={styles._label} htmlFor={'message'}>
                                Mensaje
                            </label>
                            <textarea
                                className={styles._textarea}
                                cols={10}
                                id={'message'}
                                name={'message'}
                                rows={10}
                            />
                        </div>
                        <div className={styles._drag_drop}>
                            <p className={styles._field_drag}>Subir archivo</p>
                            <input
                                accept={'.txt'}
                                id={'file'}
                                style={{ display: 'none' }}
                                type={'file'}
                                onChange={handleFileChange}
                            />
                            <p>Subir archivo</p>
                        </div>
                    </div>
                    <button className={styles._btn} type={'submit'}>
                        Aplicar Ahora
                    </button>
                </form>
            </div>
        </section>
    );
}
