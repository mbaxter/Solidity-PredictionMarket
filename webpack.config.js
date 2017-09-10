"use strict";
const autoprefixer = require('autoprefixer');

module.exports = {
	entry: "./src/index.js",
	output: {
		path: __dirname + "/public/js",
		filename: "app.js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ["es2015", "react"],
					plugins: ["transform-object-rest-spread", "transform-bluebird"]
				}
			},
			{
				test:   /\.css$/,
				loader: "style!css!postcss-loader"
			},
			{
				test: '/\.json$/',
				loader: 'json-loader'
			}
		]
	},
	plugins: [],
	externals: {
		"web3": "Web3",
		"jquery": "$",
		"react": "React",
		"react-dom": "ReactDOM",
		"react-router": "ReactRouter"
	},
	postcss: [
		autoprefixer({ browsers: ['last 2 versions', '> 1%', '> 1% in US']})
	]
};