import * as React from 'react';
import styled from 'styled-components';

import { Field, AutocompleteDropdown } from 'ui/molecules';

import { getAutocompleteVariants } from 'api';


const StyledAutocompleteDropdown = styled(AutocompleteDropdown)`
  position: absolute;
  top: 62px;
  z-index: 1;
`;

const Wrapper = styled.div`
  position: relative;
`;


export const CityField = ({ id, className, placeholder, errorMessage, leftBorderRadius, rightBorderRadius }) => {
  const [currentValue, setCurrentValue] = React.useState({ name: '', code: '' });
  const [isFocused, setFocus] = React.useState(false);
  const [autocompleteVariants, setAutocompleteVariants] = React.useState([]);

  // We need it for delaying handleFieldBlur because otherwise handleAutocompleteVariantClick won't be triggered
  let timeout = null;

  const handleFieldChange = (value) => {
    if (!value) {
      setCurrentValue({ name: value });
      setAutocompleteVariants([]);

      return;
    }

    getAutocompleteVariants({ term: value, locale: 'ru', types: ['city', 'airport'] })
      .then((response) => response.data)
      .then((data) => setAutocompleteVariants(data));
  };

  const handleFieldFocus = () => setFocus(true);

  const handleFieldBlur = () => {
    timeout = setTimeout(() => {
      setFocus(false);

      if (!currentValue) {
        setCurrentValue({
          name: autocompleteVariants[0].name,
          code: autocompleteVariants[0].code,
        });
      }
    }, 250);
  };

  const handleAutocompleteVariantClick = (index) => {
    clearTimeout(timeout);
    setCurrentValue({
      name: autocompleteVariants[index].name,
      code: autocompleteVariants[index].code,
    });
    setFocus(false);
  };

  return (
    <Wrapper className={ className }>
      <Field
        id={ id }
        value={ currentValue.name }
        placeholder={ placeholder }
        code={ currentValue.code }
        errorMessage={ errorMessage }
        leftBorderRadius={ leftBorderRadius }
        rightBorderRadius={ rightBorderRadius }
        onChange={ handleFieldChange }
        onFocus={ handleFieldFocus }
        onBlur={ handleFieldBlur }
      />
      {
        isFocused && setAutocompleteVariants &&
        <StyledAutocompleteDropdown
          variants={ autocompleteVariants }
          onVariantClick={ handleAutocompleteVariantClick }
        />
      }
    </Wrapper>
  );
};
