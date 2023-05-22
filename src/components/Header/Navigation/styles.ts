import styled, { css, keyframes } from 'styled-components';

interface ContainerCSSProps {
  isOpen: boolean;
}

const openAnimation = keyframes`
  from {
    display: none;
    visibility: hidden;
    opacity: 0;
    transform: translateX(10rem);
  }
  to {
    display: flex;
    visibility: visible;
    opacity: 1;
    transform: translateX(0);
  }
`;
const closeAnimation = keyframes`
  from {
    display: flex;
    visibility: visible;
    opacity: 1;
    transform: translateX(0);
  }
  to {
    visibility: hidden;
    opacity: 0;
    transform: translateX(10rem);
    display: none;
  }
`;

const sidebarOpenCSS = css`
  animation: ${openAnimation} 0.5s ease-in-out forwards;
`;

export const ContainerCSS = styled.nav<ContainerCSSProps>`
  display: flex;
  justify-content: center;
  z-index: 9;
  width: 100%;
  height: 100%;

  > ul {
    display: flex;
    align-items: center;
    height: 100%;
  }
  li {
    opacity: 0.8;

    a {
      display: flex;
      align-items: center;
      text-transform: uppercase;
      text-decoration: none;

      height: 100%;
      padding: 0 1rem;
      font-size: 0.8rem;
      line-height: 15px;
      font-weight: 700;

      color: var(--color-background);
      font-family: var(--font-primary);
    }

    &:hover {
      opacity: 1;
    }
  }

  @media (max-width: ${({ theme }) => theme.mediaQueries.maxTablet}) {
    position: fixed;
    justify-content: flex-end;

    top: 0;
    right: 0;
    width: 10rem;
    height: 18rem;
    border-bottom-left-radius: var(--border-radius-xl);

    animation: ${closeAnimation} 0.5s ease-in-out forwards;
    background-color: var(--color-primary);

    > ul {
      flex-direction: column;
      justify-content: flex-end;

      padding: 0.2rem 0rem 1rem;
      height: 100%;
      width: 100%;
    }
    a {
      justify-content: flex-end;

      width: 100%;
      padding: 0.5rem 1rem;
      font-size: 12px;
    }

    ${({ isOpen }) => isOpen && sidebarOpenCSS}
  }
`;
