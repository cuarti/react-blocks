
import {CSSProperties} from 'react';


/**
 * Utility module to work with classnames and styles
 */
export module Style {

	/**
	 * Merge class names in a string
	 *
	 * @param	classNames	List of class names
	 * @return				Concatenated class names
	 */
	export function classNames(...classNames: Array<string | Record<string, boolean>>): string {

		return classNames.reduce((r, v) => {

			if(typeof v === 'object') {
				// TODO: Abstract in @agama/types object filter iterator
				return r.concat(Object.keys(v).filter(k => !!k && v[k]));
			}

			return r.concat(v);

		// TODO: Abstract in @agama/types array uniques modifier
		}, []).filter((v, i, a) => a.slice(0, i).indexOf(v) < 0).join(' ');

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
