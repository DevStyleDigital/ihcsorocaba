import type { iDocumentWithNumberOfLinks } from 'types/iDocument';
import type { GridRenderCellParams } from '@mui/x-data-grid';

import { useState } from 'react';
import { ButtonTooltip } from '@components/ButtonTooltip';
import { fetcher } from '@services/fetchers';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DocDialog } from '../DocDialog';

interface RowActionsProps {
  params: GridRenderCellParams<any, iDocumentWithNumberOfLinks, any>;
  setGridRows: React.Dispatch<
    React.SetStateAction<iDocumentWithNumberOfLinks[]>
  >;
}

export const RowActions = ({ params, setGridRows }: RowActionsProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <ButtonTooltip
        label="Deletar Linha"
        onClick={() => {
          if (window.confirm('Você deseja mesmo deletar esse arquivo?')) {
            setGridRows((rows) => rows.filter((row) => row.id !== params.id));
            fetcher.delete(`/api/documents/${params.id}`);
          }
        }}
      >
        <DeleteIcon />
      </ButtonTooltip>
      <ButtonTooltip
        label="Editar Linhar"
        onClick={() => setIsDialogOpen(true)}
      >
        <EditIcon />
      </ButtonTooltip>
      <DocDialog
        type="edit"
        open={isDialogOpen}
        setGridRows={setGridRows}
        setOpen={setIsDialogOpen}
        options={params.row}
      />
    </>
  );
};
