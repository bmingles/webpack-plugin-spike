const MyPlugin = require('./dist/plugin').MyPlugin;
const path = require('path');

module.exports = {
  entry: [
    './demo/src'
  ],
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'demo/dist')
  },
  plugins: [
    new MyPlugin()
  ]
};