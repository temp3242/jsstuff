const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    mode: 'production',
    output: {filename:'bundle.js'},
    externals: [nodeExternals()],
    plugins: [new webpack.IgnorePlugin(/canvas/)],
    target:'node'
}