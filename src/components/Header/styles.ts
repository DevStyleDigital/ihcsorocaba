import styled from 'styled-components';

export const ContainerCSS = styled.header`
  position: fixed;

  top: 0;
  left: 0;
  width: 100%;
  height: 5.5rem;
  z-index: 20;

  box-shadow: 0px 3px 6px rgba(var(--color-shadow), 0.3);
  background-color: var(--color-primary);

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 100%;
    padding: 0 5rem;

    > .logo {
      cursor: pointer;
      display: flex;
      justify-content: center;
    }
  }

  @media (max-width: ${({ theme }) => theme.mediaQueries.maxTablet}) {
    .content {
      padding: 0 1rem;
    }
  }
`;
