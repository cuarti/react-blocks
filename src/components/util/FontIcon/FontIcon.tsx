
import * as React from 'react';
import {PureComponent, ReactNode, HTMLAttributes} from 'react';
import {TReactCSSThemrTheme} from 'react-css-themr';

import {Themr, Style, StyledProps} from '../../../util';

const theme = require('./FontIcon.scss');
require('../../../style/_fonticons.scss');


export interface FontIconTheme extends TReactCSSThemrTheme {
	icon?: string;
	[icon: string]: string;
}

export interface FontIconProps extends StyledProps<FontIconTheme>, HTMLAttributes<HTMLElement> {
	value: string;
}

@Themr(FontIcon.name, theme)
export class FontIcon extends PureComponent<FontIconProps> {

	public constructor(props?: FontIconProps, context?: any) {
		super(props, context);
	}

	public render(): ReactNode {

		let {theme, className, value, ...rest} = this.props;
		let [,provider, icon] = /^([^\.]+)\.(.+)$/.exec(value);

		className = Style.classNames(
			theme.icon,
			theme[provider],
			theme[icon],
			className
		);

		console.log(theme);
		console.log(className);

		return (
			<i className={className} {...rest} />
		);

	}

}
