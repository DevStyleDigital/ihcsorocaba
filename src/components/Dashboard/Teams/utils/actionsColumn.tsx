import type { tTeams } from 'types/tTeams';
import type { GridColDef, GridRowId } from '@mui/x-data-grid';

import { RowActions } from '../Contents/RowActions';
import { HeaderActions } from '../Contents/HeaderActions';

export const actionsColumn: (
  selectedIds: GridRowId[],
  setGridRows: React.Dispatch<React.SetStateAction<tTeams>>,
) => GridColDef = (selectedIds, setGridRows) => ({
  field: 'delete',
  width: 100,

  renderHeader: () => (
    <HeaderActions selectedIds={selectedIds} setGridRows={setGridRows} />
  ),
  renderCell: (params) => (
    <RowActions params={params} setGridRows={setGridRows} />
  ),
});
