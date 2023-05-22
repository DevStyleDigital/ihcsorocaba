import { tTeams } from 'types/tTeams';

export const teamTypes: {
  team: tTeams[0]['team'];
  name: tTeams[0]['name'];
}[] = [
  { name: 'QUADRO DE FUNCIONÁRIOS', team: 'employees' },
  { name: 'QUADRO DE PRESTADORES DE SERVIÇOS', team: 'servicesProviders' },
  { name: 'DIRETORIA EXECUTIVA', team: 'executiveBoard' },
];
