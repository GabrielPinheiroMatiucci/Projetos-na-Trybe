import { Request, Response } from 'express';
import * as express from 'express';
import { clubService } from '../services';
import { statusHTTP } from '../utils';

const clubController = express.Router();

clubController.get('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const result = await clubService.selectClub(id);

  if (result === null) {
    return res.status(statusHTTP('notFound')).json({ message: 'Not Found' });
  }

  return res.status(statusHTTP('ok')).json(result);
});

clubController.get('/', async (_req: Request, res: Response) => {
  const result = await clubService.selectAll();

  return res.status(statusHTTP('ok')).json(result);
});

export default clubController;
