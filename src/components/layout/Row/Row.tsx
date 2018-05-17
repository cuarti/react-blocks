
import * as React from 'react';
import {PureComponent, ReactNode, HTMLAttributes} from 'react';
import {TReactCSSThemrTheme} from 'react-css-themr';

import {Themr, Style, StyledProps} from '../../../util';

const theme = require('./Row.scss');


export interface RowTheme extends TReactCSSThemrTheme {
	row?: string;
}

// TODO: Don't extend from HTMLAttributes<HTMLDivElement>
export type RowProps = StyledProps<RowTheme> & HTMLAttributes<HTMLDivElement>;

@Themr(Row.name, theme)
export class Row extends PureComponent<RowProps> {

	public constructor(props?: RowProps, context?: any) {
		super(props, context);
	}

	public render(): ReactNode {

		let {theme, className, children, ...rest} = this.props;

		className = Style.classNames(theme.row, className);

		return <div className={className} {...rest} >{children}</div>;

	}

}
