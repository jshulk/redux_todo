var path = require("path"),
	webpack = require('webpack');
var config = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'./index'
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "bundle.js",
		publicPath: "/static/"
	},
	module: {
		loaders: {
			test: /\.jsx?$/,
			exclude: /node_modules/,
			inclue: __dirname,
			loaders: ['react-hot', 'babel']
		}
	},
	plugins: [
		 new webpack.HotModuleReplacementPlugin()
	]
};

module.exports = config;