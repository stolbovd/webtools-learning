const path = require('path');

module.exports = {
	// devtool: 'source-map', // any "source-map"-like devtool is possible
	mode: 'production',
	// entry: './src/app.ts',
	module: {
		rules: [{
			test: /\.tsx?$/,
			use: 'ts-loader',
			exclude: /node_modules/,
		}, {
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader',
				'sass-loader'
			]
		}, {
			// }, {
			// 	test: /\.css$/,
			// 	use: [
			// 		// style-loader
			// 		{loader: 'style-loader'},
			// 		// css-loader
			// 		{
			// 			loader: 'css-loader',
			// 			options: {
			// 				modules: true
			// 			}
			// 		},
			// 		// sass-loader
			// 		{loader: 'sass-loader'}
			// 	]
			// }, {
			// 	test: /\.s[ac]ss$/i,
			// 	use: [
			// 		// Creates `style` nodes from JS strings
			// 		'style-loader',
			// 		// Translates CSS into CommonJS
			// 		{
			// 			loader: 'css-loader',
			// 			options: {
			// 				sourceMap: false,
			// 			},
			// 		},
			// 		// Compiles Sass to CSS
			// 		{
			// 			loader: 'sass-loader',
			// 			options: {
			// 				// Prefer `dart-sass`
			// 				// implementation: require('sass'),
			// 				// sassOptions: {
			// 				// 	// fiber: require('fibers'),
			// 				sourceMap: false,
			// 				// 	webpackImporter: false,
			// 				// },
			// 			},
			// 		},
			// 	],
		},]
	},
	resolve: {
		extensions: ['.ts', '.js', '.sass', 'css'],
	},
	output: {
		// filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	}
};