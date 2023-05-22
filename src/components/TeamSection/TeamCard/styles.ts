import styled from 'styled-components';

export const BREAK_LAYOUT = '700px';

export const ContainerCSS = styled.div`
  position: relative;
  margin: 3rem 4rem;

  h2 {
    color: var(--color-background);
  }
  > .square {
    top: -0.8rem;
    left: -0.8rem;
    width: 23%;
    height: 5rem;
    z-index: -1;
    position: absolute;
    background-color: var(--color-secondary);
  }
  > .content {
    padding: 1.25rem 1.9rem 4.4rem;
    border-radius: 0 6.25rem 6.25rem 6.25rem;

    box-shadow: 0 4px 4px rgba(var(--color-shadow), 0.25);
    background-color: var(--color-primary);
  }

  @media (max-width: ${({ theme }) => theme.mediaQueries.maxTablet}) {
    margin: 0;
    transform: scale(0.8);
  }
  @media (max-width: ${({ theme }) => theme.mediaQueries.maxMobile}) {
    margin: 2rem 1rem;
    transform: scale(1);

    h2 {
      font-size: 1.1rem;
    }
    > .content {
      padding: 1rem 1rem 3.4rem;
    }
  }
  @media (max-width: ${BREAK_LAYOUT}) {
    > .content {
      border-radius: 0 2rem 2rem 2rem;
      padding-bottom: 1.5rem;
    }
  }
`;
