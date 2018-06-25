
import {CSSProperties} from 'react';
import {TReactCSSThemrTheme} from 'react-css-themr';


export interface StyledProps<T extends TReactCSSThemrTheme = TReactCSSThemrTheme> {
	style?: CSSProperties;
	className?: string;
	theme?: T;
}
