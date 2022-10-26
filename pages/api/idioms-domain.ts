import { NextApiRequest, NextApiResponse } from 'next';
import idioms from '../../src/libs/idiomsDomain.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(idioms);
}
