import * as React from 'react';
import styled from 'styled-components';

import { ErrorMessage, Input, Label } from 'ui/atoms';


const StyledErrorMessage = styled(ErrorMessage)`
  position: absolute;
  top: 0;
  right: -2px;
  left: -2px;
  z-index: 9;
  width: calc(100% + 4px);
  transform: translateY(-100%);
`;

const StyledLabel = styled(Label)`
  position: absolute;
  top: -25px;
  left: 20px;
`;

const Wrapper = styled.div`
  position: relative;
`;


export const Field = ({ className, placeholder, errorMessage, isFirst, isLast, isError }) => {
  const [value, setValue] = React.useState('');
  const [isFocused, setFocus] = React.useState(false);

  const handleInputChange = (e) => setValue(e.target.value);
  const handleInputFocus = () => setFocus(true);
  const handleInputBlur = () => setFocus(false);

  return (
    <Wrapper className={ className }>
      { isError && <StyledErrorMessage>{ errorMessage }</StyledErrorMessage> }
      <Input
        value={ value }
        placeholder={ isFocused ? '' : placeholder }
        isFirst={ isFirst }
        isLast={ isLast }
        isError={ isError }
        onChange={ handleInputChange }
        onFocus={ handleInputFocus }
        onBlur={ handleInputBlur }
      />
      <StyledLabel isVisible={ isFocused || value.length > 0 }>{ placeholder }</StyledLabel>
    </Wrapper>
  );
};
