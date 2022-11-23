const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
//   devServer: {
//     hot: true,
//     open: true,
//   },
  devServer: { 
    historyApiFallback: true,
    // port: 8080, 
    // open: true,
    proxy: { "/api/v1/login": { target: 'http://localhost:4000', secure: false }  }
  },
  plugins: [
    // new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Vaibhav'),
    }),
  ],
}
