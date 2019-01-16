import * as React from 'react';
import { storiesOf } from '@storybook/react';


import { Field } from './field';


storiesOf('Field', module)
  .add('Default', () => (
    <Field placeholder={ `Hi! I'm input!` }/>
  ))
  .add('Left Border Radius', () => (
    <Field placeholder={ `Hi! I'm input!` } leftBorderRadius/>
  ))
  .add('Right Border Radius', () => (
    <Field placeholder={ `Hi! I'm input!` } rightBorderRadius/>
  ))
  .add('Error', () => (
    <Field
      placeholder={ `Hi! I'm input!` }
      errorMessage={ `Hi! I'm error message!` }
    />
  ));
