import styled from 'styled-components';

export const ContainerCSS = styled.section`
  > .more-info,
  > section > .content section {
    margin-left: 10rem;
    @media (max-width: ${({ theme }) => theme.mediaQueries.maxMobile}) {
      margin-top: 1rem !important;
      margin-right: 1rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.mediaQueries.maxTablet}) {
    > .more-info,
    > section > .content section {
      margin-left: 1rem;
    }
  }
`;
