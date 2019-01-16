import * as React from 'react';
import styled, { css } from 'styled-components';

import { AirportPlaneIcon } from 'ui/outlines';


const Country = styled.span`
  font-weight: 300;
  color: #90a4ae;
  margin-left: 2.5px;
`;

const CountryCode = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #90a4ae;
`;

const VariantSide = styled.div`
  display: flex;
  align-items: center;
`;

const Variant = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  color: #4a4a4a;
  border-bottom: 1px solid #dfe5ec;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  
  &:hover {
    background-color: #f1fcff;
  }
  
  &:last-child {
    border-bottom: 0;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  
  svg {
    width: 21px;
    margin-right: 15px;
  }
  
  ${p => css`

    ${p.largeLeftPadding && css`
      padding-left: 30px;
    `}
  `}
`;

const Wrapper = styled.div`
  width: 320px;
  background-color: #ffffff;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .25);
  cursor: pointer;
`;


export const AutocompleteDropdown = ({ className, variants, onVariantClick }) => {
  return (
    <Wrapper className={ className }>
      {
        variants && variants.map((variant, i) => {
          if (variant.type === 'city') {
            return (
              <Variant onClick={ () => onVariantClick(i) }>
                <VariantSide>
                  <span>{ variant.name },</span>
                  <Country>{ variant.country_name }</Country>
                </VariantSide>

                <CountryCode>{ variant.code }</CountryCode>
              </Variant>
            );
          } else if (variant.type === 'airport') {
            return (
              <Variant largeLeftPadding onClick={ () => onVariantClick(i) }>
                <VariantSide>
                  <AirportPlaneIcon/>
                  <span>{ variant.name }</span>
                </VariantSide>

                <CountryCode>{ variant.code }</CountryCode>
              </Variant>
            );
          }

          return null;
        })
      }
    </Wrapper>
  );
};