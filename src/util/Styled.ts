
import {CSSProperties} from 'react';


export interface Styled<T extends object = object> {
	style?: CSSProperties;
	className?: string;
	theme?: T;
}
