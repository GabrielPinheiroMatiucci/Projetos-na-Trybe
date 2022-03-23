import { Request, Response } from 'express';
import * as express from 'express';
import { leaderboardService } from '../services';
import { statusHTTP } from '../utils';

const leaderboardController = express.Router();

leaderboardController.get('/home', async (_req: Request, res: Response) => {
  const result = await leaderboardService.getClassificationHome();

  return res.status(statusHTTP('ok')).json(result);
});

leaderboardController.get('/away', async (_req: Request, res: Response) => {
  const result = await leaderboardService.getClassificationAway();

  return res.status(statusHTTP('ok')).json(result);
});

leaderboardController.get('/', async (_req: Request, res: Response) => {
  const result = await leaderboardService.getClassificationAll();

  return res.status(statusHTTP('ok')).json(result);
});

export default leaderboardController;
