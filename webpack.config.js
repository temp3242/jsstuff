import nodeExternals from 'webpack-node-externals'
import webpack from 'webpack'
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const server = {
    target:'node',
    entry: join(__dirname, 'src/index.js'),
    output: {
        filename: 'main.js'
    },
    mode: 'production',
    externals: [nodeExternals()],
    plugins: [new webpack.IgnorePlugin(/canvas/)]
}

const client = {
    entry: join(__dirname, 'src/threed.js'),
    output: {
        filename: '3d.js',
        path: join(__dirname, '/public/js')
    },
    mode: 'development'
}

export default [server, client]