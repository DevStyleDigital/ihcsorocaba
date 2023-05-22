import styled, { css } from 'styled-components';

interface ContainerCSSProps {
  isActive: boolean;
}

const ActiveCSS = css`
  opacity: 1;
  background-color: rgba(var(--color-shadow), 0.2);
`;

export const ContainerCSS = styled.li<ContainerCSSProps>`
  display: flex;
  list-style: none;

  height: 100%;
  opacity: 0.8;

  ${({ isActive }) => isActive && ActiveCSS}

  &:hover {
    opacity: 1;
  }
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }

  @media (max-width: ${({ theme }) => theme.mediaQueries.maxTablet}) {
    width: 100%;
    height: auto;

    &:last-child {
      border-radius: 100% 0% 50% 8% / 0% 100% 0% 100%;
    }
  }
`;
