import styled from 'styled-components';

export const MainCSS = styled.main`
  position: relative;
  z-index: 2;
  margin-top: 5.5rem;

  #transparent-documents {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    min-height: 10rem;
    > h2 {
      margin: 2rem 0;
    }
    > .content {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 50rem;
    }
  }
`;
