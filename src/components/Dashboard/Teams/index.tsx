import { tTeams } from 'types/tTeams';
import { DataGrid, type GridRowId } from '@mui/x-data-grid';
import { useState } from 'react';

import { fetcher } from '@services/fetchers';
import { HrCSS } from '@stylesComponents/Hr';
import { DashboardButtonCSS } from '@stylesComponents/DashboardButton';

import { columns } from './utils/columns';
import { TeamDialog } from './TeamDialog';

interface DashboardTeamsProps {
  teams: tTeams;
}

export const DashboardTeams = ({ teams }: DashboardTeamsProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [rowsSelected, setRowsSelected] = useState<GridRowId[]>([]);

  const [rows, setRows] = useState(teams);

  return (
    <div className="content">
      <HrCSS />
      <h2>Equipes</h2>

      <DashboardButtonCSS
        type="button"
        onClick={() => setIsDialogOpen(true)}
        disabled={rows.length === 3}
      >
        Adicionar Equipe +
      </DashboardButtonCSS>

      <div className="table">
        <DataGrid
          rows={rows}
          columns={columns(rowsSelected, setRows)}
          pageSize={9}
          checkboxSelection
          rowsPerPageOptions={[9]}
          onSelectionModelChange={(model) => setRowsSelected(model)}
          disableSelectionOnClick
          onCellEditCommit={(e) =>
            fetcher.put(`/api/teams/${e.id}`, {
              [e.field]: e.value,
            })
          }
        />
      </div>

      <TeamDialog
        type="add"
        open={isDialogOpen}
        setGridRows={setRows}
        setOpen={setIsDialogOpen}
        options={undefined}
      />
    </div>
  );
};
