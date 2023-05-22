import type { tTeamCardItem } from 'types/tTeams';
import { fetcher } from '@services/fetchers';

export async function handleUpdateTeam(
  newTeam: {
    years: tTeamCardItem[];
    team: string;
    name: string;
  },
  id: string,
  onDbUpdate: (res: any) => void,
) {
  fetcher
    .put(`/api/teams/${id}`, newTeam)
    .then((res) => onDbUpdate(res))
    .catch((err) => console.error(err));
}
