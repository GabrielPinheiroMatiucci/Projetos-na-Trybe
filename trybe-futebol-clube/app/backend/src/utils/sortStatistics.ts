import { IStatistics } from './interfaces';

//  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function sortStatistics(response: IStatistics[]) {
  response.sort((sA, sB) => {
    if (sB.totalPoints > sA.totalPoints) return 1;
    if (sA.totalPoints > sB.totalPoints) return -1;

    if (sB.totalVictories > sA.totalVictories) return 1;
    if (sA.totalVictories > sB.totalVictories) return -1;

    if (sB.goalsBalance > sA.goalsBalance) return 1;
    if (sA.goalsBalance > sB.goalsBalance) return -1;

    if (sB.goalsFavor > sA.goalsFavor) return 1;
    if (sA.goalsFavor > sB.goalsFavor) return -1;

    if (sB.goalsOwn < sA.goalsOwn) return 1;
    if (sA.goalsOwn < sB.goalsOwn) return -1;

    return 0;
  });

  return response;
}

export default sortStatistics;
