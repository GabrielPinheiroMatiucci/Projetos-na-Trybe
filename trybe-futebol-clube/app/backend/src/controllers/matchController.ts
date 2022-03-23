import { Request, Response } from 'express';
import * as express from 'express';
import { matchService } from '../services';
import { statusHTTP } from '../utils';
import authMiddleware from '../middlewares';

const matchController = express.Router();

const textOk = 'ok';

matchController.get('/', async (req: Request, res: Response) => {
  let { inProgress } = req.query;
  let result;

  if (inProgress !== undefined) {
    inProgress = inProgress?.toString();

    result = await matchService.selectOngoing(inProgress);

    if (result.err) {
      return res.status(statusHTTP(result.status)).json({ message: result.data });
    }

    return res.status(statusHTTP(result.status)).json(result.data);
  }

  result = await matchService.selectAll();

  return res.status(statusHTTP(textOk)).json(result);
});

matchController.post('/', authMiddleware, async (req: Request, res: Response) => {
  const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = req.body;

  const result = await matchService.insertMatch(homeTeam, awayTeam, homeTeamGoals, awayTeamGoals);

  if (result && result.err) {
    return res.status(statusHTTP(result.status)).json({ message: result.data });
  }

  return res.status(statusHTTP(result.status)).json(result.data);
});

matchController.patch('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const { homeTeamGoals, awayTeamGoals } = req.body;

  if (homeTeamGoals === undefined || awayTeamGoals === undefined) {
    const result = await matchService.finishMatch(id);

    return res.status(statusHTTP(result.status)).json({ message: result.data });
  }

  const result = await matchService.updateMatch(id, homeTeamGoals, awayTeamGoals);

  return res.status(statusHTTP(result.status)).json({ message: result.data });
});

matchController.patch('/:id/finish', authMiddleware, async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const result = await matchService.finishMatch(id);

  return res.status(statusHTTP(result.status)).json({ message: result.data });
});

export default matchController;
