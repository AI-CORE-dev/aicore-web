/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable import/no-default-export  */
/*vbjo qwrt cecz epez*/
'use server';

import type { NextApiRequest, NextApiResponse } from 'next';

import nodemailer from 'nodemailer';

interface FormData {
    nombre: string;
    cargo: string;
    mail: string;
    celular: string;
    empresa: string;
    tamañoEmpresa: string;
    presupuesto: string;
    urgencia: string;
    contacto: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const {
            nombre,
            cargo,
            mail,
            celular,
            empresa,
            tamañoEmpresa,
            presupuesto,
            urgencia,
            contacto,
        }: FormData = req.body as FormData;

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'caceresmiranda05@gmail.com',
                pass: 'vbjo qwrt cecz epez',
            },
        });

        const mailOptions: nodemailer.SendMailOptions = {
            from: mail,
            to: 'caceresmiranda05@gmail.com',
            subject: 'Nuevo contacto desde el sitio web de Aicore',
            html: `
                <p>Nombre: ${nombre}</p>
                <p>Cargo: ${cargo}</p>
                <p>Correo electrónico: ${mail}</p>
                <p>Celular: ${celular}</p>
                <p>Empresa: ${empresa}</p>
                <p>Tamaño de la empresa: ${tamañoEmpresa}</p>
                <p>Presupuesto: ${presupuesto}</p>
                <p>Urgencia: ${urgencia}</p>
                <p>Contacto: ${contacto}</p>
            `,
        };

        // Enviar el correo electrónico
        transporter.sendMail(
            mailOptions,
            (error: Error | null, info: nodemailer.SentMessageInfo) => {
                if (error) {
                    console.error('Error al enviar el correo electrónico:', error);
                    res.status(500).json({ error: 'Error interno del servidor' });
                } else {
                    console.log('Correo electrónico enviado:', info.response);
                    res.status(200).json({ success: true });
                }
            },
        );
    } else {
        res.status(405).json({ error: 'Método no permitido' });
    }
}

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '1mb',
        },
    },
};

export function onError(error: any, req: NextApiRequest, res: NextApiResponse) {
    console.error('Error al manejar la solicitud:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
}
