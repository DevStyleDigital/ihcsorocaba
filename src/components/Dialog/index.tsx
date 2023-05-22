import { useLayoutContext } from '@contexts/Layout/useLayoutContext';
import {
  Button,
  Dialog as DialogMUI,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { BREAKPOINTS } from '@globalStyles/theme/shared';

export { DialogContentText } from '@mui/material';

interface DialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  title: string;
  children: React.ReactNode;
}

export const Dialog = ({ isOpen, setIsOpen, children, title }: DialogProps) => {
  const { currWidth } = useLayoutContext();

  return (
    <DialogMUI
      open={isOpen}
      onClose={() => setIsOpen(false)}
      fullScreen={currWidth <= BREAKPOINTS.$MAX_MOBILE}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent
        sx={{
          width: currWidth <= BREAKPOINTS.$MAX_MOBILE ? '100%' : '60rem',
          maxWidth: '100%',
          padding: '3rem',
        }}
      >
        {children}
      </DialogContent>
      <DialogActions>
        <Button type="button" onClick={() => setIsOpen(false)}>
          Fechar
        </Button>
      </DialogActions>
    </DialogMUI>
  );
};
