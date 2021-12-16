const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');
const crypto = require('crypto');
const crypto_orig_createHash = crypto.createHash;
crypto.createHash = (algorithm) =>
  crypto_orig_createHash(algorithm == 'md4' ? 'sha256' : algorithm);

module.exports = merge(commonConfig, {
  mode: 'production',
  plugins: [new CleanWebpackPlugin()],
});
