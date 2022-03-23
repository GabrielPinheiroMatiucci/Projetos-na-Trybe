import Match from '../database/models/Match';
import Club from '../database/models/Club';
import sortStatistics from './sortStatistics';
import { IClubsMatchs, IPreResponse } from './interfaces';
import { createObjectResponse, createObjectStatistics } from './createObjects';

async function getMatchs(rawMatchs: Match[]) {
  //  https://sequelize.org/v5/manual/models-usage.html
  const clubsLength = await Club.count();

  const matchs = rawMatchs.map((m) => ({
    id: m.id,
    homeTeam: m.homeTeam,
    homeTeamGoals: m.homeTeamGoals,
    awayTeam: m.awayTeam,
    awayTeamGoals: m.awayTeamGoals,
    inProgress: m.inProgress,
  }));

  const clubsMatchsAll = [];

  for (let i = 1; i <= clubsLength; i += 1) {
    const clubsMatchs = matchs.filter((m) => Number(m.homeTeam) === i || Number(m.awayTeam) === i);

    if (clubsMatchs.length > 0) {
      clubsMatchsAll.push(clubsMatchs);
    }
  }
  return clubsMatchsAll;
}

function verifyHome(m: IClubsMatchs, statistics: IPreResponse, index: number) {
  const newStatistics = { ...statistics };

  if (m.homeTeam === (index + 1)) {
    newStatistics.totalGames += 1;
    newStatistics.goalsFavor += m.homeTeamGoals;
    newStatistics.goalsOwn += m.awayTeamGoals;
    if (m.homeTeamGoals > m.awayTeamGoals) {
      newStatistics.totalVictories += 1;
    } else if (m.homeTeamGoals < m.awayTeamGoals) {
      newStatistics.totalLosses += 1;
    } else {
      newStatistics.totalDraws += 1;
    }
  }

  return newStatistics;
}

function verifyAway(m: IClubsMatchs, statistics: IPreResponse, index: number) {
  const newStatistics = { ...statistics };

  if (m.awayTeam === (index + 1)) {
    newStatistics.totalGames += 1;
    newStatistics.goalsFavor += m.awayTeamGoals;
    newStatistics.goalsOwn += m.homeTeamGoals;
    if (m.awayTeamGoals > m.homeTeamGoals) {
      newStatistics.totalVictories += 1;
    } else if (m.awayTeamGoals < m.homeTeamGoals) {
      newStatistics.totalLosses += 1;
    } else {
      newStatistics.totalDraws += 1;
    }
  }

  return newStatistics;
}

function getCalculatedStatistics(statistics: IPreResponse) {
  const newStatistics = { ...statistics };

  const { goalsFavor, goalsOwn, totalVictories, totalDraws, totalGames } = newStatistics;

  const goalsBalance = goalsFavor - goalsOwn;
  const totalPoints = totalVictories * 3 + totalDraws;
  const efficiency = Math.round(((totalPoints / (totalGames * 3)) * 10000)) / 100;

  return { ...newStatistics, goalsBalance, totalPoints, efficiency };
}

function getStatistics(matchs: IClubsMatchs[], index: number) {
  const matchsLength = matchs.length;

  let statistics: IPreResponse = createObjectStatistics(index);

  for (let i = 0; i < matchsLength; i += 1) {
    const m = matchs[i];

    statistics = verifyHome(m, statistics, index);
    statistics = verifyAway(m, statistics, index);
  }

  statistics = getCalculatedStatistics(statistics);
  return { ...statistics };
}

function formatPreResponse(clubsMatchsAll: IClubsMatchs[][]) {
  const preResponse: IPreResponse[] = [];

  clubsMatchsAll.forEach((matchs, index) => {
    const statistics = getStatistics(matchs, index);

    preResponse.push({ ...statistics });
  });

  return preResponse;
}

async function createClassificationAll(rawMatchs: Match[]) {
  const clubsMatchsAll = await getMatchs(rawMatchs);

  const preResponse = formatPreResponse(clubsMatchsAll);

  let response = await Promise.all(preResponse.map(async (statistic) => {
    const club = await Club.findOne({ raw: true, where: { id: statistic.id } });

    return createObjectResponse(club, statistic);
  }));

  response = sortStatistics(response);
  return response;
}

export default createClassificationAll;
