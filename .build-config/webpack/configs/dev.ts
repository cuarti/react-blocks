
import {PUB_DIR} from '../../variables';
import {basic} from './basic';
import {scriptRule, devStyleRule, fontRule} from '../rules';
import {namedModulesPlugin, devEnvPlugin, hmrPlugin} from '../plugins';


/*
 * Development
 * --------------
 *
 * postcss
 */
export const dev = {

	...basic,

	name: 'dev',

	mode: 'development',

	// TODO: Search best devtool for development with hmr
	// devtool: 'cheap-module-eval-source-map',

	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./index.ts'
	],

	module: {
		rules: [
			scriptRule,
			devStyleRule,
			fontRule
		]
	},

	plugins: [
		...basic.plugins,
		namedModulesPlugin,
		devEnvPlugin,
		hmrPlugin
	],

	devServer: {
		hot: true,
		contentBase: PUB_DIR,
		publicPath: '/'
	}

};
