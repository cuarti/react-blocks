
import * as React from 'react';
import {PureComponent, ReactNode, FormEvent} from 'react';
import {TReactCSSThemrTheme} from 'react-css-themr';

import {Bind, Themr, Style, StyledProps} from '../../../util';


export interface FormTheme extends TReactCSSThemrTheme {
	form?: string;
}

export interface FormProps extends StyledProps<FormTheme> {
	children?: ReactNode;
	onSubmit?(): void;
}

@Themr(Form.name)
export class Form extends PureComponent<FormProps> {

	public constructor(props?: FormProps, context?: any) {
		super(props, context);
	}

	public render(): ReactNode {

		let {style, className, theme, children} = this.props;

		className = Style.classNames(className, theme.form);

		return (
			<form style={style}
				  className={className}
				  onSubmit={this.onFormSubmitHandle} >

				{children}

			</form>
		);
	}

	@Bind()
	private onFormSubmitHandle(event: FormEvent<HTMLFormElement>): void {

		event.preventDefault();
		event.stopPropagation();

		let {onSubmit} = this.props;

		if(onSubmit) {
			onSubmit();
		}

	}

}
