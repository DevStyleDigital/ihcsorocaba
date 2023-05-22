import type { tTeamCardItem } from 'types/tTeams';
import { fetcher } from '@services/fetchers';

export async function handleAddTeam(
  newTeam: {
    years: tTeamCardItem[];
    team: string;
    name: string;
  },
  onDbUpdate: (res: any) => void,
) {
  fetcher
    .post('/api/teams', newTeam)
    .then((res) => onDbUpdate(res))
    .catch((err) => console.error(err));
}
