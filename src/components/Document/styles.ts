import styled from 'styled-components';

export const ContainerCSS = styled.button.attrs({
  type: 'button',
})`
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  transition: all 0.2s ease-in-out;

  z-index: 1;
  padding: 1rem;
  min-width: 16rem;

  > .name {
    width: 100%;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    border-radius: 26px;

    box-shadow: 0px 4px 4px rgba(var(--color-shadow), 0.2);
    background: var(--color-document-text-background);
  }
  &:hover {
    transform: scale(1.05);
  }
`;
