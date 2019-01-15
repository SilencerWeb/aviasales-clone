import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Search } from './search';


storiesOf('Search', module)
  .add('Default', () => (
    <Search/>
  ));
