import * as React from 'react';
import { storiesOf } from '@storybook/react';


import { Field } from './field';


storiesOf('Field', module)
  .add('Default', () => (
    <Field placeholder={ `Hi! I'm input!` }/>
  ))
  .add('First', () => (
    <Field placeholder={ `Hi! I'm input!` } isFirst/>
  ))
  .add('Last', () => (
    <Field placeholder={ `Hi! I'm input!` } isLast/>
  ))
  .add('Error', () => (
    <Field
      placeholder={ `Hi! I'm input!` }
      errorMessage={ `Hi! I'm error message!` }
      isError
    />
  ));
