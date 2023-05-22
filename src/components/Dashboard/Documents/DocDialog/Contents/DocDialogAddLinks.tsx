import type { iDocumentLink } from 'types/iDocument';
import { ButtonTooltip } from '@components/ButtonTooltip';
import { TextField } from '@mui/material';

import { DashboardButtonCSS } from '@stylesComponents/DashboardButton';
import DeleteIcon from '@mui/icons-material/Delete';

interface DocDialogAddLinksProps {
  onClickAdd: () => void;
  onClickDelete: (i: number) => void;
  onLinkChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    i: number,
    t: 'title' | 'url',
  ) => void;
  docLinks: iDocumentLink[];
}

export const DocDialogAddLinks = ({
  onClickAdd,
  onClickDelete,
  onLinkChange,
  docLinks,
}: DocDialogAddLinksProps) => {
  return (
    <>
      <div
        style={{
          margin: '2rem 0 0',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <span>Adicionar Link</span>
        <ButtonTooltip label="Adicionar Link" onClick={onClickAdd}>
          <DashboardButtonCSS aria-hidden tabIndex={-1} type="button">
            +
          </DashboardButtonCSS>
        </ButtonTooltip>
      </div>

      <div>
        {docLinks.map((link, index) => (
          <div key={link.id} style={{ display: 'flex' }}>
            <div style={{ width: '100%', marginBottom: '2rem' }}>
              <TextField
                placeholder="Titulo do Link"
                value={link.title}
                id="title"
                label={`Titulo do Link ${index + 1}`}
                type="text"
                onChange={(e) => onLinkChange(e, index, 'title')}
                required
                fullWidth
                variant="standard"
              />
              <TextField
                placeholder="https://..."
                value={link.url}
                id="link"
                label="Link"
                type="url"
                onChange={(e) => onLinkChange(e, index, 'url')}
                required
                fullWidth
                variant="standard"
              />
            </div>
            {index !== 0 && (
              <ButtonTooltip
                label="Deletar Link"
                onClick={() => onClickDelete(index)}
              >
                <DeleteIcon />
              </ButtonTooltip>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
