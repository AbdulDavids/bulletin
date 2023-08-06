const path = require('path');

module.exports = {
  entry: './worker.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  target: 'webworker',
};
