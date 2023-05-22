import styled from 'styled-components';

export const breakLayoutWidth = 1600;

export const ContainerCSS = styled.div`
  > .embla {
    overflow: hidden;
    > .embla__container {
      display: flex;
      > .embla__slide {
        position: relative;
        flex: 0 0 100%;

        width: 100%;
        height: 22rem;

        @media (min-width: ${({ theme }) => theme.mediaQueries.minTablet}) {
          img {
            object-fit: unset !important;
          }
        }
        @media (min-width: ${breakLayoutWidth}px) {
          height: 100%;
        }
      }
    }
  }
`;
