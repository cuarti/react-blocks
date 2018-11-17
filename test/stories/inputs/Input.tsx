
import * as React from 'react';
import {Component, ReactNode, Fragment} from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import {Input, InputProps} from '../../../lib';


storiesOf('Input', module).add('default', () =>
	<Fragment>
		<InputView placeholder="Name" onValue={action('name')} onChange={action('changed')} />
		<InputView type="number" value={18} placeholder="Age" onValue={action('age')} onChange={action('changed')} />
	</Fragment>
).add('updata from state', () =>
	<UpdateExample />
);

function InputView(props: InputProps): JSX.Element {
	return (
		<div style={{padding: 15, paddingBottom: 0}} >
			<Input {...props} />
		</div>
	);
}

interface UpdateExampleState {
	value: string;
}

class UpdateExample extends Component<{}, UpdateExampleState> {

	public constructor(props: any, context: any) {
		super(props, context);

		this.state = {value: ''};
	}

	public render(): ReactNode {

		let {value} = this.state;

		return (
			<div style={{padding: 15, paddingBottom: 0}} >
				{value}
				<Input value={value} onValue={value => this.setState({value})} />
				<button onClick={() => this.setState({value: value.split('').reverse().join('')})} >Inverse</button>
			</div>
		);

	}

}
