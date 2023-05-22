import type { tTeamCardItem } from 'types/tTeams';
import { ButtonTooltip } from '@components/ButtonTooltip';
import { TextField } from '@mui/material';

import { DashboardButtonCSS } from '@stylesComponents/DashboardButton';
import DeleteIcon from '@mui/icons-material/Delete';

interface TeamDialogAddLinksProps {
  type: 'add' | 'edit';
  onClickAdd: () => void;
  onClickDelete: (i: number) => void;
  onLinkChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    i: number,
    t: 'year' | 'url',
  ) => void;
  teamYears: tTeamCardItem[];
}

export const TeamDialogAddLinks = ({
  type,
  onClickAdd,
  onClickDelete,
  onLinkChange,
  teamYears,
}: TeamDialogAddLinksProps) => {
  const numberOfPermittedLinks = type === 'add' ? 3 : 4;

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
        <span>Adicionar Ano</span>
        <ButtonTooltip
          label="Adicionar Ano"
          onClick={onClickAdd}
          disabled={teamYears.length >= numberOfPermittedLinks}
        >
          <DashboardButtonCSS aria-hidden tabIndex={-1} type="button">
            +
          </DashboardButtonCSS>
        </ButtonTooltip>
      </div>

      <div>
        {teamYears.map((link, index, links) => {
          const fullFillEditType =
            type === 'edit' && links.length === numberOfPermittedLinks;
          const disableFirst = fullFillEditType && index === 0;

          return (
            <div key={link.id} style={{ display: 'flex' }}>
              <div
                style={{
                  width: '100%',
                  marginBottom: '2rem',
                  opacity: disableFirst ? '0.5' : '1',
                }}
              >
                <TextField
                  placeholder="aaaa"
                  value={link.year}
                  id="year"
                  label={`Titulo do Link ${index + 1}`}
                  type="number"
                  onChange={(e) => onLinkChange(e, index, 'year')}
                  required
                  fullWidth
                  variant="standard"
                  disabled={disableFirst}
                  inputProps={{
                    min: '1900',
                    max: new Date().getFullYear().toString(),
                    step: '1',
                  }}
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
                  disabled={disableFirst}
                  variant="standard"
                />
              </div>
              {(fullFillEditType ? index > 1 : index !== 0) && (
                <ButtonTooltip
                  label="Deletar Link"
                  onClick={() => onClickDelete(index)}
                >
                  <DeleteIcon />
                </ButtonTooltip>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};
