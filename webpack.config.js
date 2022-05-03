const path = require('path')

module.exports = {
	entry: './src/index.tsx',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: [ "style-loader", 'css-loader' ]
			},
			{
				test: /\.sass$/,
				use: [ "style-loader", 'css-loader', 'sass-loader' ]
			},
			{
				test: /apikey/,
				type: 'asset/source',
			}
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	devServer: {
		port: 3000,
		open: true,
		hot: true
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
	},
}
