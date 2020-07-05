const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    module: {
        rules: [
            {
              test: /\.js$/,

              //add exclude
              exclude: /node_modules/,
              loader: 'babel-loader'
            },
            {
              test: /\.less$/,
              use: ['style-loader', 'css-loader', 'less-loader'],
            },

            //add
            {
                test: /\.(png|jpeg|jpg|gif|ico)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images',
                        name: '[name]-[sha1:hash:7].[ext]'
                    }
                }]
            },

            //add
            {
                test: /\.(ttf|otf|eot|woff|woff2)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'fonts',
                        name: '[name].[ext]'
                    }
                }]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    devServer: {
        open: true,
    }
}
