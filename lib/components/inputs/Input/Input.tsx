
import * as React from 'react';
import {PureComponent, ReactNode, InputHTMLAttributes} from 'react';
import {TReactCSSThemrTheme} from 'react-css-themr';

import {Bind, Themr, Style, StyledProps} from '../../../util';

const theme = require('./Input.scss');


export interface InputTheme extends TReactCSSThemrTheme {
	input?: string;
}

// TODO: Don't extend from InputHTMLAttributes<HTMLInputElement>
export interface InputProps extends StyledProps<InputTheme>, InputHTMLAttributes<HTMLInputElement> {
	// defaultValue?: any;
	// value?: any;
	onValue?: (newValue: any, oldValue: any) => void;
}

export interface InputState {
	value?: any;
}

@Themr(Input.name, theme)
export class Input extends PureComponent<InputProps, InputState> {

	public static defaultProps: Partial<InputProps> = {
		type: 'text'
	};

	public constructor(props?: InputProps, context?: any) {
		super(props, context);

		this.state = {value: this.parse(this.props.defaultValue as any || this.props.value)};
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
		let {value} = this.state;

		className = Style.classNames(theme.input, className);

		return <input className={className} {...rest} value={value} onChange={this.onChange} />;
	}

	@Bind()
	private onChange(event: any): void {

		let {onValue, onChange} = this.props;
		let {value: oldValue} = this.state;
		let value = this.parse(event.target.value);

		if(onChange) {
			onChange(event);
		}

		this.setState({value}, () => {
			if(onValue) {
				onValue(value, oldValue);
			}
		});

	}

	private parse(data: string): any {
		return this.props.type === 'number' ? Number(data) : data;
	}

}
