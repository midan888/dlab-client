const path = require('path');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';

dotenv.config();

console.log('API_URL', process.env.API_URL);

const styledComponentsTransformer = createStyledComponentsTransformer({
  getDisplayName (filename, bindingName) {
    const match = filename.match(/(?!.*\/)(?:[^\.]+)/);

    if (match) {
      return `${match[0]}_${bindingName}`;
    }

    console.log('INVALID');
  }
});
const resolve = innerPath => path.resolve(__dirname, innerPath);

const getPublicPath = () => '/';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  name: 'client',
  devtool: isProduction ? false : 'source-map',
  entry: {
    index: './src/index.tsx',
  },
  target: 'web',
  output: {
    publicPath: getPublicPath(),
    path: resolve('build'),
    filename: '[name].[hash:8].js',
    chunkFilename: '[name].[chunkhash:8].chunk.js',
  },
  node: {
    fs: 'empty',
    module: 'empty',
  },
  resolve: {
    modules: [
      resolve('src'),
      'node_modules',
    ],
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'tslint-loader',
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          getCustomTransformers: () => ({ before: [styledComponentsTransformer] })
        }
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        loader: 'url-loader',
        options: {
          name: '[name].[hash:8].[ext]',
          limit: 1,
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
            limit: 1,
          },
        }],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('public/index.html'),
      title: 'Client',
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash:8].css",
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.API_URL': JSON.stringify(process.env.API_URL),
      'process.env.SENTRY_URL': JSON.stringify(process.env.SENTRY_URL),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  devServer: {
    hot: true,
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 8080,
    compress: true,
    historyApiFallback: true,
  },
};
