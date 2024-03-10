'use client';

import React, { useState } from 'react';

import styles from './styles/form-send-message.module.css';
interface FormData {
    name: string;
    organization: string;
    puesto: string;
    email: string;
    phone: string;
    message: string;
    terms: boolean;
}

export function FormSendMessage() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        organization: '',
        puesto: '',
        email: '',
        phone: '',
        message: '',
        terms: false,
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log('Formulario enviado:', formData);
        e.preventDefault();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        let fieldValue;

        if (type === 'checkbox') {
            fieldValue = (e.target as HTMLInputElement).checked;
        } else {
            fieldValue = value;
        }

        setFormData({
            ...formData,
            [name]: fieldValue,
        });
    };

    const isFormValid = (): boolean => {
        return (
            formData.name.trim() !== '' &&
            formData.organization.trim() !== '' &&
            formData.puesto.trim() !== '' &&
            formData.email.trim() !== '' &&
            formData.phone.trim() !== '' &&
            formData.message.trim() !== '' &&
            formData.terms
        );
    };

    return (
        <div className={styles._inner}>
            <form onSubmit={handleSubmit}>
                <div className={styles._container_input}>
                    <label className={styles._label} htmlFor={'name'}>
                        Nombre Completo
                    </label>
                    <input
                        className={styles._input}
                        id={'name'}
                        name={'name'}
                        type={'text'}
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles._container_input}>
                    <label className={styles._label} htmlFor={'organization'}>
                        Organización
                    </label>
                    <input
                        className={styles._input}
                        id={'organization'}
                        name={'organization'}
                        type={'text'}
                        value={formData.organization}
                        onChange={handleChange}
                    />
                </div>

                <div className={styles._container_input}>
                    <label className={styles._label} htmlFor={'puesto'}>
                        Puesto
                    </label>
                    <input
                        className={styles._input}
                        id={'puesto'}
                        name={'puesto'}
                        type={'text'}
                        value={formData.puesto}
                        onChange={handleChange}
                    />
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
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className={styles._label} htmlFor={'phone'}>
                            Teléfono
                        </label>
                        <input
                            className={styles._input}
                            id={'phone'}
                            name={'phone'}
                            type={'number'}
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className={styles._container_input}>
                    <label className={styles._label} htmlFor={'message'}>
                        Mensaje
                    </label>
                    <textarea
                        className={styles._input}
                        id={'message'}
                        name={'message'}
                        value={formData.message}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange(e)}
                    />
                </div>
                <div className={styles._radio} style={{ display: 'none' }}>
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                    <input
                        checked={formData.terms}
                        id={'terms'}
                        name={'terms'}
                        type={'checkbox'}
                        onChange={handleChange}
                    />
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
                    <button className={styles._button} disabled={!isFormValid()} type={'submit'}>
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
}
