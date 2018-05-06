
import * as React from 'react';
import {storiesOf} from '@storybook/react';

import {Container, Row} from '../../../src';


storiesOf('Row', module).add('default', () =>
	<div style={{backgroundColor: '#444'}} >
		<Container>
			<Row>
				<div style={{backgroundColor: '#eee', padding: 5}} >container</div>
			</Row>
		</Container>
	</div>
);
