import { Button, DialogActions } from '@mui/material';

interface DocDialogActionsProps {
  type: 'add' | 'edit';
  onClickCancel: () => void;
}

export const DocDialogActions = ({
  type,
  onClickCancel,
}: DocDialogActionsProps) => {
  return (
    <DialogActions>
      <Button type="button" onClick={onClickCancel}>
        Cancelar
      </Button>
      {type === 'add' && <Button type="submit">Adicionar</Button>}
      {type === 'edit' && <Button type="submit">Atualizar</Button>}
    </DialogActions>
  );
};
