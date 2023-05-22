import styled from 'styled-components';

export const ContainerCSS = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.2rem 0 0.5rem;
  background-color: var(--color-footer-bottom);

  > .content-text {
    margin-top: 1rem;
    a {
      text-decoration: none;
      color: inherit;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
