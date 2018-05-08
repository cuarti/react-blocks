
import * as React from 'react';
import {Fragment} from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import {Input, InputProps} from '../../../src';


storiesOf('Input', module).add('default', () =>
	<Fragment>
		<InputView placeholder="Name" onValue={action('name')} onChange={action('changed')} />
		<InputView type="number" value={18} placeholder="Age" onValue={action('age')} onChange={action('changed')} />
	</Fragment>
);

function InputView(props: InputProps): JSX.Element {
	return (
		<div style={{padding: 15, paddingBottom: 0}} >
			<Input {...props} />
		</div>
	);
}
