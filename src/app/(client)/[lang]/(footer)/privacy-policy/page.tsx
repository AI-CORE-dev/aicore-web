import React from 'react';

import styles from './page.module.css';

export default function PrivacyPolicy() {
    return (
        <main className={styles._inner}>
            <h1 className={styles._title}>POLÍTICA DE PRIVACIDAD</h1>
            <p
                className={styles._item}
                style={{
                    paddingBottom: '20px',
                }}
            >
                Esta Política de Privacidad describe cómo AI CORE SAS (en adelante AI CORE)
                recopila, utiliza y protege la información personal de los usuarios de este sitio
                web de acuerdo con la Ley de Protección de Datos Personales Ley Nº 25.326 y normas
                complementarias. AI CORE realiza un uso responsable de la información personal y
                protege la privacidad de quienes confían sus datos.
            </p>
            <p
                className={styles._item}
                style={{
                    paddingBottom: '30px',
                }}
            >
                Por favor, lee atentamente estos términos y condiciones antes de utilizar nuestro
                sitio <a href={'https://www.aicore.com.ar'}>www.aicore.com.ar</a> (en adelante sitio
                web):
            </p>

            <ul>
                <li className={styles._item_terms}>
                    <p className={styles._item}>
                        <strong>a). Información que se recopila y su uso: </strong>
                        recopilamos información personal identificable, como nombres, direcciones de
                        correo electrónico y números de teléfono, solo cuando los usuarios nos la
                        proporcionan voluntariamente al completar formularios de contacto y/o
                        suscribirse a nuestro boletín informativo. La información recopilada se
                        utiliza únicamente para los fines para los que fue proporcionada, esto puede
                        incluir responder a consultas de los usuarios, enviar correos electrónicos
                        promocionales o mejorar la experiencia del usuario en el sitio web.
                    </p>
                </li>
                <li className={styles._item_terms}>
                    <p className={styles._item}>
                        <strong>b). Protección de la Información: </strong>
                        AI CORE se compromete a proteger la seguridad de la información personal de
                        sus usuarios.
                    </p>
                </li>
                <li className={styles._item_terms}>
                    <p className={styles._item}>
                        <strong>c). Divulgación de Información a Terceros: </strong>
                        AI CORE no comparte información personal identificable con terceros, excepto
                        cuando sea necesario para cumplir con la Ley, responder a solicitudes
                        legales válidas, proteger nuestros derechos, o cuando el usuario haya dado
                        su consentimiento explícito para hacerlo.
                    </p>
                </li>
                <li className={styles._item_terms}>
                    <p className={styles._item}>
                        <strong>d). Cookies y Tecnologías Similares: </strong>
                        Este sitio web utiliza cookies y tecnologías similares para mejorar la
                        experiencia del usuario y recopilar información no personal, como datos de
                        navegación y preferencias del usuario. Los usuarios pueden configurar sus
                        navegadores para rechazar todas las cookies o para que les avisen cuando se
                        envía una cookie, aunque esto podría afectar la funcionalidad del sitio.
                    </p>
                </li>
                <li className={styles._item_terms}>
                    <p className={styles._item}>
                        <strong>e). Derechos de los Usuarios: </strong>
                        Los usuarios tienen derecho a acceder, rectificar, actualizar y suprimir su
                        información personal, tal como lo establece la Ley de Datos Personales. Para
                        ejercer estos derechos, los usuarios pueden ponerse en contacto con AI CORE
                        a través de la información de contacto proporcionada en este sitio web.
                    </p>
                </li>
                <li className={styles._item_terms}>
                    <p className={styles._item}>
                        <strong>f). Cambios en la Política de Privacidad: </strong>
                        AI CORE se reserva el derecho de actualizar esta Política de Privacidad en
                        cualquier momento para reflejar cambios en sus prácticas de privacidad. Se
                        alienta a los usuarios a revisar periódicamente esta sección para estar al
                        tanto de cualquier cambio. El uso continuado del sitio después de la
                        publicación de cambios constituye la aceptación de estos.
                    </p>
                </li>
                <li className={styles._item_terms}>
                    <p className={styles._item}>
                        <strong>g). Consentimiento: </strong>
                        Al utilizar este sitio web, los usuarios aceptan la recopilación y uso de su
                        información personal de acuerdo con esta Política de Privacidad.
                        Consecuentemente, quien no acepte la Política de Privacidad debe abstenerse
                        de utilizarlo.
                    </p>
                </li>
            </ul>
        </main>
    );
}
