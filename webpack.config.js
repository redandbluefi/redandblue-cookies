const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
		'./dist/js/index': './src/index.js'
	},
	output: {
		path: path.resolve(__dirname),
		filename: '[name].js'
	},
	watch: 'production' !== process.env.NODE_ENV,
	devtool: 'cheap-eval-source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	}
};
