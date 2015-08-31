var config = require("./webpack.config"),
	webpack = require("webpack"),
	WebpackDevServer = require('webpack-dev-server');

new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true,
	stats: {
		colors: true
	}
}).listen(3000, function(err){
	if( err ){
		console.log(err);
	} 
	console.log("listening on port 3000");
});