const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  const _env = isProduction ? '.env.production' : '.env.development';

  const conf = {
    entry: path.join(__dirname, 'src', 'index.tsx'),
    output: {
      path: path.join(__dirname, 'build'),
      publicPath: '/',
      filename: 'index.js',
      clean: true,
    },
    devServer: {
      static: path.join(__dirname, 'src'),
      port: 3000,
      open: true,
      historyApiFallback: true,
    },
    devtool: isProduction ? false : 'eval-cheap-module-source-map',
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.(js|css)$/,
          enforce: 'pre',
          use: ['source-map-loader'],
        },
        {
          test: /\.(scss|css)$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                fallback: 'file-loader',
                name: '[name].[ext]',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new Dotenv({ path: _env }),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'index.html'),
      }),
      new MiniCssExtractPlugin({ filename: 'index.css' }),
      new CopyPlugin({
        patterns: [
          {
            from: 'src/assets/img/**/*.{jpeg,jpg,png}',
            to: '/img',
          },
        ],
      }),
    ],
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.json', '.wasm', '.mjs', '.cjs'],
      resolve: {
        alias: {
          "Containers": path.resolve(__dirname, "src/containers"),
          "Services": path.resolve(__dirname, "src/services"),
          "Hooks": path.resolve(__dirname, "src/hooks"),
          "Components": path.resolve(__dirname, "src/components"),
          "Shared": path.resolve(__dirname, "src/shared"),
          "Assets": path.resolve(__dirname, "src/assets"),
       },
     },
    },
    optimization: {
      minimizer: [
        '...',
        new ImageMinimizerPlugin({
          minimizer: {
            implementation: ImageMinimizerPlugin.imageminMinify,
            options: {
              // Lossless optimization with custom option
              // Feel free to experiment with options for better result for you
              plugins: [
                ['jpegtran', { progressive: true }],
                ['optipng', { optimizationLevel: 5 }],
              ],
            },
          },
        }),
      ],
    },
  };

  return conf;
};
