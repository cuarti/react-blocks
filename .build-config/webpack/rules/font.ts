
import {fileLoader} from '../loaders';


export const fontRule = {
	test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
	loaders: [
		fileLoader
	]
};
