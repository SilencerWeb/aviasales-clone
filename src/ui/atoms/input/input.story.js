import React from 'react';
import { storiesOf } from '@storybook/react';

import { Input } from './input';


storiesOf('Input', module)
  .add('Default', () => (
    <Input placeholder={ `Hi! I'm input!` }/>
  ))
  .add('Left Border Radius', () => (
    <Input placeholder={ `Hi! I'm input!` } leftBorderRadius/>
  ))
  .add('Right Border Radius', () => (
    <Input placeholder={ `Hi! I'm input!` } rightBorderRadius/>
  ))
  .add('Error', () => (
    <Input placeholder={ `Hi! I'm input!` } error/>
  ));