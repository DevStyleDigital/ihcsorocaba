import { Button, DialogActions } from '@mui/material';

interface TeamDialogActionsProps {
  type: 'add' | 'edit';
  onClickCancel: () => void;
}

export const TeamDialogActions = ({
  type,
  onClickCancel,
}: TeamDialogActionsProps) => {
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
