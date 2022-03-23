import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import {
  loginControler,
  clubController,
  matchController,
  leaderboardController,
} from './controllers';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(cors());
    this.app.use(bodyParser.json());
  }

  private routes() {
    this.app.use('/login', loginControler);
    this.app.use('/clubs', clubController);
    this.app.use('/matchs', matchController);
    this.app.use('/leaderboard', leaderboardController);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log('Online'));
  }
}

export { App };

export const { app } = new App();
