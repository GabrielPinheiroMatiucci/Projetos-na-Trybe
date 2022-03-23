const mockMatchsAll = [
  {
    awayClub: {
      clubName: "Grêmio",
    },
    awayTeam: 8,
    awayTeamGoals: 1,
    homeClub: {
      clubName: "São Paulo",
    },
    homeTeam: 16,
    homeTeamGoals: 1,
    id: 1,
    inProgress: false,
  },
  {
    awayClub: {
      clubName: "Santos",
    },
    awayTeam: 14,
    awayTeamGoals: 1,
    homeClub: {
      clubName: "Internacional",
    },
    homeTeam: 9,
    homeTeamGoals: 1,
    id: 2,
    inProgress: false,
  },
  {
    awayClub: {
      clubName: "Napoli-SC",
    },
    awayTeam: 11,
    awayTeamGoals: 0,
    homeClub: {
      clubName: "Corinthians",
    },
    homeTeam: 4,
    homeTeamGoals: 3,
    id: 3,
    inProgress: false,
  },
  {
    awayClub: {
      clubName: "Bahia",
    },
    awayTeam: 2,
    awayTeamGoals: 0,
    homeClub: {
      clubName: "Botafogo",
    },
    homeTeam: 3,
    homeTeamGoals: 0,
    id: 4,
    inProgress: false,
  },
  {
    awayClub: {
      clubName: "Minas Brasília",
    },
    awayTeam: 10,
    awayTeamGoals: 1,
    homeClub: {
      clubName: "Flamengo",
    },
    homeTeam: 7,
    homeTeamGoals: 1,
    id: 5,
    inProgress: false,
  },
  {
    awayClub: {
      clubName: "Real Brasília",
    },
    awayTeam: 13,
    awayTeamGoals: 1,
    homeClub: {
      clubName: "Cruzeiro",
    },
    homeTeam: 5,
    homeTeamGoals: 1,
    id: 6,
    inProgress: false,
  },
  {
    awayClub: {
      clubName: "Ferroviária",
    },
    awayTeam: 6,
    awayTeamGoals: 2,
    homeClub: {
      clubName: "Palmeiras",
    },
    homeTeam: 12,
    homeTeamGoals: 2,
    id: 7,
    inProgress: false,
  },
  {
    awayClub: {
      clubName: "Avaí/Kindermann",
    },
    awayTeam: 1,
    awayTeamGoals: 1,
    homeClub: {
      clubName: "São José-SP",
    },
    homeTeam: 15,
    homeTeamGoals: 0,
    id: 8,
    inProgress: false,
  },
  {
    awayClub: {
      clubName: "Palmeiras",
    },
    awayTeam: 12,
    awayTeamGoals: 3,
    homeClub: {
      clubName: "Avaí/Kindermann",
    },
    homeTeam: 1,
    homeTeamGoals: 0,
    id: 9,
    inProgress: false,
  },
  {
    awayClub: {
      clubName: "Internacional",
    },
    awayTeam: 9,
    awayTeamGoals: 2,
    homeClub: {
      clubName: "Bahia",
    },
    homeTeam: 2,
    homeTeamGoals: 0,
    id: 10,
    inProgress: false,
  },
  {
    awayClub: {
      clubName: "Botafogo",
    },
    awayTeam: 3,
    awayTeamGoals: 0,
    homeClub: {
      clubName: "Real Brasília",
    },
    homeTeam: 13,
    homeTeamGoals: 1,
    id: 11,
    inProgress: false,
  },
  {
    awayClub: {
      clubName: "Corinthians",
    },
    awayTeam: 4,
    awayTeamGoals: 1,
    homeClub: {
      clubName: "Ferroviária",
    },
    homeTeam: 6,
    homeTeamGoals: 0,
    id: 12,
    inProgress: false,
  },
  {
    awayClub: {
      clubName: "Cruzeiro",
    },
    awayTeam: 5,
    awayTeamGoals: 1,
    homeClub: {
      clubName: "Grêmio",
    },
    homeTeam: 8,
    homeTeamGoals: 2,
    id: 13,
    inProgress: false,
  },
  {
    awayClub: {
      clubName: "São Paulo",
    },
    awayTeam: 16,
    awayTeamGoals: 1,
    homeClub: {
      clubName: "Santos",
    },
    homeTeam: 14,
    homeTeamGoals: 2,
    id: 14,
    inProgress: false,
  },
  {
    awayClub: {
      clubName: "São José-SP",
    },
    awayTeam: 15,
    awayTeamGoals: 1,
    homeClub: {
      clubName: "Minas Brasília",
    },
    homeTeam: 10,
    homeTeamGoals: 0,
    id: 15,
    inProgress: false,
  },
  {
    awayClub: {
      clubName: "Flamengo",
    },
    awayTeam: 7,
    awayTeamGoals: 0,
    homeClub: {
      clubName: "Napoli-SC",
    },
    homeTeam: 11,
    homeTeamGoals: 0,
    id: 16,
    inProgress: false,
  },
  {
    awayClub: {
      clubName: "Grêmio",
    },
    awayTeam: 8,
    awayTeamGoals: 3,
    homeClub: {
      clubName: "Avaí/Kindermann",
    },
    homeTeam: 1,
    homeTeamGoals: 2,
    id: 17,
    inProgress: false,
  },
  {
    awayClub: {
      clubName: "Cruzeiro",
    },
    awayTeam: 5,
    awayTeamGoals: 2,
    homeClub: {
      clubName: "Palmeiras",
    },
    homeTeam: 12,
    homeTeamGoals: 4,
    id: 18,
    inProgress: false,
  },
  {
    awayClub: {
      clubName: "Bahia",
    },
    awayTeam: 2,
    awayTeamGoals: 2,
    homeClub: {
      clubName: "Napoli-SC",
    },
    homeTeam: 11,
    homeTeamGoals: 2,
    id: 19,
    inProgress: false,
  },
  {
    awayClub: {
      clubName: "Internacional",
    },
    awayTeam: 9,
    awayTeamGoals: 1,
    homeClub: {
      clubName: "Flamengo",
    },
    homeTeam: 7,
    homeTeamGoals: 0,
    id: 20,
    inProgress: false,
  },
  {
    awayClub: {
      clubName: "Real Brasília",
    },
    awayTeam: 13,
    awayTeamGoals: 1,
    homeClub: {
      clubName: "Ferroviária",
    },
    homeTeam: 6,
    homeTeamGoals: 3,
    id: 21,
    inProgress: false,
  },
  {
    awayClub: {
      clubName: "Botafogo",
    },
    awayTeam: 3,
    awayTeamGoals: 1,
    homeClub: {
      clubName: "Corinthians",
    },
    homeTeam: 4,
    homeTeamGoals: 3,
    id: 22,
    inProgress: false,
  },
  {
    awayClub: {
      clubName: "São Paulo",
    },
    awayTeam: 16,
    awayTeamGoals: 3,
    homeClub: {
      clubName: "São José-SP",
    },
    homeTeam: 15,
    homeTeamGoals: 2,
    id: 23,
    inProgress: false,
  },
  {
    awayClub: {
      clubName: "Santos",
    },
    awayTeam: 14,
    awayTeamGoals: 2,
    homeClub: {
      clubName: "Minas Brasília",
    },
    homeTeam: 10,
    homeTeamGoals: 2,
    id: 24,
    inProgress: false,
  },
  {
    awayClub: {
      clubName: "Ferroviária",
    },
    awayTeam: 6,
    awayTeamGoals: 1,
    homeClub: {
      clubName: "Bahia",
    },
    homeTeam: 2,
    homeTeamGoals: 0,
    id: 25,
    inProgress: false,
  },
  {
    awayClub: {
      clubName: "Avaí/Kindermann",
    },
    awayTeam: 1,
    awayTeamGoals: 0,
    homeClub: {
      clubName: "Real Brasília",
    },
    homeTeam: 13,
    homeTeamGoals: 1,
    id: 26,
    inProgress: false,
  },
  {
    awayClub: {
      clubName: "São José-SP",
    },
    awayTeam: 15,
    awayTeamGoals: 2,
    homeClub: {
      clubName: "Cruzeiro",
    },
    homeTeam: 5,
    homeTeamGoals: 1,
    id: 27,
    inProgress: false,
  },
  {
    awayClub: {
      clubName: "Flamengo",
    },
    awayTeam: 7,
    awayTeamGoals: 0,
    homeClub: {
      clubName: "São Paulo",
    },
    homeTeam: 16,
    homeTeamGoals: 3,
    id: 28,
    inProgress: false,
  },
  {
    awayClub: {
      clubName: "Corinthians",
    },
    awayTeam: 4,
    awayTeamGoals: 4,
    homeClub: {
      clubName: "Internacional",
    },
    homeTeam: 9,
    homeTeamGoals: 0,
    id: 29,
    inProgress: false,
  },
  {
    awayClub: {
      clubName: "Palmeiras",
    },
    awayTeam: 12,
    awayTeamGoals: 4,
    homeClub: {
      clubName: "Botafogo",
    },
    homeTeam: 3,
    homeTeamGoals: 0,
    id: 30,
    inProgress: false,
  },
  {
    awayClub: {
      clubName: "Minas Brasília",
    },
    awayTeam: 10,
    awayTeamGoals: 0,
    homeClub: {
      clubName: "Grêmio",
    },
    homeTeam: 8,
    homeTeamGoals: 2,
    id: 31,
    inProgress: false,
  },
  {
    awayClub: {
      clubName: "Napoli-SC",
    },
    awayTeam: 11,
    awayTeamGoals: 1,
    homeClub: {
      clubName: "Santos",
    },
    homeTeam: 14,
    homeTeamGoals: 5,
    id: 32,
    inProgress: false,
  },
  {
    awayClub: {
      clubName: "São Paulo",
    },
    awayTeam: 16,
    awayTeamGoals: 1,
    homeClub: {
      clubName: "Avaí/Kindermann",
    },
    homeTeam: 1,
    homeTeamGoals: 1,
    id: 33,
    inProgress: false,
  },
  {
    awayClub: {
      clubName: "Ferroviária",
    },
    awayTeam: 6,
    awayTeamGoals: 1,
    homeClub: {
      clubName: "Internacional",
    },
    homeTeam: 9,
    homeTeamGoals: 3,
    id: 34,
    inProgress: false,
  },
  {
    awayClub: {
      clubName: "Cruzeiro",
    },
    awayTeam: 5,
    awayTeamGoals: 3,
    homeClub: {
      clubName: "Minas Brasília",
    },
    homeTeam: 10,
    homeTeamGoals: 1,
    id: 35,
    inProgress: false,
  },
  {
    awayClub: {
      clubName: "Flamengo",
    },
    awayTeam: 7,
    awayTeamGoals: 1,
    homeClub: {
      clubName: "Bahia",
    },
    homeTeam: 2,
    homeTeamGoals: 0,
    id: 36,
    inProgress: false,
  },
  {
    awayClub: {
      clubName: "Real Brasília",
    },
    awayTeam: 13,
    awayTeamGoals: 1,
    homeClub: {
      clubName: "São José-SP",
    },
    homeTeam: 15,
    homeTeamGoals: 0,
    id: 37,
    inProgress: false,
  },
  {
    awayClub: {
      clubName: "Corinthians",
    },
    awayTeam: 4,
    awayTeamGoals: 1,
    homeClub: {
      clubName: "Santos",
    },
    homeTeam: 14,
    homeTeamGoals: 2,
    id: 38,
    inProgress: false,
  },
  {
    awayClub: {
      clubName: "Napoli-SC",
    },
    awayTeam: 11,
    awayTeamGoals: 0,
    homeClub: {
      clubName: "Botafogo",
    },
    homeTeam: 3,
    homeTeamGoals: 2,
    id: 39,
    inProgress: false,
  },
  {
    awayClub: {
      clubName: "Grêmio",
    },
    awayTeam: 8,
    awayTeamGoals: 1,
    homeClub: {
      clubName: "Palmeiras",
    },
    homeTeam: 12,
    homeTeamGoals: 4,
    id: 40,
    inProgress: false,
  },
  {
    awayClub: {
      clubName: "Internacional",
    },
    awayTeam: 9,
    awayTeamGoals: 0,
    homeClub: {
      clubName: "São Paulo",
    },
    homeTeam: 16,
    homeTeamGoals: 2,
    id: 41,
    inProgress: true,
  },
  {
    awayClub: {
      clubName: "Avaí/Kindermann",
    },
    awayTeam: 1,
    awayTeamGoals: 0,
    homeClub: {
      clubName: "Ferroviária",
    },
    homeTeam: 6,
    homeTeamGoals: 1,
    id: 42,
    inProgress: true,
  },
  {
    awayClub: {
      clubName: "Minas Brasília",
    },
    awayTeam: 10,
    awayTeamGoals: 0,
    homeClub: {
      clubName: "Napoli-SC",
    },
    homeTeam: 11,
    homeTeamGoals: 0,
    id: 43,
    inProgress: true,
  },
  {
    awayClub: {
      clubName: "São José-SP",
    },
    awayTeam: 15,
    awayTeamGoals: 2,
    homeClub: {
      clubName: "Flamengo",
    },
    homeTeam: 7,
    homeTeamGoals: 2,
    id: 44,
    inProgress: true,
  },
  {
    awayClub: {
      clubName: "Botafogo",
    },
    awayTeam: 3,
    awayTeamGoals: 1,
    homeClub: {
      clubName: "Cruzeiro",
    },
    homeTeam: 5,
    homeTeamGoals: 1,
    id: 45,
    inProgress: true,
  },
  {
    awayClub: {
      clubName: "Palmeiras",
    },
    awayTeam: 12,
    awayTeamGoals: 1,
    homeClub: {
      clubName: "Corinthians",
    },
    homeTeam: 4,
    homeTeamGoals: 1,
    id: 46,
    inProgress: true,
  },
  {
    awayClub: {
      clubName: "Santos",
    },
    awayTeam: 14,
    awayTeamGoals: 2,
    homeClub: {
      clubName: "Grêmio",
    },
    homeTeam: 8,
    homeTeamGoals: 1,
    id: 47,
    inProgress: true,
  },
  {
    awayClub: {
      clubName: "Bahia",
    },
    awayTeam: 2,
    awayTeamGoals: 1,
    homeClub: {
      clubName: "Real Brasília",
    },
    homeTeam: 13,
    homeTeamGoals: 1,
    id: 48,
    inProgress: true,
  }
];

export default mockMatchsAll;
