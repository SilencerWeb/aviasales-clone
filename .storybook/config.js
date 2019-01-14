import * as React from 'react';
import { configure, addDecorator } from '@storybook/react';
import styled from 'styled-components';

import { GlobalStyles } from '../src/ui/theme';


const RootDecorator = styled.div`
  min-height: 100vh;
  background-color: #f0f0f0;
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
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