const path = require('path')
const webpack = require('webpack')
const isDev = process.env.NODE_ENV
const mode = isDev === 'development' ? 'development' : 'production'
const htmlPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const config = {
  target: 'web',
  mode: mode,
  entry: {
    'main': './src/index.js',
    'a': './src/a.js'
  },
  output: {
    filename: 'js/[name]-[hash].js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: 'http://www.panxinyi.com'
  },
  module: {
    rules: [
      {
        test:/\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.styl/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            },
          },
          'stylus-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {loader: 'css-loader', options: {importLoaders: 1}},
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            },
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            },
          }, 'sass-loader']
      },
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: ['babel-loader']
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.tpl/,
        use: ['ejs-loader']
      },
      {
        test: /\.(gif|png|jpg|jpeg|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name (file) {
                if (mode === 'development') {
                  return 'assets/image/[name]-[hash:5].[ext]'
                }
                return '[name]-[hash:5].[ext]'
              },
              // regExp: /\/([a-z0-9]+)\/[a-z0-9]+\.jpg$/,
              // name: '[name].[ext]',
              limit: 1024
            }
          },
          {
            loader: 'image-webpack-loader',
          }
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  },
  plugins: [
    //webpack-dev-server热更新
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': isDev === 'development' ? '"development"' : '"production"'
      }
    }),
    new htmlPlugin({}),
    new VueLoaderPlugin()
  ]
}
if (isDev === 'development') {
  config.devServer = {
    port: 9001,
    host: '0.0.0.0',
    overlay: {
      errors: true
    },
    contentBase: path.join(__dirname, "dist"),
    hot: true,
    inline: true
  }
}

module.exports = config