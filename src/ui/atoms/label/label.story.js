import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { Label } from './label';


storiesOf('Label', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const isVisible = boolean('isVisible', true);

    return (
      <Label isVisible={ isVisible }>Hi! I'm label!</Label>
    );
  });
