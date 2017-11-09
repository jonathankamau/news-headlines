const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

var config = {
   entry: './src/main.js', // entry point
   output: {
         filename: 'app.js', // place where bundled app will be served
         
      },
   devServer: {
         inline: true, // autorefresh
         port: 8080 // development port server
      },
   module: {
         loaders: [
            {
               test: /\.jsx?$/, // search for js files 
               exclude: /node_modules/,
               loader: 'babel-loader',
         }
      ]
   },
   plugins: [HtmlWebpackPluginConfig]
}
module.exports = config;
