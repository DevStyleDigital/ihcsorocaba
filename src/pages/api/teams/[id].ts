import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@services/database';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const id = req.query.id as string;

  try {
    if (req.method === 'PUT') {
      const data = await db.in('teams').put(id, req.body);
      return res.status(200).json(data);
    }
    if (req.method === 'GET') {
      const data = await db.in('teams').get(id);
      if (!data) {
        return res.status(404).end();
      }
      return res.status(200).json(data);
    }
    if (req.method === 'DELETE') {
      const data = await db.in('teams').del(id);
      return res.status(200).json(data);
    }

    return res.status(404).json({ message: 'Not found' });
  } catch (e) {
    return res.status(400).end();
  }
}
