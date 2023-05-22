import { TeamCard, TeamCardProps } from './TeamCard';

interface TeamSectionProps extends TeamCardProps {}

export const TeamSection = ({ teams }: TeamSectionProps) => {
  return (
    <section className="team mx-w" id="team" data-internal-link>
      <TeamCard teams={teams} />
    </section>
  );
};
