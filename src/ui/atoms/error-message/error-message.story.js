import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { ErrorMessage } from './error-message';


storiesOf('ErrorMessage', module)
  .add('Default', () => (
    <ErrorMessage>Hi! I'm error message!</ErrorMessage>
  ));
