"use strict";
const autoprefixer = require('autoprefixer');

module.exports = {
	entry: "./app/src/index.js",
	output: {
		path: __dirname + "/app/public/js",
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
			}
		]
	},
	plugins: [],
	externals: {
		"jquery": "$",
		"react": "React",
		"react-dom": "ReactDOM",
		"react-router": "ReactRouter"
	},
	postcss: [
		autoprefixer({ browsers: ['last 2 versions', '> 1%', '> 1% in US']})
	]
};