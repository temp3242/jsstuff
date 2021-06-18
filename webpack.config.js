const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack')
const path = require('path')

const server = {
    target:'node',
    entry:path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'main.js'
    },
    mode: 'production',
    externals: [nodeExternals()],
    plugins: [new webpack.IgnorePlugin(/canvas/)]
}

const client = {
    entry: path.join(__dirname, 'src/threed.js'),
    output: {
        filename: '3d.js',
        path: path.join(__dirname, '/public/js')
    },
    mode: 'production'
}

module.exports = [server, client]


/*module.exports = {
    entry: {
        main:path.join(__dirname, 'src/index.js'),
        '3d':{import:'./src/threed.js', filename:'../public/js/threed.js'}
    },
    mode: 'production',
    externals: [nodeExternals()],
    plugins: [new webpack.IgnorePlugin(/canvas/)],
    target:'node'
}*/