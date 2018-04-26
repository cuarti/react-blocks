
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import {FontIcon} from '../../../src';


storiesOf('FontIcon', module).add('default', () => (
	<FontIcon value="font-awesome.address-book" />
));
