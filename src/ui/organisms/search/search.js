import * as React from 'react';
import styled, { css } from 'styled-components';

import { Field } from 'ui/molecules';
import { CityField } from 'ui/organisms';
import { SearchButtonPlaneIcon, SingleRouteIcon, MultiRouteIcon, CloseIcon } from 'ui/outlines';

import { rgba } from 'utils';


const RouteTypeSwitcher = styled.button`
  display: inline-flex;
  align-items: center;
  font-size: 15px;
  color: #ffffff;
  background: none;
  border: none;
  padding-top: 0;
  padding-right: 0; 
  padding-bottom: 0;
  padding-left: 0;
  cursor: pointer;
  outline: none;
  
  svg {
    width: 17px;
    margin-right: 5px;
  }
`;

const StyledCityField = styled(CityField)`
  width: 25%;
  padding-right: 2px;
  
  &:last-child {
    padding-right: 0;
  }
  
  ${p => css`
    
    ${p.allowedToGrow && css`
      flex-grow: 1;
    `}
  `}
`;

const StyledField = styled(Field)`
  width: 25%;
  padding-right: 2px;
  
  &:last-child {
    padding-right: 0;
  }
  
  ${p => css`
    
    ${p.allowedToGrow && css`
      flex-grow: 1;
    `}
  `}
`;

const RemoveFlightButton = styled.button`
  flex-grow: 0;
  position: absolute;
  top: -7px;
  right: -11px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  background: #ff6663;
  border: none;
  border-radius: 100px;
  transition: 0.2s ease-out;
  cursor: pointer;
  outline: none;
  
  &:hover {
    transform: scale(1.2);
  }
  
  &:focus {
    transform: scale(1.2);
  }
  
  svg {
    width: 8px;
  }
`;

const AddFlightButton = styled.button`
  flex-grow: 1;
  font-size: 16px;
  letter-spacing: 0.4px;
  color: #ffffff;
  background-color: ${rgba('#ffffff', 0.2)};
  border: none;
  border-radius: 5px;
  padding-top: 21px;
  padding-right: 20px;
  padding-bottom: 21px;
  padding-left: 20px;
  margin-right: 2px;
  transition: 0.3s;
  cursor: pointer;
  outline: none;
  
  &:hover {
    background-color: ${rgba('#ffffff', 0.4)};
  }
  
  &:focus {
    background-color: ${rgba('#ffffff', 0.4)};
  }
`;

const FieldsRow = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 10px;
`;

const FieldsWrapper = styled.div`
  margin-bottom: 18px;
`;

const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 274px;
  font-size: 22px;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  background: #f57c00;
  box-shadow: 0 1px 0 0 #d84d00, 0 2px 6px 0 rgba(0, 0, 0, 0.15);
  padding-top: 8.5px;
  padding-right: 20px;
  padding-bottom: 8.5px;
  padding-left: 20px;
  margin-right: auto;
  margin-left: auto;
  cursor: pointer;
  outline: none;
  transition: 0.3s;
  
  &:hover {
    background-color: #ffa353;
  }
  
  &:focus {
    background-color: #ff6d00;
  }
  
  &:active {
    background: #ed7a18;
    box-shadow: inset 0 1px 5px 0 rgba(0, 0, 0, 0.25), inset 0 2px 0 0 #d84d00;
  }
  
  span {
    margin-right: 5px;
  }
  
  svg {
    width: 35px;
    margin-top: 5px;
  }
`;

const Wrapper = styled.div`

`;


export const Search = ({ className }) => {
  const [routeType, setRouteType] = React.useState('single');
  const [flightsCount, setFlightsCount] = React.useState(1);

  const handleRouteTypeSwitcherClick = () => setRouteType(routeType === 'single' ? 'multi' : 'single');
  const handleAddFlightButtonClick = () => setFlightsCount(flightsCount + 1);
  const handleRemoveFlightButtonClick = () => setFlightsCount(flightsCount - 1);

  return (
    <Wrapper className={ className }>
      <FieldsWrapper>
        {
          routeType === 'single' ?
            <FieldsRow>
              <StyledCityField id={ 'origin-single' } placeholder={ 'Origin' } leftBorderRadius/>
              <StyledCityField id={ 'destination-single' } placeholder={ 'Destination' }/>
              <StyledField id={ 'depart-date-single' } placeholder={ 'Depart date' }/>
              <StyledField id={ 'return-date-single' } placeholder={ 'Return date' }/>
              <StyledField id={ 'passengers-class-single' } placeholder={ 'Passengers/Class' } rightBorderRadius/>
            </FieldsRow>
            :
            <React.Fragment>
              {
                Array.from({ length: flightsCount }).map((item, i, array) => {
                  return (
                    <FieldsRow key={ i }>
                      {
                        i > 0 && i === array.length - 1 && // Because we need to have this button only in the latest row but not in the first
                        <RemoveFlightButton onClick={ handleRemoveFlightButtonClick }>
                          <CloseIcon/>
                        </RemoveFlightButton>
                      }

                      <StyledCityField id={ `origin-multi-${i}` } placeholder={ 'Origin' } leftBorderRadius allowedToGrow/>
                      <StyledCityField id={ `destination-multi-${i}` } placeholder={ 'Destination' } allowedToGrow/>
                      <StyledField id={ `depart-date-multi-${i}` } placeholder={ 'Depart date' } rightBorderRadius/>
                    </FieldsRow>
                  );
                })
              }
              <FieldsRow>
                <AddFlightButton onClick={ handleAddFlightButtonClick }>Add another flight</AddFlightButton>
                <StyledField placeholder={ 'Passengers/Class' } leftBorderRadius rightBorderRadius/>
              </FieldsRow>
            </React.Fragment>
        }

        <RouteTypeSwitcher onClick={ handleRouteTypeSwitcherClick }>
          {
            routeType === 'single' ?
              <React.Fragment>
                <MultiRouteIcon/>
                <span>Multi-city route</span>
              </React.Fragment>
              :
              <React.Fragment>
                <SingleRouteIcon/>
                <span>Back to simple route</span>
              </React.Fragment>
          }
        </RouteTypeSwitcher>
      </FieldsWrapper>

      <SearchButton>
        <span>Search</span>
        <SearchButtonPlaneIcon/>
      </SearchButton>
    </Wrapper>
  );
};
