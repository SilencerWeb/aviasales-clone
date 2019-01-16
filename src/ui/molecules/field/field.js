import * as React from 'react';
import styled from 'styled-components';

import { ErrorMessage, Input, Label } from 'ui/atoms';


const StyledErrorMessage = styled(ErrorMessage)`
  position: absolute;
  top: 0;
  right: -2px;
  left: -2px;
  z-index: 2;
  width: calc(100% + 4px);
  transform: translateY(-100%);
`;

const StyledLabel = styled(Label)`
  position: absolute;
  top: -25px;
  left: 20px;
  z-index: 1;
`;

const Code = styled.span`
  position: absolute;
  top: 50%;
  right: 15px;
  z-index: 2;
  font-size: 12px;
  color: #90a4ae;
  transform: translateY(-50%);
  pointer-events: none;
`;

const Wrapper = styled.div`
  position: relative;
`;


export const Field = ({ id, className, value, placeholder, code, errorMessage, leftBorderRadius, rightBorderRadius, onChange, onFocus, onBlur }) => {
  const [currentValue, setCurrentValue] = React.useState('');
  const [isFocused, setFocus] = React.useState(false);

  React.useEffect(() => {
    if (value) {
      setCurrentValue(value);
    }
  }, [value]);

  const handleInputChange = (e) => {
    setCurrentValue(e.target.value);
    onChange && onChange(e.target.value);
  };

  const handleInputFocus = () => {
    setFocus(true);
    onFocus && onFocus();
  };

  const handleInputBlur = () => {
    setFocus(false);
    onBlur && onBlur();
  };

  return (
    <Wrapper className={ className }>
      { errorMessage && <StyledErrorMessage>{ errorMessage }</StyledErrorMessage> }
      <Input
        id={ id }
        value={ currentValue }
        placeholder={ isFocused ? '' : placeholder }
        leftBorderRadius={ leftBorderRadius }
        rightBorderRadius={ rightBorderRadius }
        largePaddingRight={ !!code }
        error={ !!errorMessage }
        onChange={ handleInputChange }
        onFocus={ handleInputFocus }
        onBlur={ handleInputBlur }
      />
      <StyledLabel htmlFor={ id } visible={ isFocused || currentValue.length > 0 }>{ placeholder }</StyledLabel>
      { code && <Code>{ code }</Code> }
    </Wrapper>
  );
};
