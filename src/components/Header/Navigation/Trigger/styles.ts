import styled from 'styled-components';

export const ContainerCSS = styled.button.attrs({
  type: 'button',
})`
  display: none;
  z-index: 12;

  @media (max-width: ${({ theme }) => theme.mediaQueries.maxTablet}) {
    display: block;
  }
`;
