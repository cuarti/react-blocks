
import * as React from 'react';
import {PureComponent, ReactNode, InputHTMLAttributes} from 'react';
import {TReactCSSThemrTheme} from 'react-css-themr';

import {Bind, Themr, Style, StyledProps} from '../../../util';

const theme = require('./Input.scss');


export interface InputTheme extends TReactCSSThemrTheme {
	input?: string;
}

export interface InputProps extends StyledProps<InputTheme>, InputHTMLAttributes<HTMLInputElement> {
	// defaultValue?: any;
	// value?: any;
	// onChange?: (data: any) => void;
}

export interface InputState {
	value?: any;
}

@Themr(Input.name, theme)
export class Input extends PureComponent<InputProps, InputState> {

	public constructor(props?: InputProps, context?: any) {
		super(props, context);

		this.state = {value: this.props.defaultValue || this.props.value};
	}

	public componentWillReceiveProps(nextProps: InputProps): void {

		// console.log(nextProps.value, this.state.value, nextProps.value && nextProps.value !== this.state.value);
		// if(nextProps.value !== this.state.value) {
		//     console.log('TRUE');
		//     this.setState({value: nextProps.value});
		// }

		if(this.state.value !== !nextProps.value) {
			this.setState({value: nextProps.value})
		}
	}

	public render(): ReactNode {

		let {theme, className, ...rest} = this.props;

		className = Style.classNames(theme.input, className);

		return <input className={className} {...rest} />;

		// return (
		// 	<input
		// 		   value={this.state.value || ''}
		// 		   onChange={this.onChange} />
		// );

	}

	@Bind()
	private onChange(event: any): void {

		let {onChange} = this.props;
		let {value} = event.target;

		this.setState({value}, () => onChange && this.parse(value));

	}

	private parse(data: string): any {

		return this.props.type !== 'number' ? data : data as any * 1;

	}

}
