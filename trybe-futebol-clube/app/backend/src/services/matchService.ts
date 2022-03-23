import { generateResponseController, validateInsertMatch } from '../utils';
import Club from '../database/models/Club';
import Match from '../database/models/Match';

async function selectAll() {
  const matchs: Match[] = await Match.findAll(
    {
      include: [{
        model: Club,
        as: 'homeClub',
        attributes: ['clubName'],
      },
      {
        model: Club,
        as: 'awayClub',
        attributes: ['clubName'],
      }],
    },
  );

  return matchs;
}

async function selectOngoing(param: string) {
  if (param === 'true' || param === 'false') {
    const inProgress = param === 'true' ? 1 : 0;
    const matchs: Match[] = await Match.findAll({
      where: { inProgress },
      include: [{
        model: Club,
        as: 'homeClub',
        attributes: ['clubName'],
      },
      {
        model: Club,
        as: 'awayClub',
        attributes: ['clubName'],
      }],
    });

    return { err: false, data: matchs, status: 'ok' };
  }
  return generateResponseController(true, 'Invalid parameter', 'badRequest');
}

function formatResponse(result: Match) {
  return {
    id: result.id,
    homeTeam: result.homeTeam,
    awayTeam: result.awayTeam,
    homeTeamGoals: result.homeTeamGoals,
    awayTeamGoals: result.awayTeamGoals,
    inProgress: result.inProgress,
  };
}

async function insertMatch(
  homeTeam: string,
  awayTeam: string,
  homeTeamGoals: string,
  awayTeamGoals: string,
) {
  const isValid = await validateInsertMatch(homeTeam, awayTeam);

  if (typeof isValid === 'string') {
    return generateResponseController(true, isValid, 'unauthorized');
  }

  const result = await Match.create({
    homeTeam: isValid.homeTeam,
    awayTeam: isValid.awayTeam,
    homeTeamGoals,
    awayTeamGoals,
    inProgress: true,
  });

  const data = formatResponse(result);

  return { err: false, data, status: 'created' };
}

async function verifyMatch(id: number) {
  const match = await Match.findOne({ where: { id } });

  if (match === null) {
    return generateResponseController(true, 'Invalid parameter', 'badRequest');
  }

  return generateResponseController(false, 'Ok', 'ok');
}

async function finishMatch(id: number) {
  const isValid = await verifyMatch(id);

  if (isValid.err) return isValid;

  await Match.update({ inProgress: false }, { where: { id } });

  return isValid;
}

async function updateMatch(id: number, homeTeamGoals: string, awayTeamGoals: string) {
  const isValid = await verifyMatch(id);

  if (isValid.err) return isValid;

  await Match.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });

  return isValid;
}

export {
  selectAll,
  selectOngoing,
  insertMatch,
  finishMatch,
  updateMatch,
};
