import styled from 'styled-components';

export const DashboardButtonCSS = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;

    &:hover,
    &:active {
      transform: scale(1);
    }
  }
`;
