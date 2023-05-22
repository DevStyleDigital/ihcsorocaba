import type { iDocumentWithNumberOfLinks } from '@/types/iDocument';
import type { GridColDef, GridRowId } from '@mui/x-data-grid';
import { actionsColumn } from './actionsColumn';

const sharedColumnsProps: GridColDef = {
  field: '',
  width: 200,
  align: 'center',
  editable: false,
  sortable: false,
  hideable: false,
  headerName: '',
  filterable: false,
  headerAlign: 'center',
  disableColumnMenu: true,
};

export const columns: (
  selectedIds: GridRowId[],
  setGridRows: React.Dispatch<
    React.SetStateAction<iDocumentWithNumberOfLinks[]>
  >,
) => GridColDef[] = (selectedIds, setGridRows) => [
  {
    ...sharedColumnsProps,
    field: 'id',
    headerName: 'ID',
    width: 200,
  },
  {
    ...sharedColumnsProps,
    field: 'type',
    headerName: 'Tipo do Documento',
    width: 400,
  },
  {
    ...sharedColumnsProps,
    field: 'numberOfLinks',
    headerName: 'Numero de links',
  },
  {
    ...sharedColumnsProps,
    ...actionsColumn(selectedIds, setGridRows),
  },
];
