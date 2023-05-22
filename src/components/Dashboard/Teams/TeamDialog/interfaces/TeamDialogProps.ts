import { tTeamCardSection, tTeams } from 'types/tTeams';

export interface TeamDialogProps<T> {
  open: boolean;
  type: T;
  options: T extends 'edit' ? tTeamCardSection : undefined;
  setOpen: (open: boolean) => void;
  setGridRows: React.Dispatch<React.SetStateAction<tTeams>>;
}
