import type { tTeamCardSection } from 'types/tTeams';
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

import type { TeamDialogProps } from './interfaces/TeamDialogProps';

import { TeamDialogAddLinks } from './Contents/TeamDialogAddLinks';
import { TeamDialogActions } from './Contents/TeamDialogActions';

import { teamTypes } from './utils/teamTypes';
import { handleAddTeam } from './services/handleAddTeam';
import { handleUpdateTeam } from './services/handleUpdateTeam';

type TeamTypeInputRefProps = {
  node: { offsetParent: { textContent: string } };
};

export const TeamDialog = <T extends 'add' | 'edit'>({
  type,
  open,
  options,
  setOpen,
  setGridRows,
}: TeamDialogProps<T>) => {
  const { currWidth } = useLayoutContext();
  const teamTypeInputRef = useRef<HTMLInputElement & TeamTypeInputRefProps>(
    null,
  );

  const [teamYears, setTeamYears] = useState(
    options?.years || [
      { id: '0', year: new Date().getFullYear().toString(), url: '' },
    ],
  );

  function resetTeamYears() {
    setTeamYears(
      options?.years || [
        { id: '0', year: new Date().getFullYear().toString(), url: '' },
      ],
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newYears = [...teamYears];

    if (teamYears.length >= 4) {
      newYears.shift();
    }
    const teamValues = {
      years: newYears,
      team: teamTypeInputRef.current?.value as tTeamCardSection['team'],
      name: teamTypeInputRef.current?.node.offsetParent.textContent.split(
        'Tipo de Equipe',
      )[0] as tTeamCardSection['name'],
    };

    if (type === 'add') {
      await handleAddTeam(teamValues, (res) => {
        setGridRows((prevRows) => [
          ...prevRows,
          {
            id: res.id,
            name: res.name,
            team: res.team,
            years: res.years,
          },
        ]);
      });
      resetTeamYears();
    }
    if (type === 'edit' && options) {
      if (
        teamValues.team === options.team &&
        teamValues.years === options.years &&
        teamValues.name === options.name
      ) {
        return setOpen(false);
      }
      if (window.confirm('Você deseja atualizar esse arquivo?')) {
        await handleUpdateTeam(teamValues, options.id, (res) => {
          setGridRows((prevRows) => {
            const newRows = [...prevRows];
            const index = newRows.findIndex((row) => row.id === res.id);
            newRows[index] = {
              id: res.id,
              name: res.name,
              team: res.team,
              years: res.years,
            };
            setTeamYears(newRows[index].years);
            return newRows;
          });
        });
      }
    }

    resetTeamYears();
    return setOpen(false);
  }

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      fullScreen={currWidth <= BREAKPOINTS.$MAX_MOBILE}
    >
      <DialogTitle>Adicionar Equipe:</DialogTitle>
      <form
        onSubmit={handleSubmit}
        style={{
          width: currWidth <= BREAKPOINTS.$MAX_MOBILE ? '100%' : '36rem',
        }}
      >
        <DialogContent>
          <FormControl sx={{ minWidth: '100%' }}>
            <InputLabel id="demo-simple-select-standard-label">
              Tipo de Equipe
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              label="Tipo de Equipe"
              defaultValue={options?.team || 'employees'}
              inputRef={teamTypeInputRef}
            >
              {teamTypes.map((documentsType) => (
                <MenuItem key={documentsType.team} value={documentsType.team}>
                  {documentsType.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TeamDialogAddLinks
            teamYears={teamYears}
            type={type}
            onClickAdd={() =>
              setTeamYears((prevLinks) => [
                ...prevLinks,
                {
                  id: Date.now().toString(),
                  year: new Date().getFullYear().toString(),
                  url: '',
                },
              ])
            }
            onLinkChange={(e, index, t) =>
              setTeamYears((prev) => {
                const newLinks = [...prev];
                newLinks[index][t] = e.target.value;
                return newLinks;
              })
            }
            onClickDelete={(index) =>
              setTeamYears((prev) => {
                const newLinks = [...prev];
                newLinks.splice(index, 1);
                return newLinks;
              })
            }
          />
        </DialogContent>
        <TeamDialogActions
          type={type}
          onClickCancel={() => {
            if (window.confirm('Você deseja descartar as alterações?')) {
              setOpen(false);
              resetTeamYears();
            }
          }}
        />
      </form>
    </Dialog>
  );
};
