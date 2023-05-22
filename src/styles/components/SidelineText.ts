import styled from 'styled-components';

export const SidelineTextCSS = styled.span`
  display: block;
  position: relative;

  width: fit-content;
  transform: translateX(0.8rem);

  &::before {
    content: '';
    display: block;
    position: absolute;

    left: -0.8rem;
    width: 0.25rem;
    height: 100%;

    background-color: var(--color-primary);
  }
`;
