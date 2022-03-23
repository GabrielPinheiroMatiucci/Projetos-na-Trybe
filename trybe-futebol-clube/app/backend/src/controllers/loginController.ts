import { Request, Response } from 'express';
import * as express from 'express';
import { loginService } from '../services';
import { statusHTTP } from '../utils';

const loginControler = express.Router();

loginControler.post('/', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const result = await loginService.login(email, password);

  if (typeof result.data === 'string' && result.err) {
    return res.status(statusHTTP(result.status)).json({ message: result.data });
  }

  return res.status(200).json(result.data);
});

loginControler.get('/validate', async (req: Request, res: Response) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(statusHTTP('unauthorized')).json({ message: 'Token not found' });
  }

  const result = await loginService.validateLogin(authorization);

  return res.status(statusHTTP('ok')).send(result);
});

export default loginControler;
