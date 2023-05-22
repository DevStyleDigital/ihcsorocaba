import type { iDocument } from 'types/iDocument';
import { useRef, useState } from 'react';
import { useLayoutContext } from '@contexts/Layout/useLayoutContext';

import {
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { BREAKPOINTS } from '@globalStyles/theme/shared';

import type { DocDialogProps } from './interfaces/DocDialogProps';

import { DocDialogActions } from './Contents/DocDialogActions';
import { DocDialogAddLinks } from './Contents/DocDialogAddLinks';

import { documentTypes } from './utils/documentTypes';
import { handleAddDoc } from './services/handleAddDoc';
import { handleUpdateDoc } from './services/handleUpdateDoc';

export const DocDialog = <T extends 'add' | 'edit'>({
  type,
  open,
  options,
  setOpen,
  setGridRows,
}: DocDialogProps<T>) => {
  const { currWidth } = useLayoutContext();
  const docTypeInputRef = useRef<HTMLInputElement>(null);

  const [docLinks, setDocLinks] = useState(
    options?.links || [{ id: '0', title: '', url: '' }],
  );

  function resetDocLinks() {
    setDocLinks(options?.links || [{ id: '0', title: '', url: '' }]);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const docValues: {
      links: iDocument['links'];
      type: iDocument['type'];
    } = {
      links: docLinks,
      type: docTypeInputRef.current?.value as iDocument['type'],
    };

    if (type === 'add') {
      await handleAddDoc(docValues, (res) => {
        setGridRows((prevRows) => [
          ...prevRows,
          {
            id: res.id,
            links: res.links,
            numberOfLinks: res.links.length,
            type: res.type,
          },
        ]);
      });
      resetDocLinks();
    }
    if (type === 'edit' && options) {
      if (
        docValues.type === options.type &&
        docValues.links === options.links
      ) {
        return setOpen(false);
      }
      if (window.confirm('Você deseja atualizar esse arquivo?')) {
        await handleUpdateDoc(docValues, options.id, (res) => {
          setGridRows((prevRows) => {
            const newRows = [...prevRows];
            const index = newRows.findIndex((row) => row.id === res.id);
            newRows[index] = {
              id: res.id,
              links: res.links,
              numberOfLinks: res.links.length,
              type: res.type,
            };
            setDocLinks(newRows[index].links);
            return newRows;
          });
        });
      }
    }

    resetDocLinks();
    return setOpen(false);
  }

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      fullScreen={currWidth <= BREAKPOINTS.$MAX_MOBILE}
    >
      <DialogTitle>Adicionar documento:</DialogTitle>
      <form
        onSubmit={handleSubmit}
        style={{
          width: currWidth <= BREAKPOINTS.$MAX_MOBILE ? '100%' : '36rem',
        }}
      >
        <DialogContent>
          <FormControl sx={{ minWidth: '100%' }}>
            <InputLabel id="demo-simple-select-standard-label">
              Tipo do Documento
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              label="Tipo do Documento"
              inputProps={{
                ref: docTypeInputRef,
                defaultValue: options?.type || 'ATAS',
              }}
            >
              {documentTypes.map((documentsType, i) => {
                const key = `${i + Math.random()}`;
                return (
                  <MenuItem key={key} value={documentsType}>
                    {documentsType}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <DocDialogAddLinks
            docLinks={docLinks}
            onLinkChange={(e, index, t) =>
              setDocLinks((prev) => {
                const newLinks = [...prev];
                newLinks[index][t] = e.target.value;
                return newLinks;
              })
            }
            onClickDelete={(index) =>
              setDocLinks((prev) => {
                const newLinks = [...prev];
                newLinks.splice(index, 1);
                return newLinks;
              })
            }
            onClickAdd={() =>
              setDocLinks((prevLinks) => [
                ...prevLinks,
                { id: Date.now().toString(), title: '', url: '' },
              ])
            }
          />
        </DialogContent>
        <DocDialogActions
          type={type}
          onClickCancel={() => {
            if (window.confirm('Você deseja descartar as alterações?')) {
              setOpen(false);
              resetDocLinks();
            }
          }}
        />
      </form>
    </Dialog>
  );
};
