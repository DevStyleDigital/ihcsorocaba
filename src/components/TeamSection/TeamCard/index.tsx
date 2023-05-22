import { Content, ContentProps } from './Content';
import { ContainerCSS } from './styles';

export interface TeamCardProps extends ContentProps {}

export const TeamCard = ({ teams }: TeamCardProps) => {
  return (
    <ContainerCSS>
      <div className="square" />
      <div className="content">
        <h2 style={{ textTransform: 'uppercase' }}>A nossa equipe</h2>
        <Content teams={teams} />
      </div>
    </ContainerCSS>
  );
};
