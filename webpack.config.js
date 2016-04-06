var path = require('path');

module.exports = {
	entry: './src/js/main.js',
	output: {
		filename: './bundle.js',
		sourceMapFilename: './bundle.map' 
	},
	devtool: '#source-map',
	module: {
		loaders: [
			{
				test: /\.jsx?$/i,
				loader: 'babel', 
				exclude: /node_modules/,
				query: {
					presets: ['react', 'es2015', 'stage-2']
				}
			}, 
			{
				test: /\.css$/i,
				loader: 'style!css'
			}
		]
	},
	resolve: {
		root: path.resolve('./src')
	}
};