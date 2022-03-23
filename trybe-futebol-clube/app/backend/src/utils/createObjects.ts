import Club from '../database/models/Club';
import { IPreResponse } from './interfaces';

function createObjectResponse(club: Club | null, statistic: IPreResponse) {
  return {
    name: club?.clubName,
    totalPoints: statistic.totalPoints,
    totalGames: statistic.totalGames,
    totalVictories: statistic.totalVictories,
    totalDraws: statistic.totalDraws,
    totalLosses: statistic.totalLosses,
    goalsFavor: statistic.goalsFavor,
    goalsOwn: statistic.goalsOwn,
    goalsBalance: statistic.goalsBalance,
    efficiency: statistic.efficiency,
  };
}

function createObjectStatistics(index: number) {
  return {
    id: index + 1,
    totalPoints: 0,
    totalGames: 0,
    totalVictories: 0,
    totalDraws: 0,
    totalLosses: 0,
    goalsFavor: 0,
    goalsOwn: 0,
    goalsBalance: 0,
    efficiency: 0,
  };
}

export {
  createObjectResponse,
  createObjectStatistics,
};
