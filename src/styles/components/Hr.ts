import styled, { css } from 'styled-components';

interface HrCSSProps {
  bigger?: boolean;
}

const sharedCSS = css`
  border: none;
`;
const biggerHrCSS = css`
  width: calc(50% - 10%);
`;

export const HrCSS = styled.hr.attrs({
  role: 'separator',
})<HrCSSProps>`
  width: calc(50% - 7%); // half of the page - space right of 7%
  height: 0.1rem;
  margin: 1.5rem 0 1rem;

  background-color: var(--color-secondary);
  ${sharedCSS}

  ${({ bigger }) => bigger && biggerHrCSS}
`;

export const VerticalToHorizontalHrCSS = styled.hr.attrs({
  role: 'separator',
})`
  display: flex;

  width: 0.2rem;
  height: 100%;
  margin: 4rem 0;
  flex-shrink: 0;

  background-color: var(--color-primary);
  ${sharedCSS}

  @media (max-width: ${({ theme }) => theme.mediaQueries.maxMobile}) {
    width: calc(50% - 7%); // half of the page - space right of 7%
    height: 0.2rem;
    margin: 2rem 0;
  }
`;
