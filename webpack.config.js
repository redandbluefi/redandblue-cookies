const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Set different CSS extraction for editor only and common block styles
const blocksCSSPlugin = new ExtractTextPlugin({
	filename: './dist/css/style.css'
});

// Configuration for the ExtractTextPlugin.
const extractConfig = {
	use: [
		{ loader: 'raw-loader' },
		{
			loader: 'postcss-loader',
			options: {
				plugins: [
					require('autoprefixer')
				]
			}
		},
		{
			loader: 'stylus-loader',
			query: {
				outputStyle: 'production' === process.env.NODE_ENV ? 'compressed' : 'nested'
			}
		}
	]
};

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
			},
			{
				test: /style\.styl$/,
				use: blocksCSSPlugin.extract(extractConfig)
			}
		]
	},
	plugins: [
		blocksCSSPlugin
	]
};
