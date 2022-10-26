import { NextApiRequest, NextApiResponse } from 'next';
import certificates from '../../src/libs/certificates.json'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(certificates)
}