
import * as React from 'react';
import {storiesOf} from '@storybook/react';

import {Container} from '../../../src';


storiesOf('Container', module).add('default', () =>
	<ContainerView />
).add('fluid', () =>
	<ContainerView fluid />
);

function ContainerView({fluid}: {fluid?: boolean}): JSX.Element {
	return (
		<div style={{backgroundColor: '#444'}} >
			<Container fluid={fluid} >
				<div style={{backgroundColor: '#eee', padding: 5}} >container</div>
			</Container>
		</div>
	);
}
