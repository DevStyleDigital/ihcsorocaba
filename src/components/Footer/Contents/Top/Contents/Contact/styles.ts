import styled from 'styled-components';

export const ContainerCSS = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 0 10rem;
  height: 6rem;

  @media (max-width: ${({ theme }) => theme.mediaQueries.maxTablet}) {
    padding: 2.5rem 2rem;
    height: 100%;
  }
  @media (max-width: ${({ theme }) => theme.mediaQueries.maxMobile}) {
    background-color: var(--color-secondary);
    flex-direction: column;

    height: 100%;
    margin-top: 2rem;
    padding: 2rem 1rem;
    padding-top: 0;

    > .address {
      max-width: 100% !important;
    }
  }
`;
