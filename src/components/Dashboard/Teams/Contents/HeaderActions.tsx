import type { tTeams } from 'types/tTeams';
import type { GridRowId } from '@mui/x-data-grid';

import { ButtonTooltip } from '@components/ButtonTooltip';
import { fetcher } from '@services/fetchers';

import DeleteIcon from '@mui/icons-material/Delete';

interface RowActionsProps {
  selectedIds: GridRowId[];
  setGridRows: React.Dispatch<React.SetStateAction<tTeams>>;
}

export const HeaderActions = ({
  setGridRows,
  selectedIds,
}: RowActionsProps) => {
  return (
    <ButtonTooltip
      label="Deletar Selecionados"
      onClick={() => {
        const rowsIds = new Set(selectedIds);
        if (rowsIds.size > 0) {
          if (
            window.confirm('Você deseja mesmo deletar os items selecionados')
          ) {
            setGridRows((rows) => rows.filter((row) => !rowsIds.has(row.id)));
            rowsIds.forEach((id) => fetcher.delete(`/api/teams/${id}`));
          }
        } else {
          alert('Nenhum item selecionado');
        }
      }}
    >
      <DeleteIcon />
    </ButtonTooltip>
  );
};
