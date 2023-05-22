import type { tTeams } from 'types/tTeams';
import type { iDocument } from 'types/iDocument';
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';

import { HeroCarousel } from '@components/Carousel';
import { AboutSection } from '@components/AboutSection';
import { TeamSection } from '@components/TeamSection';
import { KidsBanner } from '@components/KidsBanner';
import { Document } from '@components/Document';
import { fetcher } from '@services/fetchers';

export const getServerSideProps = async ({
  res,
}: GetServerSidePropsContext) => {
  const maxAge = 60 * 5; // 5 minutes
  const staleWhileRevalidate = 60 * 2; // 2 minutes
  res.setHeader(
    'Cache-Control',
    `public, max-age=${maxAge}, stale-while-revalidate=${staleWhileRevalidate}`,
  );

  const documents: iDocument[] = await fetcher.get('/api/documents');
  const teams: tTeams = await fetcher.get('/api/teams');

  return {
    props: {
      documents: documents || [],
      teams: teams || [],
    },
  };
};

const Home = ({
  teams,
  documents,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <HeroCarousel />
      <AboutSection />
      <TeamSection teams={teams} />
      <KidsBanner />

      <section id="transparent-documents" data-internal-link>
        <h2 style={{ textTransform: 'uppercase' }}>Documentos</h2>
        <div className="content">
          {documents.map((document) => (
            <Document key={document.id} document={document} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
