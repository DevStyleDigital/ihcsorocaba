import styled from 'styled-components';

export const ContainerCSS = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
  > .content {
    display: flex;
    position: absolute;
    align-items: flex-end;
    flex-direction: column;

    top: 2.75rem;
    right: 2.6rem;
    z-index: 1;

    > .text {
      font-weight: bold;

      margin: 0.13rem 0;
      padding: 0.2rem;

      background-color: var(--color-primary);

      &:last-child {
        margin-top: 0.3rem;
      }
    }

    @media (max-width: ${({ theme }) => theme.mediaQueries.maxTablet}) {
      top: 2.75rem;
      right: 1rem;
    }
  }
`;
