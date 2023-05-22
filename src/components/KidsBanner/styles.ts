import styled from 'styled-components';

const PROJECT_SECTION_COLOR = '#192d7d';

export const ContainerCSS = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 20rem;

  background-color: ${PROJECT_SECTION_COLOR};

  > p {
    font-weight: bold;
    font-size: 2rem;
    color: var(--color-background);
  }
  > .image-container {
    width: 100%;
    height: 100%;
    max-width: 33.3rem;
  }

  @media (max-width: ${({ theme }) => theme.mediaQueries.maxTablet}) {
    height: auto;
    text-align: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    > p {
      z-index: 1;
      padding: 1rem;
      box-shadow: 0px 4rem 2.5rem 1rem ${PROJECT_SECTION_COLOR};
    }
  }
`;
