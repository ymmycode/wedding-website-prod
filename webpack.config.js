const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => ({
  mode: argv.mode,
  devtool: argv.mode === 'development' ? 'source-map' : false,
  entry: [
    path.resolve(__dirname, './src/js/app.js'),
    path.resolve(__dirname, './src/css/app.scss'),
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'assets/app.js',
  },
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new OptimizeCSSAssetsPlugin(),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, './src/index.html'),
            to: '[name].[ext]',
          }, 
          {
            from: path.resolve(__dirname, './src/contact/index.html'),
            to: 'contact/[name].[ext]',
          },
          {
            from: 'src/images/*',
            to: 'images/[name].[ext]',
          },
        ],
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      }, 
      
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          }, 
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          }, 
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  ['autoprefixer'],
                ],
              },
            },
          }, 
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },

        ],
      },

      {
        test: /\.(jpg|png|gif|svg)$/,
        use:
        [
            {
                loader: 'file-loader',
                options:
                {
                    outputPath: 'assets/images/'
                }
            }
        ]
    },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/app.css',
    }),
    new CopyPlugin({
      patterns: [
          { from: path.resolve(__dirname, './static') }
      ]
    }),
  ],
  devServer: {
    contentBase: [
      path.join(__dirname, '/src'),
    ],
    host: '127.0.0.1',
    disableHostCheck: true,
    watchContentBase: true,
    compress: true,
    port: 9000,
    open: true,
  },
});
