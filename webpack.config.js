const path = require('path');

module.exports = {
	entry: './src/index.ts',
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: [
					// style-loader
					{loader: 'style-loader'},
					// css-loader
					{
						loader: 'css-loader',
						options: {
							modules: true
						}
					},
					// sass-loader
					{loader: 'sass-loader'}
				]
			}
		]
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	}
};