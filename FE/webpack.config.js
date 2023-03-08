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
      filename: 'index.js',
      clean: true,
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
            isProduction
              ? MiniCssExtractPlugin.loader
              : 'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: '[hash].[ext]',
            options: {
              encoding: 'binary',
            },
          },
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
            from: 'src/assets/img/**/*.{jpeg,jpg,png,gif,svg}',
            to: '/img',
          },
          // {
          //   from: 'src/assets/fonts/*.{woff2,woff,eot,ttf,otf}',
          //   to: '/fonts',
          // },
        ],
      }),
    ],
    resolve: {
      extensions: [
        '.js',
        '.ts',
        '.tsx',
        '.json',
        '.wasm',
        '.mjs',
        '.cjs',
      ],
    },
    devServer: {
      static: path.join(__dirname, 'src'),
      port: 3000,
      open: true,
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
                ['gifsicle', { interlaced: true }],
                ['jpegtran', { progressive: true }],
                ['optipng', { optimizationLevel: 5 }],
                // Svgo configuration here https://github.com/svg/svgo#configuration
                [
                  'svgo',
                  {
                    plugins: [
                      {
                        name: 'preset-default',
                        params: {
                          overrides: {
                            removeViewBox: false,
                            addAttributesToSVGElement: {
                              params: {
                                attributes: [
                                  {
                                    xmlns:
                                      'http://www.w3.org/2000/svg',
                                  },
                                ],
                              },
                            },
                          },
                        },
                      },
                    ],
                  },
                ],
              ],
            },
          },
        }),
      ],
    },
  };

  return conf;
};
