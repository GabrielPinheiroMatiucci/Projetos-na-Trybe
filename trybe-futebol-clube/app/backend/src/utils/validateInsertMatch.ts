import Club from '../database/models/Club';

const noTeam = 'There is no team with such id!';

async function validateInsertMatch(homeTeam: string, awayTeam: string) {
  if (homeTeam === awayTeam) {
    return 'It is not possible to create a match with two equal teams';
  }

  const clubHome = await Club.findOne({ raw: true, where: { id: Number(homeTeam) } });

  if (clubHome === null) {
    return noTeam;
  }

  const clubAway = await Club.findOne({ raw: true, where: { id: Number(awayTeam) } });

  if (clubAway === null) {
    return noTeam;
  }

  return { homeTeam: clubHome.id, awayTeam: clubAway.id };
}

export default validateInsertMatch;
