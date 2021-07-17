import { NextApiRequest } from 'next';

export const loadJwtToken = (req: NextApiRequest): string | null => {
  if (!req.cookies.authToken) return null;

  return req.cookies.authToken;
};
