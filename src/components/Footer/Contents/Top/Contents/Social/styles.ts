import styled from 'styled-components';

export const ContainerCSS = styled.section`
  display: flex;
  position: absolute;
  flex-direction: column;

  right: 2rem;
  bottom: 2rem;

  > .item {
    margin: 0.2rem;
  }

  @media (max-width: ${({ theme }) => theme.mediaQueries.maxTablet}) {
    flex-direction: row;
    right: 0.5rem;
    bottom: 0.5rem;

    > .item {
      > .facebook img,
      > .instagram img {
        transform: scale(0.8);
      }
      > .facebook {
        margin-left: 0.3rem;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.mediaQueries.maxMobile}) {
    position: unset;
    align-items: center;
    justify-content: flex-end;

    width: 100%;
    padding: 0.5rem 0.7rem;
    padding-top: 0;

    background-color: var(--color-secondary);
  }
`;
