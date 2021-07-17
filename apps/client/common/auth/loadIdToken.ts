import { NextApiRequest } from 'next';
import * as jwt from 'jsonwebtoken';

const verifyIdToken = async (token: string) => {
  try {
    return await jwt.verify(token, process.env.TOKEN_SECRET);
  } catch (err) {
    return null;
  }
};

export const loadIdToken = async (req: NextApiRequest): Promise<string | null> => {
  if (!req.cookies.authToken) return null;

  const decoded = await verifyIdToken(req.cookies.authToken);

  if (!decoded) return null;
  return decoded['id'];
};
