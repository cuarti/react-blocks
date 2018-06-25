
import * as React from 'react';
import {Fragment} from 'react';
import {storiesOf} from '@storybook/react';

import {Container} from '../../../lib';


storiesOf('Container', module).add('default', () =>
	<ContainerView />
).add('fluid', () =>
	<ContainerView fluid />
// ).add('size', () =>
// 	<Fragment>
// 		<ContainerView size="xl" />
// 		<ContainerView size="lg" />
// 		<ContainerView size="md" />
// 		<ContainerView size="sm" />
// 		<ContainerView size="xs" />
// 	</Fragment>
);

// function ContainerView({size, fluid}: {size?: string, fluid?: boolean}): JSX.Element {
function ContainerView({fluid}: {fluid?: boolean}): JSX.Element {
	return (
		<div style={{backgroundColor: '#444'}} >
			{/*<Container size={size} fluid={fluid} >*/}
			<Container fluid={fluid} >
				<div style={{backgroundColor: '#eee', padding: 5}} >
					{/*{size ? `continer-${size}` : 'container'}*/}
					container
				</div>
			</Container>
		</div>
	);
}
