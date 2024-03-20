/* eslint-disable import/no-default-export */
// pages/api/hello.ts
'use server';

import type { NextApiRequest, NextApiResponse } from 'next';

function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        res.status(200).json({ message: 'Hello World' });
    } else {
        res.status(405).end(); // Método no permitido
    }
}

export default handler;
