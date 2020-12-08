const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const { rules } = require('eslint-config-prettier');

const path = require('path');

module.exports = {
  ...defaultConfig,
  entry: {
    'modsnap-cards-block': './js/ms-cards-block.js',
  },
  output: {
    path: path.join(__dirname, '/build/js/'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: path.join(__dirname, '.'),
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/react',
            {
              plugins: ['@babel/plugin-proposal-class-properties'],
            },
          ],
        },
      },
    ],
  },
};
