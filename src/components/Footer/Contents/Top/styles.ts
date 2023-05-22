import styled from 'styled-components';

export const ContainerCSS = styled.div`
  display: flex;
  position: relative;
  text-align: center;
  justify-content: flex-end;

  width: 100%;
  height: 20rem;
  z-index: 1;

  > .content {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;
    height: 16rem;
    margin-bottom: 5%;

    @media (min-width: ${({ theme }) => theme.mediaQueries.minTablet}) {
      margin-bottom: 3%;
    }
  }
  @media (max-width: ${({ theme }) => theme.mediaQueries.maxTablet}) {
    height: 20rem;
  }
  @media (max-width: ${({ theme }) => theme.mediaQueries.maxMobile}) {
    height: 100%;

    box-shadow: 0 4px 4px rgba(var(--color-shadow), 0.25);

    > .content {
      height: 100%;
      margin-top: 1rem;
      margin-bottom: 0;
    }
  }
`;
