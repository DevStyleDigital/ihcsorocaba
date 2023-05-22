export type tTeamCardItem = {
  id: string;
  year: string;
  url: string;
};

export type tTeamCardSection = {
  id: string;
  team: 'employees' | 'servicesProviders' | 'executiveBoard';
  name:
    | 'QUADRO DE FUNCIONÁRIOS'
    | 'QUADRO DE PRESTADORES DE SERVIÇOS'
    | 'DIRETORIA EXECUTIVA';
  years: tTeamCardItem[];
};

export type tTeams = tTeamCardSection[];
