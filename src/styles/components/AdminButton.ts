import styled from 'styled-components';

export const AdminButtonCSS = styled.button`
  border-radius: 3px;
  border: 1px solid #336895;
  box-shadow: inset 0 1px 0 #8dc2f0;
  width: 242px;
  height: 40px;
  margin-top: 20px;
  opacity: 1;

  background: linear-gradient(bottom, #4889c2 0%, #5ba7e9 100%);
  background: -o-linear-gradient(bottom, #4889c2 0%, #5ba7e9 100%);
  background: -moz-linear-gradient(bottom, #4889c2 0%, #5ba7e9 100%);
  background: -webkit-linear-gradient(bottom, #4889c2 0%, #5ba7e9 100%);
  background: -ms-linear-gradient(bottom, #4889c2 0%, #5ba7e9 100%);

  cursor: pointer;
  color: white;
  font-weight: bold;
  text-shadow: 0 -1px 0 #336895;

  font-size: 13px;
  &:hover {
    background: linear-gradient(bottom, #5c96c9 0%, #6bafea 100%);
    background: -o-linear-gradient(bottom, #5c96c9 0%, #6bafea 100%);
    background: -moz-linear-gradient(bottom, #5c96c9 0%, #6bafea 100%);
    background: -webkit-linear-gradient(bottom, #5c96c9 0%, #6bafea 100%);
    background: -ms-linear-gradient(bottom, #5c96c9 0%, #6bafea 100%);
  }

  &:active {
    background: linear-gradient(bottom, #5ba7e9 0%, #4889c2 100%);
    background: -o-linear-gradient(bottom, #5ba7e9 0%, #4889c2 100%);
    background: -moz-linear-gradient(bottom, #5ba7e9 0%, #4889c2 100%);
    background: -webkit-linear-gradient(bottom, #5ba7e9 0%, #4889c2 100%);
    background: -ms-linear-gradient(bottom, #5ba7e9 0%, #4889c2 100%);

    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3), 0 1px 0 white;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;

    &:hover,
    &:active {
      background: linear-gradient(bottom, #4889c2 0%, #5ba7e9 100%);
      background: -o-linear-gradient(bottom, #4889c2 0%, #5ba7e9 100%);
      background: -moz-linear-gradient(bottom, #4889c2 0%, #5ba7e9 100%);
      background: -webkit-linear-gradient(bottom, #4889c2 0%, #5ba7e9 100%);
      background: -ms-linear-gradient(bottom, #4889c2 0%, #5ba7e9 100%);
    }
  }
`;
