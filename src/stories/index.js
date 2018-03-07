import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Header from '../Header';
import ParkInfo from '../ParkInfo';

storiesOf('ParkInfo', module)
  .add('with vacant spaces', () => (
    <ParkInfo parkingSpaces={42} />
  ))
  .add('with all spaces occupied', () => (
    <ParkInfo parkingSpaces={0} />
  ));
