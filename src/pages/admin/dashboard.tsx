import type { GetStaticPropsContext, InferGetServerSidePropsType } from 'next';
import type { iDocument } from 'types/iDocument';
import type { tTeams } from 'types/tTeams';

import { fetcher } from '@services/fetchers';
import { getCookie } from '@services/cookies';
import { useAuthContext } from '@contexts/Auth/useAuthContext';

import { DashboardDocuments } from '@components/Dashboard/Documents';
import { DashboardTeams } from '@components/Dashboard/Teams';

import { DashboardPageCSS } from '@stylesPages/dashboard';

export const getServerSideProps = async (ctx: GetStaticPropsContext) => {
  const userToken = getCookie(ctx, process.env.NEXT_PUBLIC_ADMIN_COOKIE!);

  if (!userToken) {
    return { notFound: true };
  }

  const documents: iDocument[] = await fetcher.get('/api/documents');
  const teams: tTeams = await fetcher.get('/api/teams');

  return { props: { documents: documents || [], teams } };
};

const Dashboard = ({
  documents,
  teams,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { user } = useAuthContext();

  return (
    <DashboardPageCSS>
      <h1>Dashboard</h1>
      <div className="user-info">
        <p>
          Olá,{' '}
          <span
            style={{
              wordBreak: 'break-all',
              color: 'var(--color-primary)',
            }}
          >
            {user?.email}
          </span>
          ! Você está logado como administrador.
        </p>
      </div>

      <DashboardDocuments documents={documents!} />
      <DashboardTeams teams={teams!} />
    </DashboardPageCSS>
  );
};

export default Dashboard;
