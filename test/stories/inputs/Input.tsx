
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import {Input} from '../../../src';


storiesOf('Input', module).add('default', () =>
	<Input type="number" value={13} onChange={action('changed')} />
);
