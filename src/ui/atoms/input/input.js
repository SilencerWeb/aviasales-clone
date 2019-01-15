import styled, { css } from 'styled-components';


export const Input = styled.input`
  width: 100%;
  font-size: 15px;
  color: #262626;
  border: none;
  padding-top: 21.5px;
  padding-right: 18px;
  padding-bottom: 21.5px;
  padding-left: 18px;
  outline: none;
  
  &:focus {
    box-shadow: 0 0 0 2px #ff6d00;
  }
  
  &::placeholder {
    color: #a3a3a3;
  }
  
  ${p => css`
    
    ${p.isFirst && css`
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    `}
    
    ${p.isLast && css`
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    `}
    
    ${p.isError && css`
      box-shadow: 0 0 0 2px #ef5d5d;
      
      &:focus {
        box-shadow: 0 0 0 2px #ef5d5d;
      }
    `}
  `}
`;
