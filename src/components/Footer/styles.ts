import styled from 'styled-components';

export const ContainerCSS = styled.footer`
  position: relative;
  width: 100%;
  z-index: 1;

  > .background {
    overflow: hidden;
    position: absolute;

    top: -37%;
    left: 0;
    width: 100%;
    height: 30rem;
    box-shadow: 0 4px 4px rgba(var(--color-shadow), 0.25);

    > .content {
      position: relative;
      width: 100%;
      height: 100%;
    }

    @media (min-width: ${({ theme }) => theme.mediaQueries.minTablet}) {
      height: calc(30.1rem);
    }
    @media (min-width: 1800px) {
      > .content {
        transform: scaleX(1.5);
      }
    }
    @media (max-width: ${({ theme }) => theme.mediaQueries.maxTablet}) {
      top: -10rem;
    }
  }

  section {
    display: flex;
    align-items: center;
  }
`;
