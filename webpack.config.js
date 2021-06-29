import nodeExternals from 'webpack-node-externals'

const server = {
    target:'node',
    entry: `${process.cwd()}/src/index.js`,
    output: {
        filename: 'main.js'
    },
    mode: 'production',
    externals: [nodeExternals()],
}

const client = {
    entry: `${process.cwd()}/src/threed.js`,
    output: {
        filename: '3d.js',
        path: process.cwd() + '/public/js'
    },
    mode: 'development',
    devtool: false
}

export default [server, client]