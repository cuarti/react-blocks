
import * as React from 'react';
import {PureComponent, ReactNode, HTMLAttributes} from 'react';
import {TReactCSSThemrTheme} from 'react-css-themr';

import {Themr, Style, StyledProps} from '../../../util';

const theme = require('./FontIcon.scss');
const iconfonts = require('../../../style/iconfonts.scss');


export interface FontIconTheme extends TReactCSSThemrTheme {
	icon?: string;
	[icon: string]: string;
}

// TODO: Don't extend from HTMLAttributes<HTMLSpanElement>
export interface FontIconProps extends StyledProps<FontIconTheme>, HTMLAttributes<HTMLSpanElement> {
	value: string;
}

@Themr(FontIcon.name, theme)
export class FontIcon extends PureComponent<FontIconProps> {

	public constructor(props?: FontIconProps, context?: any) {
		super(props, context);
	}

	public render(): ReactNode {

		let {theme, className, value, ...rest} = this.props;

		let [, provider, icon] = value.includes('.')
			? /^([^.]+)\.(.+)$/.exec(value)
			: [undefined, 'default', value];

		className = Style.classNames(
			theme.icon,
			iconfonts[`${provider}-${icon}`],
			className
		);

		return <span className={className} {...rest} />;

	}

}
