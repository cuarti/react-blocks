
import * as React from 'react';
import {PureComponent, ReactNode, HTMLAttributes} from 'react';
import {TReactCSSThemrTheme} from 'react-css-themr';

import {Themr, Style, StyledProps} from '../../../util';

const theme = require('./Container.scss');


export interface ContainerTheme extends TReactCSSThemrTheme {
	container?: string;
	static?: string;
}

// TODO: Don't extend from HTMLAttributes<HTMLDivElement>
export interface ContainerProps extends StyledProps<ContainerTheme>, HTMLAttributes<HTMLDivElement> {
	fluid?: boolean;
}

// TODO: Add size of container
@Themr(Container.name, theme)
export class Container extends PureComponent<ContainerProps> {

	public constructor(props?: ContainerProps, context?: any) {
		super(props, context);
	}

	public render(): ReactNode {

		let {theme, className, fluid, children, ...rest} = this.props;

		className = Style.classNames(
			theme.container,
			className,
			{
				[theme.static]: !fluid
			}
		);

		return <div className={className} {...rest} >{children}</div>;

	}

}
