import styled from 'styled-components';

export const ContainerCSS = styled.section`
  > .content {
    > div {
      display: flex;
      justify-content: space-between;

      > section {
        margin-right: 0;
        max-width: 10rem;
      }
      .kids-map {
        margin: 1rem;
      }

      @media (max-width: 400px) {
        align-items: center;
        flex-direction: column;

        > section {
          max-width: unset;
        }
        .kids-map {
          margin: 0;
        }
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.mediaQueries.minMobile}) {
    display: flex;
    justify-content: space-between;
    width: 100%;

    > span {
      height: 15rem;
      margin: 2rem;

      > .kids-map {
        position: absolute;
        width: 100%;
      }
    }
    > .content {
      max-width: 50rem;
      > div > section {
        max-width: unset;
      }
    }
  }
`;
