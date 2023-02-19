const path = require('path');
const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  mode: 'development',
  watch: true,
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    path: `${DIST_DIR}`,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader'},
          { loader: 'css-loader' }
        ]
      }
    ]
  }
}
