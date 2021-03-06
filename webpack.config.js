var path = require('path');

var webpack = require('webpack');

var packageData = require('./package.json');

var filename = [packageData.name, packageData.version, 'js'];

module.exports = {
    entry: path.resolve(__dirname, 'src/js/index.jsx'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: filename.join('.')
    },
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react'],
                plugins: ["transform-object-rest-spread"]
            }
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
