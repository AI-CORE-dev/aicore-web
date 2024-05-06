/* eslint-disable @typescript-eslint/no-misused-promises */
'use client';

import type { ChangeEvent, FormEvent } from 'react';

import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import styles from './styles/shedulle-landing.module.css';

interface FormData {
    nombre: string;
    cargo: string;
    mail: string;
    celular: string;
    empresa: string;
    //tamañoEmpresa: string;
    //presupuesto: string;
    //urgencia: string;
    contacto: string;
    token?: string;
}

const initialFormData: FormData = {
    nombre: '',
    cargo: '',
    mail: '',
    celular: '',
    empresa: '',
    //tamañoEmpresa: '',
    //presupuesto: '',
    //urgencia: '',
    contacto: '',
    token: '',
};

export function SchedulleCall() {
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [modalMessage, setModalMessage] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [captchaValue, setCaptchaValue] = useState<string | null>(null);
    const [captchaKey, setCaptchaKey] = useState(0);

    const handleCaptchaChange = (value: string | null) => {
        setCaptchaValue(value);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsSubmitting(true);

        if (!captchaValue) {
            setModalMessage('Por favor, completa el captcha.');
            setIsModalVisible(true);
            setIsSubmitting(false);

            return;
        }

        try {
            const response = await fetch('/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setModalMessage('¡Formulario enviado con éxito!');
                setFormData(initialFormData);
            } else {
                setModalMessage('Error al enviar el formulario. Por favor, inténtalo de nuevo.');
                //console.error('Error al enviar el formulario123:', response.statusText);
            }
        } catch (error) {
            //console.error('Error al enviar el formularioCATCH:', error);
            setModalMessage('Error al enviar el formulario. Por favor, inténtalo de nuevo.');
        } finally {
            setIsModalVisible(true);
            setIsSubmitting(false);
            setCaptchaValue(null);
            setCaptchaKey((prevKey) => prevKey + 1);
        }
    };

    const onClose = () => {
        setIsModalVisible(false);
    };

    const isFormValid = (): boolean => {
        return (
            formData.nombre.trim() !== '' &&
            formData.cargo.trim() !== '' &&
            formData.mail.trim() !== '' &&
            formData.celular.trim() !== '' &&
            formData.empresa.trim() !== '' &&
            //formData.tamañoEmpresa.trim() !== '' &&
            //formData.presupuesto.trim() !== '' &&
            //formData.urgencia.trim() !== '' &&
            formData.contacto.trim() !== ''
        );
    };

    return (
        <section className={styles._section} id={'schedule'}>
            <form className={styles._form} onSubmit={handleSubmit}>
                <h2 className={styles._title}>Contactanos para coordinar una reunión</h2>
                <div className={styles._inner}>
                    <div className={styles._container_input}>
                        <label className={styles._label} htmlFor={'nombre'}>
                            Nombre y Apellido
                        </label>
                        <input
                            required
                            className={styles._input_text}
                            id={'nombre'}
                            name={'nombre'}
                            type={'text'}
                            value={formData.nombre}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles._row}>
                        <div
                            className={styles._container_input}
                            style={{ width: '100%', marginRight: '20px' }}
                        >
                            <label className={styles._label} htmlFor={'celular'}>
                                Celular
                            </label>
                            <input
                                required
                                className={styles._input_text}
                                id={'celular'}
                                name={'celular'}
                                type={'tel'}
                                value={formData.celular}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={styles._container_input}>
                            <label className={styles._label} htmlFor={'mail'}>
                                Mail
                            </label>
                            <input
                                required
                                className={styles._input_text}
                                id={'mail'}
                                name={'mail'}
                                type={'email'}
                                value={formData.mail}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className={styles._row}>
                        <div
                            className={styles._container_input}
                            style={{ width: '100%', marginRight: '20px' }}
                        >
                            <label className={styles._label} htmlFor={'empresa'}>
                                Empresa
                            </label>
                            <input
                                required
                                className={styles._input_text}
                                id={'empresa'}
                                name={'empresa'}
                                type={'text'}
                                value={formData.empresa}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={styles._container_input}>
                            <label className={styles._label} htmlFor={'cargo'}>
                                Cargo
                            </label>
                            <input
                                required
                                className={styles._input_text}
                                id={'cargo'}
                                name={'cargo'}
                                type={'text'}
                                value={formData.cargo}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    {/* <div className={styles._row}>
                        <div
                            className={styles._container_input}
                            style={{ width: '100%', marginRight: '20px' }}
                        >
                            <label className={styles._label} htmlFor={'tamañoEmpresa'}>
                                Tamaño de la empresa
                            </label>
                            <select
                                required
                                className={styles._select}
                                id={'tamañoEmpresa'}
                                name={'tamañoEmpresa'}
                                value={formData.tamañoEmpresa}
                                onChange={handleChange}
                            >
                                <option value={''}>Selecciona una opción</option>
                                <option value={'1-10'}>1 - 10</option>
                                <option value={'11-50'}>11 - 50</option>
                                <option value={'51-200'}>51 - 200</option>
                                <option value={'201-500'}>201 - 500</option>
                                <option value={'500-1000'}>500 - 1000</option>
                                <option value={'+1000'}>+1000</option>
                            </select>
                        </div>
                        <div className={styles._container_input} style={{ width: '100%' }}>
                            <label className={styles._label} htmlFor={'presupuesto'}>
                                Presupuesto Aproximado
                            </label>
                            <select
                                required
                                className={styles._select}
                                id={'presupuesto'}
                                name={'presupuesto'}
                                value={formData.presupuesto}
                                onChange={handleChange}
                            >
                                <option value={''}>Selecciona una opción</option>
                                <option value={'<10000'}>Menos de U$D 10.000</option>
                                <option value={'10000-25000'}>Entre U$D 10.000 y U$D 25.000</option>
                                <option value={'25000-50000'}>Entre U$D 25.000 y U$D 50.000</option>
                                <option value={'>50000'}>Más de U$D 50.000</option>
                            </select>
                        </div>
                    </div> */}
                    <div className={styles._row}>
                        {/* <div
                            className={styles._container_input}
                            style={{ width: '100%', marginRight: '20px' }}
                        >
                            <label className={styles._label} htmlFor={'urgencia'}>
                                Urgencia
                            </label>
                            <select
                                required
                                className={styles._select}
                                id={'urgencia'}
                                name={'urgencia'}
                                value={formData.urgencia}
                                onChange={handleChange}
                            >
                                <option value={''}>Selecciona una opción</option>
                                <option value={'idea'}>Es solo una idea</option>
                                <option value={'posibilidad'}>
                                    Quiero explorar la posibilidad
                                </option>
                                <option value={'inmediato'}>
                                    Necesito incorporar un sistema a medida de inmediato
                                </option>
                            </select>
                        </div> */}
                        <div className={styles._container_input}>
                            <label className={styles._label} htmlFor={'contacto'}>
                                Prefiere ser contactado por
                            </label>
                            <select
                                required
                                className={styles._select}
                                id={'contacto'}
                                name={'contacto'}
                                value={formData.contacto}
                                onChange={handleChange}
                            >
                                <option value={''}>Selecciona una opción</option>
                                <option value={'whatsapp'}>Whatsapp</option>
                                <option value={'llamada'}>Llamada telefónica</option>
                                <option value={'mail'}>Mail</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles._containerCaptcha}>
                        <ReCAPTCHA
                            key={captchaKey}
                            sitekey={'6Ldoep8pAAAAAIQ_UvjMptVn205wrHf--seLv9L3'}
                            onChange={handleCaptchaChange}
                        />
                    </div>
                    <div className={styles._container_button}>
                        <button
                            className={styles._button}
                            disabled={!isFormValid() || isSubmitting}
                            type={'submit'}
                        >
                            {isSubmitting ? 'Enviando...' : 'Enviar'}
                        </button>
                    </div>
                    <div
                        className={`${styles._modalOverlay} ${isModalVisible && styles._modalOpen}`}
                    >
                        <div className={styles._modalContent}>
                            <button
                                className={styles._closeButton}
                                type={'button'}
                                onClick={onClose}
                            >
                                &times;
                            </button>
                            <p className={styles._modalMessage}>{modalMessage}</p>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
}
