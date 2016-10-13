var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        app: __dirname + '/public/react/main.jsx',
        vendor: ['react', 'react-dom']
    },
    output: {
        filename: 'app.bundle.js',
        path: __dirname + '/public/build'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
    ]
}
