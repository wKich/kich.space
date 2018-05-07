const fs = require('fs')
const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: { server: './server.ts' },
  resolve: { extensions: ['.ts', '.js'] },
  target: 'node',
  mode: 'none',
  node: { __dirname: true },
  externals: [nodeExternals()],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [{ test: /\.ts$/, loader: 'ts-loader' }],
  },
  plugins: [],
}
