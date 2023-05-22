import styled from 'styled-components';

export const DashboardPageCSS = styled.section`
  height: auto;
  min-height: 200vh;
  margin: 0 4rem;
  padding-top: 2rem;

  > h1 {
    font-size: 2rem;
  }
  > .user-info {
    margin: 1rem 0 0;
  }
  > .content {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 30rem;
    margin: 1rem 0 0;

    > button {
      margin: 1rem 0;
      align-self: flex-end;
    }
    > .table {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: ${({ theme }) => theme.mediaQueries.maxTablet}) {
    margin: 0 1rem;
  }
`;
