import { Request, Response, NextFunction } from 'express';
import { statusHTTP, tokenJWT } from '../utils';

function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(statusHTTP('unauthorized')).json({ message: 'Token not found' });
  }

  const decoded = tokenJWT.decryptToken(authorization);

  if (decoded === null) {
    return res.status(statusHTTP('unauthorized')).json({ message: 'Invalid Token' });
  }

  next();
}

export default authMiddleware;
