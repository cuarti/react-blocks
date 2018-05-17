
import * as React from 'react';
import {PureComponent, ReactNode, HTMLAttributes} from 'react';
import {TReactCSSThemrTheme} from 'react-css-themr';

import {Themr, Style, StyledProps} from '../../../util';

const theme = require('./Col.scss');


export interface ColTheme extends TReactCSSThemrTheme {
	col?: string;
	[size: string]: string;
}

// TODO: Don't extend from HTMLAttributes<HTMLDivElement>
export interface ColProps extends StyledProps<ColTheme>, HTMLAttributes<HTMLDivElement> {
	// @deprecated
	size: number;
	// xs?: number;
	// sm?: number;
	// md?: number;
	// lg?: number;
	// xsOffset?: number;
	// smOffset?: number;
	// mdOffset?: number;
	// mdOffset?: number;
	// lgOffset?: number;
}

// TODO: Añadir responsive y offsets
// TODO: Use flex grid
@Themr(Col.name, theme)
export class Col extends PureComponent<ColProps> {

	public constructor(props?: ColProps, context?: any) {
		super(props, context);
	}

	public render(): ReactNode {

		let {theme, className, size, children, ...rest} = this.props;

		className = Style.classNames(
			theme.col,
			className,
			theme[`col${size}`]
		);

		return <div className={className} {...rest} >{children}</div>;

	}

}
