
import {ReactNode} from 'react';


// TODO: Mirar si hay una interficie propia de react para definir esto
// TODO: Es necesario? Si pueda definir el tipo de hijo si
export interface ReactParent {
	children?: ReactNode;
}

// export interface ReactParent<T = ReactNode> {
//     children: T;
// }

