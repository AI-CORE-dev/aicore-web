import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            res.status(200).json({ message: 'Formulario enviado con éxito' });
        } catch (error) {
            console.error('Error al procesar el formulario:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    } else {
        res.status(405).json({ error: 'Método no permitido' });
    }
}
