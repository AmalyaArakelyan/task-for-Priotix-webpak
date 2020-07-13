const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlagin = require ('copy-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  // context: path.resolve(__dirname, '/'),
  mode: 'development',
  entry: ['@babel/polyfill', path.resolve(__dirname)],
  output: {
    filename:'./build.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/' ,
  },
  resolve:{
    alias: {
      '@components':path.resolve(__dirname, './src/components'),
      '@style': path.join(__dirname, './src/assets/styles') 
    },
  },
  devServer: {
    port: 5000,
    compress: true,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      minify:{
        collapseWhitespace: !isDev
      }
    }),
    new CopyWebpackPlagin([
      {
        from: path.resolve(__dirname, 'public/favicon.png'),
        to: path.resolve(__dirname, 'build')
      }

    ]),
  ],
  module:{
    rules:[
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader:'babel-loader',
          options: {
            presets: ['@babel/preset-env', "@babel/react"],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.(png|jpg|svg|gif|jpeg)$/,
        use:['file-loader']
      },
      {
        test: /\.css$/,
        use:['file-loader', 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ]
  }
};
