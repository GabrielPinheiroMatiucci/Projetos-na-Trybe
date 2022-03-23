import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import User from '../database/models/User';
import Match from '../database/models/Match';
import { app } from '../app';
import { Response } from 'superagent';
import mockMatchsFalseProgress from './mockMatchsFalseProgress';
import mockMatchsAll from './mockMatchsAll';
import mockMatchsTrueProgress from './mockMatchsTrueProgress';

chai.use(chaiHttp);

const { expect } = chai;

interface IUserResponse extends Response {
  body: { user?: object, token?: string };
}

describe('Seu teste', () => {
  describe('Rota POST /login', () => {
    const mockUser = {
      username: 'User',
      role: 'user',
      email: 'user@user.com',
      password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO',
    };

    describe('Ao fazer o login com os dados corretos', () => {
      beforeEach(async () => {
        sinon.stub(User, 'findOne').resolves(mockUser as User);
      });

      afterEach(() => (User.findOne as sinon.SinonStub).restore());

      it('Deve responder corretamente', async () => {
        const chaiHttpResponse: Response = await chai
          .request(app)
          .post('/login')
          .send({ email: 'user@user.com', password: 'secret_user' });
        
        expect(chaiHttpResponse).to.have.status(200);
        expect(chaiHttpResponse.body).to.have.property('user');
        expect(chaiHttpResponse.body).to.have.property('token');
      });
    });
  });
  describe('Rota GET /login/validate', () => {
    const mockUser = {
      username: 'User',
      role: 'user',
      email: 'user@user.com',
      password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO',
    };

    describe('Ao enviar o token correto', () => {
      beforeEach(async () => {
        sinon.stub(User, 'findOne').resolves(mockUser as User);
      });

      afterEach(() => (User.findOne as sinon.SinonStub).restore());

      it('Deve responder corretamente', async () => {
        const user: IUserResponse = await chai
          .request(app)
          .post('/login')
          .send({ email: 'user@user.com', password: 'secret_user' });
        
        const chaiHttpResponse: Response = await chai
          .request(app)
          .get('/login/validate')
          .set({ authorization: user.body.token }); 

        expect(chaiHttpResponse).to.have.status(200);
        expect(chaiHttpResponse.text).to.be.equal('user');
      });
    });
  });
  describe('Rota GET /leaderboard', () => {
    const mockNapoliStatistics = {
      name: 'Napoli-SC',
      totalPoints: 2,
      totalGames: 5,
      totalVictories: 0,
      totalDraws: 2,
      totalLosses: 3,
      goalsFavor: 3,
      goalsOwn: 12,
      goalsBalance: -9,
      efficiency: 13.33
    };

    describe('Ao fazer requisição', () => {
      beforeEach(async () => {
        sinon.stub(Match, 'findAll').resolves(mockMatchsFalseProgress as Match[]);
      });

      afterEach(() => (Match.findAll as sinon.SinonStub).restore());

      it('Deve responder corretamente', async () => {
        const chaiHttpResponse: Response = await chai
          .request(app)
          .get('/leaderboard');
        
        expect(chaiHttpResponse).to.have.status(200);
        expect(chaiHttpResponse.body).to.be.an('array');
        expect(chaiHttpResponse.body).have.length(16);
        expect(chaiHttpResponse.body[15]).to.be.deep.equal(mockNapoliStatistics);
      });
    });
  });
  describe('Rota GET /leaderboard/home', () => {
    const mockBahiaStatistics = {
      name: 'Bahia',
      totalPoints: 0,
      totalGames: 3,
      totalVictories: 0,
      totalDraws: 0,
      totalLosses: 3,
      goalsFavor: 0,
      goalsOwn: 4,
      goalsBalance: -4,
      efficiency: 0
    };

    describe('Ao fazer requisição', () => {
      beforeEach(async () => {
        sinon.stub(Match, 'findAll').resolves(mockMatchsFalseProgress as Match[]);
      });

      afterEach(() => (Match.findAll as sinon.SinonStub).restore());

      it('Deve responder corretamente', async () => {
        const chaiHttpResponse: Response = await chai
          .request(app)
          .get('/leaderboard/home');        
        
        expect(chaiHttpResponse).to.have.status(200);
        expect(chaiHttpResponse.body).to.be.an('array');
        expect(chaiHttpResponse.body).have.length(16);
        expect(chaiHttpResponse.body[15]).to.be.deep.equal(mockBahiaStatistics);
      });
    });
  });
  describe('Rota GET /leaderboard/away', () => {
    const mockBotafogoStatistics = {
      name: 'Botafogo',
      totalPoints: 0,
      totalGames: 2,
      totalVictories: 0,
      totalDraws: 0,
      totalLosses: 2,
      goalsFavor: 1,
      goalsOwn: 4,
      goalsBalance: -3,
      efficiency: 0
    };

    describe('Ao fazer requisição', () => {
      beforeEach(async () => {
        sinon.stub(Match, 'findAll').resolves(mockMatchsFalseProgress as Match[]);
      });

      afterEach(() => (Match.findAll as sinon.SinonStub).restore());

      it('Deve responder corretamente', async () => {
        const chaiHttpResponse: Response = await chai
          .request(app)
          .get('/leaderboard/away');

        expect(chaiHttpResponse).to.have.status(200);
        expect(chaiHttpResponse.body).to.be.an('array');
        expect(chaiHttpResponse.body).have.length(16);
        expect(chaiHttpResponse.body[14]).to.be.deep.equal(mockBotafogoStatistics);
      });
    });
  });
  describe('Rota GET /matchs', () => {
    describe('Ao fazer requisição', () => {
      const mockLastMatch = {
        awayClub: {
          clubName: 'Bahia'
        },
        awayTeam: 2,
        awayTeamGoals: 1,
        homeClub: {
          clubName: 'Real Brasília'
        },
        homeTeam: 13,
        homeTeamGoals: 1,
        id: 48,
        inProgress: true
      };

      beforeEach(async () => {
        sinon.stub(Match, 'findAll').resolves(mockMatchsAll as unknown as Match[]);
      });

      afterEach(() => (Match.findAll as sinon.SinonStub).restore());

      it('Deve responder corretamente', async () => {
        const chaiHttpResponse: Response = await chai
          .request(app)
          .get('/matchs');
        
        expect(chaiHttpResponse).to.have.status(200);
        expect(chaiHttpResponse.body).to.be.an('array');
        expect(chaiHttpResponse.body).have.length(48);
        expect(chaiHttpResponse.body[47]).to.be.deep.equal(mockLastMatch);
      });
    });
  });
  describe('Rota GET /matchs?inProgress=true', () => {
    describe('Ao fazer requisição', () => {
      const mockLastMatch = {
        id: 48,
        homeTeam: 13,
        homeTeamGoals: 1,
        awayTeam: 2,
        awayTeamGoals: 1,
        inProgress: true,
        homeClub: {
          clubName: 'Real Brasília'
        },
        awayClub: {
          clubName: 'Bahia'
        }
      };

      beforeEach(async () => {
        sinon.stub(Match, 'findAll').resolves(mockMatchsTrueProgress as unknown as Match[]);
      });

      afterEach(() => (Match.findAll as sinon.SinonStub).restore());

      it('Deve responder corretamente', async () => {
        const chaiHttpResponse: Response = await chai
          .request(app)
          .get('/matchs?inProgress=true');
        
        expect(chaiHttpResponse).to.have.status(200);
        expect(chaiHttpResponse.body).to.be.an('array');
        expect(chaiHttpResponse.body).have.length(8);
        expect(chaiHttpResponse.body[7]).to.be.deep.equal(mockLastMatch);
      });
    });
  });
  /**
   * Exemplo do uso de stubs com tipos
   */

  // let chaiHttpResponse: Response;

  // before(async () => {
  //   sinon
  //     .stub(Example, "findOne")
  //     .resolves({
  //       ...<Seu mock>
  //     } as Example);
  // });

  // after(()=>{
  //   (Example.findOne as sinon.SinonStub).restore();
  // })

  // it('...', async () => {
  //   chaiHttpResponse = await chai
  //      .request(app)
  //      ...

  //   expect(...)
  // });

  /*  it('Seu sub-teste', () => {
    expect(false).to.be.eq(true);
  }); */
});
