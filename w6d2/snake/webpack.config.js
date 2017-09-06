var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
                    entry: './js/main.js',
                    output: {filename: './js/bundle.js'},
                    devtool: 'source-map',
                    plugins: [new LiveReloadPlugin()]
                  };
