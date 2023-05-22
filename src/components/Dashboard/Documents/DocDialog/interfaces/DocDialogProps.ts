import { iDocument, iDocumentWithNumberOfLinks } from 'types/iDocument';

export interface DocDialogProps<T> {
  open: boolean;
  type: T;
  options: T extends 'edit' ? iDocument : undefined;
  setOpen: (open: boolean) => void;
  setGridRows: React.Dispatch<
    React.SetStateAction<iDocumentWithNumberOfLinks[]>
  >;
}
