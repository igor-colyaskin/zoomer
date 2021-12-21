const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: "development",
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // assetModuleFilename: 'assets/[name][ext]'
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "webpack template",
      template: path.resolve(__dirname, './src/template.html'),
      filename: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin()
    // {
    //   'postcss-preset-env': {
    //     browsers: 'last 2 versions'
    //   }
    // }
  ],
  module: {
    rules: [
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]'
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline'
      },
      {
        test: /\.scss|css$/,
        // use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}
