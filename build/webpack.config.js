const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry:
    ['babel-polyfill', path.resolve(__dirname, '../src/index.js')],
  target: 'node', // webpack将编译以在Node.js的环境中使用
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '',
    filename: 'koa2_mongoose_demo.js'
  },
  module: {
    rules: [
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  plugins: [
    new webpack.IgnorePlugin(/vertx/),
    new webpack.DefinePlugin({
      'process.env.FLUENTFFMPEG_COV': false,
      'process.env.LIB_COV': false
    })
    // new CopyWebpackPlugin([{
    //   from: 'ecosystem.config.js',
    //   to:'./'
    // }], {
    //   ignore: [],
    //   copyUnmodified: true,
    //   debug:'debug'
    // })
  ],
  mode: 'production',
  externals: [
    // nodeExternals(),
    // new babiliPlugin()
  ],
  devtool: '#eval-source-map'
}
