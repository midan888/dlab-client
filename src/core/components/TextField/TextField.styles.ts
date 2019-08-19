import styled from 'styled-components';

export const Root = styled.div`
  position:relative;
  padding: 8px 0;
`;

export const Input = styled.input`
  height: 48px;
  border: 2px solid #BCBCBC;
  border-radius: 4px;
  outline: none;
  color: #656565;
  padding: 0 16px;
  display: block;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    border: 2px solid #2a7bbf;
    color: #272727;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 4px;
  left: 24px;
  font-size: 11px;
  background-color: white;
  padding: 0 4px;
  text-transform: uppercase;

  ${Input}:focus ~ & {
    color: #2a7bbf;
  }
`;
