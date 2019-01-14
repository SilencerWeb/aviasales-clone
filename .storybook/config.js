import * as React from 'react';
import { configure, addDecorator } from '@storybook/react';
import styled from 'styled-components';

import { GlobalStyles } from '../src/ui/theme';


const RootDecorator = styled.div`
  min-height: 100vh;
  background-color: #2196f3;
  padding-top: 30px;
  padding-right: 30px;
  padding-bottom: 30px;
  padding-left: 30px;
`;


addDecorator((fn) => {
  return (
    <RootDecorator>
      <GlobalStyles/>
      { fn() }
    </RootDecorator>
  );
});

configure(() => {
  const request = require.context('../src/', true, /\.story\.js$/);

  request.keys().forEach(request);
}, module);