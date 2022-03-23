import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';

const secret = fs.readFileSync('./jwt.evaluation.key', 'utf8');

function generateToken(payload: object) {
  return jwt.sign({ ...payload }, secret);
}

interface IUserJWT extends jwt.JwtPayload {
  user?: { id: number, username: string, role: string, email: string };
}

type IDecoded = IUserJWT | string;

function decryptToken(authorization: string) {
  try {
    const decoded: IDecoded = jwt.verify(authorization, secret);

    let role = '';

    if (typeof decoded !== 'string' && decoded.user?.role) {
      role = decoded.user?.role;
    }

    return role;
  } catch (e) {
    return null;
  }
}

export {
  generateToken,
  decryptToken,
};
