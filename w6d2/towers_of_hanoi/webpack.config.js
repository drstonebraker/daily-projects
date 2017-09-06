var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
                    entry: './skeleton/js/main.js',
                    output: {filename: './skeleton/js/bundle.js'},
                    devtool: 'source-map',
                    plugins: [new LiveReloadPlugin()]
                  };
