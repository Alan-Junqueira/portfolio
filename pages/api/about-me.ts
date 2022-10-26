import { NextApiRequest, NextApiResponse } from 'next';
import aboutMe from '../../src/libs/aboutMe.json'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(aboutMe);
}
