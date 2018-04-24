
import * as React from 'react';
import {PureComponent, ReactNode, ButtonHTMLAttributes} from 'react';
import {TReactCSSThemrTheme} from 'react-css-themr';

import {Themr, Style, StyledProps} from '../../../util';

const theme = require('./Button.scss');


export interface ButtonTheme extends TReactCSSThemrTheme {
	button?: string;
	outline?: string;
	block?: string;
	active?: string;
}

export interface ButtonProps extends StyledProps<ButtonTheme>, ButtonHTMLAttributes<HTMLButtonElement> {
	color?: string;
	size?: string;
	outline?: boolean;
	block?: boolean;
	active?: boolean;
}

@Themr(Button.name, theme)
export class Button extends PureComponent<ButtonProps> {

    public constructor(props?: ButtonProps, context?: any) {
        super(props, context);
    }

    public render(): ReactNode {

    	let {theme, className, color, size, outline, block, active, children, ...rest} = this.props;

    	className = Style.classNames(
			theme.button,
    		theme[color] as string,
			theme[size] as string,
			className,
			{
				[theme.outline]: outline,
				[theme.block]: block,
				[theme.active]: active
			}
		);

        return (
            <button className={className} {...rest} >
				{children}
            </button>
        );
    }

}
