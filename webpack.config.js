const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack')

module.exports = {
    mode: 'production',
    output: {filename:'bundle.js'},
    externals: [nodeExternals()],
    plugins: [new webpack.IgnorePlugin(/canvas/)],
    target:'node'
}