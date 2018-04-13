
import {CSSProperties} from 'react';


/**
 * Utility module to work with classnames and styles
 */
export module Style {

	export function classNames(classNames: string[]): string;
	export function classNames(...classNames: string[]): string;
	export function classNames(classNames: {[name: string]: boolean}): string;

	/**
	 * Merge class names in a string
	 *
	 * @param   classNames  List of class names
	 * @return              Concatenated class names
	 */
	export function classNames(...classNames: any[]): string {

		if(typeof classNames[0] === 'object') {
			classNames = classNames[0];
		}

		if(!(classNames instanceof Array)) {
			// TODO: Abstract in @agama/types object filter iterator
			classNames = Object.keys(classNames).filter(k => classNames[k]);
		}

		return classNames.filter(c => typeof c === 'string').join(' ');
	}

	/**
	 * Merge list of css properties
	 *
	 * @param   styles  List of css properties
	 * @return          Merged css properties
	 */
	export function merge(...styles: CSSProperties[]): CSSProperties {

		return styles.reduce((r, s) => {

			for(let i in s) {
				if(s.hasOwnProperty(i)) {
					r[i] = s[i];
				}
			}

			return r;
		}, {});
	}

}
