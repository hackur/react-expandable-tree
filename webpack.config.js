/* eslint no-console: off */
/* global module, __dirname */

module.exports = function (env) {
	console.log('\nMODE is', env)
	let entry = "./src/nav.jsx"

	if (env === 'dev') {
		entry = "./index.jsx"
	}
	console.log('entry is', entry, '\n')

	return {
		entry,
		output: {
			path: __dirname,
			filename: "lib/bundle.js",
			library: "WebpackExpandableTree",
			libraryTarget: 'umd',
			umdNamedDefine: true
		},
		module: {
			loaders: [{
				test: /\.css$/,
				loaders: [
					'style-loader',
					'css-loader',
					'postcss-loader'
				],
			},
			{
				test: /\.scss$/,
				loaders: [
					'style-loader',
					'css-loader',
					'sass-loader',
					'postcss-loader'
				]
			},
			{
				test: /\.jsx$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {presets: ['es2015', 'react', 'stage-1']}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {presets: ['es2015']}
			}]
		}
	}
}
