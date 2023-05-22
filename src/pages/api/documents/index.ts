import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@services/database';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    if (req.method === 'GET') {
      const data = await db.in('documents').get(undefined);
      return res.status(200).json(data);
    }
    if (req.method === 'POST') {
      const data = await db.in('documents').add(req.body);
      return res.status(200).json(data);
    }

    return res.status(404).json({ message: 'Not found' });
  } catch (e) {
    return res.send({});
  }
}
