const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) {
    return [];
  }
  return ids.map((id) => data.species.find((especie) => especie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const filtro = data.species.find((especie) => especie.name === animal);
  return filtro.residents.every((residente) => residente.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  const empregados = data.employees;
  return empregados.find((obj) => obj.firstName === employeeName || obj.lastName === employeeName);
}

function createEmployee(perInfo, assWith) {
  // seu código aqui
  return {
    ...perInfo,
    ...assWith,
  };
}

function isManager(id) {
  // seu código aqui
  const resultado = data.employees.find((func) => func.managers.includes(id));
  if (resultado === undefined) {
    return false;
  }
  return true;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const empregados = data.employees;
  empregados.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(species) {
  // seu código aqui
  if (species === undefined) {
    const qtd = data.species.map((especie) => especie.residents.length);
    const [leao, tigre, urso, pinguim, lontra, sapos, cobras, elefantes, girafas] = qtd;
    return {
      lions: leao,
      tigers: tigre,
      bears: urso,
      penguins: pinguim,
      otters: lontra,
      frogs: sapos,
      snakes: cobras,
      elephants: elefantes,
      giraffes: girafas,
    };
  }
  return data.species.find((especie) => especie.name === species).residents.length;
}

function calculateEntry(entrants) {
  // seu código
  //  https://masteringjs.io/tutorials/fundamentals/foreach-object
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const qtd = Object.entries(entrants);
  const valores = Object.entries(data.prices);
  let soma = 0;
  qtd.map((atual) => valores.find((valor) => {
    if (valor[0] === atual[0]) {
      soma += atual[1] * valor[1];
    }
    return 0;
  }));
  return soma;
}

function ordenaAnimais(array) {
  return array.sort();
}
function temSexo(animais, sorted, sex) {
  const resposta = animais.map((animal) => {
    const reside = [];
    for (let i = 0; i < animal.residents.length; i += 1) {
      if (animal.residents[i].sex === sex) {
        reside.push(animal.residents[i].name);
      }
    }
    if (sorted) {
      ordenaAnimais(reside);
    }
    return {
      [`${animal.name}`]: reside,
    };
  });
  return resposta;
}

function pegaNomes(animais, sorted) {
  const resposta = animais.map((animal) => {
    const reside = [];
    for (let i = 0; i < animal.residents.length; i += 1) {
      reside.push(animal.residents[i].name);
    }
    if (sorted) {
      ordenaAnimais(reside);
    }
    return {
      [`${animal.name}`]: reside,
    };
  });
  return resposta;
}

function pegaAnimais(atual, teste, sorted, sex) {
  const animais = data.species.filter((especie) => {
    if (atual.location === especie.location) {
      return especie;
    }
    return false;
  });
  if (teste === 2) {
    if (sex) {
      return temSexo(animais, sorted, sex);
    }
    return pegaNomes(animais, sorted);
  }
  return animais.map((resultado) => resultado.name);
}

function criaRegioes(sorted, sex, avalia) {
  if (!avalia) {
    return data.species.reduce((acc, curr) => {
      acc[curr.location] = pegaAnimais(curr, 1);
      return acc;
    }, {});
  }
  return data.species.reduce((acc, curr) => {
    acc[curr.location] = pegaAnimais(curr, 2, sorted, sex);
    return acc;
  }, {});
}

function getAnimalMap(options) {
  // seu código aqui
  if (!options) {
    return criaRegioes(false, false, false);
  }
  if (options.includeNames) {
    return criaRegioes(options.sorted, options.sex, true);
  }
  return criaRegioes(options.sorted, options.sex, false);
}

//  https://masteringjs.io/tutorials/fundamentals/foreach-object
function semParametro() {
  const resultado = {};
  const horas = Object.entries(data.hours);
  for (let i = 0; i < horas.length; i += 1) {
    if (horas[i][1].open === horas[i][1].close) {
      resultado[horas[i][0]] = 'CLOSED';
    } else {
      resultado[horas[i][0]] = `Open from ${horas[i][1].open}am until ${horas[i][1].close - 12}pm`;
    }
  }
  return resultado;
}

function comParametro(dia) {
  const diaEncon = Object.entries(data.hours).find((diaAtual) => diaAtual[0] === dia);
  if (diaEncon[1].close === diaEncon[1].open) {
    diaEncon[1] = 'CLOSED';
    return {
      [diaEncon[0]]: diaEncon[1],
    };
  }
  return {
    [diaEncon[0]]: `Open from ${diaEncon[1].open}am until ${diaEncon[1].close - 12}pm`,
  };
}

function getSchedule(dayName) {
  // seu código aqui
  if (!dayName) {
    return semParametro();
  }
  return comParametro(dayName);
}

//  https://eslint.org/docs/rules/no-confusing-arrow
function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const idAnimal = data.employees.find((empregado) => empregado.id === id).responsibleFor[0];
  const animais = data.species.find((especie) => especie.id === idAnimal).residents;
  const velho = animais.reduce((acc, curr) => (acc.age > curr.age ? acc : curr));
  const { name, sex, age } = velho;
  return [name, sex, age];
}

function increasePrices(percentage) {
  // seu código aqui
  const fator = 1 + percentage / 100;
  data.prices.Adult = parseFloat(((data.prices.Adult + 0.001) * fator).toFixed(2));
  data.prices.Senior = parseFloat(((data.prices.Senior + 0.001) * fator).toFixed(2));
  data.prices.Child = parseFloat(((data.prices.Child + 0.001) * fator).toFixed(2));
  return data.prices;
}

function animaisCoverage(ids) {
  return ids.map((id) => data.species.find((espec) => espec.id === id).name);
}

function semCoverage() {
  return data.employees.reduce((acc, { firstName, lastName, responsibleFor }) => {
    acc[`${firstName} ${lastName}`] = animaisCoverage(responsibleFor);
    return acc;
  }, {});
}

function comCoverage(idOuNome) {
  if (idOuNome.length > 20) {
    const { firstName, lastName, responsibleFor } = data.employees.find((fu) => fu.id === idOuNome);
    return {
      [`${firstName} ${lastName}`]: animaisCoverage(responsibleFor),
    };
  }
  const func = data.employees.find((fu) => fu.firstName === idOuNome || fu.lastName === idOuNome);
  const { firstName, lastName, responsibleFor } = func;
  return {
    [`${firstName} ${lastName}`]: animaisCoverage(responsibleFor),
  };
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
  if (!idOrName) return semCoverage();
  return comCoverage(idOrName);
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
