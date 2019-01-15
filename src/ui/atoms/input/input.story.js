import React from 'react';
import { storiesOf } from '@storybook/react';

import { Input } from './input';


storiesOf('Input', module)
  .add('Default', () => (
    <Input placeholder={ `Hi! I'm input!` }/>
  ))
  .add('First', () => (
    <Input placeholder={ `Hi! I'm input!` } isFirst/>
  ))
  .add('Last', () => (
    <Input placeholder={ `Hi! I'm input!` } isLast/>
  ))
  .add('Error', () => (
    <Input placeholder={ `Hi! I'm input!` } isError/>
  ));