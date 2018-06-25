
import * as React from 'react';
import {Fragment, CSSProperties} from 'react';
import {storiesOf} from '@storybook/react';

import {Container, Row, Col} from '../../../lib';


storiesOf('Col', module).add('default', () =>
	<div style={{backgroundColor: '#444'}} >
		<Container>
			<Row>
				<ColsView size={12} />
				<ColsView size={6} />
				<ColsView size={4} />
				<ColsView size={3} />
				<ColsView size={2} />
				<ColsView size={1} />
			</Row>
		</Container>
	</div>
).add('sizes', () =>
	<div style={{backgroundColor: '#444'}} >
		<Container>
			<ColView size={12} />
			<ColView size={11} />
			<ColView size={10} />
			<ColView size={9} />
			<ColView size={8} />
			<ColView size={7} />
			<ColView size={6} />
			<ColView size={5} />
			<ColView size={4} />
			<ColView size={3} />
			<ColView size={2} />
			<ColView size={1} />
		</Container>
	</div>
);

const style: CSSProperties = {
	backgroundColor: '#fafafa',
	marginBottom: 15,
	padding: 15,
	textAlign: 'center'
};

function ColView({size}: {size: number}): JSX.Element {
	return (
		<Row>
			<Col size={size} >
				<div style={style} >col-{size}</div>
			</Col>
		</Row>
	);
}

function ColsView({size}: {size: number}): JSX.Element {

	let length = 12 / size;
	let items = [];

	for(let i = 0; i < length; i++) {
		items.push(i);
	}

	return (
		<Fragment>
			{items.map(i =>
				<Col key={i} size={size} >
					<div style={style} >col-{size}</div>
				</Col>
			)}
		</Fragment>
	);

}
