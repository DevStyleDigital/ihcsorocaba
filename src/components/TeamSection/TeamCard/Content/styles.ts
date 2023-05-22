import styled from 'styled-components';
import { BREAK_LAYOUT } from '../styles';

export const ContainerCSS = styled.section`
  display: flex;
  justify-content: center;
  margin: 0 6rem;

  > section {
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    justify-content: flex-end;

    > h2 {
      font-family: var(--font-primary);
      margin: 2.5rem 1.5rem;
    }
    > span {
      margin: 0.5rem;
    }
    a {
      text-decoration: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.mediaQueries.maxTablet}) {
    margin: 0;
    > section {
      max-width: 200px;
    }
  }
  @media (max-width: ${({ theme }) => theme.mediaQueries.maxMobile}) {
    margin: 0 1rem;

    > section {
      > h2 {
        margin: 2rem;
      }
    }
    > section:first-child,
    > section:last-child {
      > h2 {
        margin-top: 3.2rem;
      }
    }
  }
  @media (max-width: ${BREAK_LAYOUT}) {
    flex-direction: column;

    > section {
      max-width: 100%;
      margin-bottom: 1.5rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;
