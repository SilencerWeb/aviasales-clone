import styled, { css } from 'styled-components';


export const Label = styled.label`
  font-size: 10px;
  font-weight: 300;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
  backface-visibility: hidden;
  will-change: transform, opacity;
  transform: translateY(10px);
  transition: transform 0.3s cubic-bezier(1, 0, 1, 0.4), opacity 0.3s linear, -webkit-transform 0.3s cubic-bezier(1, 0, 1, 0.4);
  opacity: 0;
  
  ${p => css`
    
    ${p.isVisible && css`
      transform: translateY(0);
      transition: transform 0.3s cubic-bezier(0, 0.6, 0, 1), opacity 0.3s linear, -webkit-transform 0.3s cubic-bezier(0, 0.6, 0, 1);
      opacity: 1;
    `}
  `}
`;
