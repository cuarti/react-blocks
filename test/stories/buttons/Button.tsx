
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import {Button} from '../../../src';


storiesOf('Button', module).add('default', () => (
	<Button onClick={action('clicked')} >Click-me</Button>
)).add('colors', () => (
	<div>
		{['primary', 'secondary', 'info', 'success', 'warning', 'danger', 'light', 'dark'].map(v => (
			<Button key={v} color={v} style={{marginRight: 10}} >Button {v}</Button>
		))}
	</div>
)).add('sizes', () => (
	<div>
		{['xs', 'sm', 'md', 'lg', 'xl'].map(v => (
			<Button key={v} color="primary" size={v} style={{marginRight: 10}} >Button {v}</Button>
		))}
	</div>
)).add('block', () => (
	<div>
		{['primary', 'secondary', 'info', 'success', 'warning', 'danger', 'light', 'dark'].map(v => (
			<Button key={v} color={v} block >Button {v}</Button>
		))}
	</div>
)).add('disabled', () => (
	<div>
		{['primary', 'secondary', 'info', 'success', 'warning', 'danger', 'light', 'dark'].map(v => (
			<Button key={v} color={v} disabled style={{marginRight: 10}} >Button {v}</Button>
		))}
	</div>
)).add('outline', () => (
	<div>
		{['primary', 'secondary', 'info', 'success', 'warning', 'danger', 'light', 'dark'].map(v => (
			<Button key={v} color={v} outline style={{marginRight: 10}} >Button {v}</Button>
		))}
	</div>
)).add('outline disabled', () => (
	<div>
		{['primary', 'secondary', 'info', 'success', 'warning', 'danger', 'light', 'dark'].map(v => (
			<Button key={v} color={v} outline disabled style={{marginRight: 10}} >Button {v}</Button>
		))}
	</div>
)).add('active', () => (
	<Button color="primary" active >Click-me</Button>
));
