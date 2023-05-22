import type { iDocument, iDocumentWithNumberOfLinks } from 'types/iDocument';
import { DataGrid, type GridRowId } from '@mui/x-data-grid';
import { useState } from 'react';

import { fetcher } from '@services/fetchers';
import { DashboardButtonCSS } from '@stylesComponents/DashboardButton';

import { columns } from './utils/columns';
import { DocDialog } from './DocDialog';

interface DashboardDocumentsProps {
  documents: iDocument[];
}

export const DashboardDocuments = ({ documents }: DashboardDocumentsProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [rowsSelected, setRowsSelected] = useState<GridRowId[]>([]);

  const [rows, setRows] = useState<iDocumentWithNumberOfLinks[]>(
    documents.map(({ id, links, type }) => ({
      id,
      type,
      links,
      numberOfLinks: links.length,
    })),
  );

  return (
    <div className="content">
      <h2>Documentos</h2>

      <DashboardButtonCSS
        type="button"
        onClick={() => setIsDialogOpen(true)}
        disabled={rows.length === 9}
      >
        Adicionar Documento +
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
            fetcher.put(`/api/documents/${e.id}`, {
              [e.field]: e.value,
            })
          }
        />
      </div>

      <DocDialog
        type="add"
        open={isDialogOpen}
        setGridRows={setRows}
        setOpen={setIsDialogOpen}
        options={undefined}
      />
    </div>
  );
};
