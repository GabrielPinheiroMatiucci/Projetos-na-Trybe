import * as bcryptjs from 'bcryptjs';
import { generateResponseController, tokenJWT } from '../utils';
import User from '../database/models/User';

const unauthorized = 'unauthorized';

function validateBody(email: string, password: string) {
  if (email === undefined || password === undefined || email === '' || password === '') {
    return generateResponseController(
      true,
      'All fields must be filled',
      unauthorized,
    );
  }

  return generateResponseController(false, '', '');
}

async function validateData(email: string, password: string) {
  //  https://stackoverflow.com/questions/46380563/get-only-datavalues-from-sequelize-orm
  const user: User | null = await User.findOne({ raw: true, where: { email } });

  if (user === null) {
    return generateResponseController(
      true,
      'Incorrect email or password',
      unauthorized,
    );
  }

  const validPassword = bcryptjs.compareSync(password, user.password);

  if (!validPassword) {
    return generateResponseController(
      true,
      'Incorrect email or password',
      unauthorized,
    );
  }

  return { err: false, data: user, status: 'ok' };
}

async function login(email: string, password: string) {
  const validBody = validateBody(email, password);

  if (validBody.err) return validBody;

  const validData = await validateData(email, password);

  if (validData.err) return validData;

  let payload;

  if (typeof validData.data !== 'string') {
    payload = {
      user: {
        id: validData.data.id,
        username: validData.data.username,
        role: validData.data.role,
        email: validData.data.email,
      },
    };
  }

  const token: string = tokenJWT.generateToken({ ...payload });

  payload = { ...payload, token };

  return { err: false, data: payload, status: 'ok' };
}

async function validateLogin(authorization: string) {
  const result = tokenJWT.decryptToken(authorization);

  if (typeof result === null) {
    return 'Not Found';
  }

  return result;
}

export {
  login,
  validateLogin,
};
