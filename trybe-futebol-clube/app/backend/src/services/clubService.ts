import Club from '../database/models/Club';

async function selectAll() {
  const clubs = await Club.findAll({ raw: true });

  return clubs;
}

async function selectClub(id: number) {
  const club = await Club.findOne({ raw: true, where: { id } });

  return club;
}

export {
  selectAll,
  selectClub,
};
