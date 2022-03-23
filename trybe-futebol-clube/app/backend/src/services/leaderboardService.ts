import Match from '../database/models/Match';
import {
  createClassificationAll,
  createClassificationHome,
  createClassificationAway,
} from '../utils';

async function getClassificationAll() {
  const rawMatchs = await Match.findAll({ where: { inProgress: false } });

  const matchs = await createClassificationAll(rawMatchs);

  return matchs;
}

async function getClassificationHome() {
  const rawMatchs = await Match.findAll({ where: { inProgress: false } });

  const matchs = await createClassificationHome(rawMatchs);

  return matchs;
}

async function getClassificationAway() {
  const rawMatchs = await Match.findAll({ where: { inProgress: false } });

  const matchs = await createClassificationAway(rawMatchs);

  return matchs;
}

export {
  getClassificationAll,
  getClassificationHome,
  getClassificationAway,
};
