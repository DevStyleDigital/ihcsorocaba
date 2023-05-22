import type { tTeams } from 'types/tTeams';
import Link from 'next/link';

import { TitleRectangleCSS } from '@stylesComponents/TitleRectangle';
import { ContainerCSS } from './styles';

export interface ContentProps {
  teams: tTeams;
}

export const Content = ({ teams }: ContentProps) => {
  return (
    <ContainerCSS>
      {teams.map(({ id, name, years }) => (
        <section key={id}>
          <h2 style={{ textTransform: 'uppercase' }}>{name}</h2>
          {years.map((year) => (
            <div
              key={year.id}
              style={{
                marginBottom: '1rem',
              }}
            >
              <Link href={year.url} passHref>
                <a href="replace" target="_blank">
                  <TitleRectangleCSS isInverted>{year.year}</TitleRectangleCSS>
                </a>
              </Link>
            </div>
          ))}
        </section>
      ))}
    </ContainerCSS>
  );
};
