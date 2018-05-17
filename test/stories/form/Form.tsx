
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import {Form, Input, Button} from '../../../src';


storiesOf('Form', module).add('default', () =>
	<Form onSubmit={action('onSubmit')} >
		<Input value="" onValue={action('onValue')} />
		<Button type="submit" >Submit</Button>
	</Form>
);
