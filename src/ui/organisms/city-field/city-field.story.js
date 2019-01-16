import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { CityField } from './city-field';


storiesOf('CityField', module)
  .add('Default', () => (
    <CityField placeholder={ `Hi! I'm input!` }/>
  ))
  .add('Left Border Radius', () => (
    <CityField placeholder={ `Hi! I'm input!` } leftBorderRadius/>
  ))
  .add('Right Border Radius', () => (
    <CityField placeholder={ `Hi! I'm input!` } rightBorderRadius/>
  ))
  .add('Error', () => (
    <CityField
      placeholder={ `Hi! I'm input!` }
      errorMessage={ `Hi! I'm error message!` }
    />
  ));
