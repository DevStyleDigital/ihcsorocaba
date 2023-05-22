import styled from 'styled-components';

export const AdminPageCSS = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  margin: 10rem 0;

  > h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
  > form {
    display: flex;
    flex-direction: column;

    width: 30rem;
    margin-top: 1rem;

    > label {
      display: flex;
      text-align: left;
      flex-direction: column;
      margin-bottom: 1rem;

      > input {
        height: 2rem;
        padding: 0.5rem;
        margin-top: 0.5rem;

        border: 1px solid var(--color-text);
        border-radius: 0.25rem;
      }
    }
    > button {
      width: 100%;
    }
  }

  @media (max-width: ${({ theme }) => theme.mediaQueries.maxMobile}) {
    text-align: center;
    > h2 {
      font-size: 1.5rem;
    }
    > form {
      width: 100%;
      padding: 0 1rem;
    }
  }
`;
