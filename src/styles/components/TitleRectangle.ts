import styled, { css } from 'styled-components';

interface TitleRectangleProps {
  isInverted?: boolean;
}

const InvertedTitleRectangle = css`
  color: var(--color-primary);
  background-color: var(--color-background);
`;

export const TitleRectangleCSS = styled.span<TitleRectangleProps>`
  display: block;
  font-weight: bold;
  text-transform: uppercase;

  transition: all 0.2s ease-in-out;

  width: fit-content;
  padding: 0.5rem 4rem;
  font-size: 1.5rem;
  min-width: 12rem;
  line-height: 1.5rem;
  border-radius: 2rem;

  color: var(--color-background);
  font-family: var(--font-primary);
  background-color: var(--color-primary);

  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95);
  }
  ${({ isInverted }) => isInverted && InvertedTitleRectangle}
`;
