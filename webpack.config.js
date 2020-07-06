const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env = {}) => {
    const { mode = 'development'} = env;

    const isProd = mode === 'production';

    const getStyleLoaders = () => {
        return [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'less-loader',
        ]
    };

    const getPlugins = () => {
        const plugins = [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            }),
        ];

        if (isProd) {
           plugins.push(new MiniCssExtractPlugin({
               filename: 'main-[hash:8].css'
           }));
        }

        return plugins;
    };

    return {
        entry: './src/index.tsx',
        devtool: 'inline-source-map',
        mode: isProd ? "production" : "development",
        output: {
            filename: isProd ? 'main-[hash:8].js' : 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            // publicPath: 'dist'
        },
        module: {
            rules: [
                {
                    test: /\.js|jsx$/,

                    //add exclude
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.(le|c)ss$/,
                    use: getStyleLoaders(),
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
        plugins: getPlugins(),
        resolve: {
            extensions: [ '.tsx', '.ts', '.js', '.jsx' ],
            alias: {
                'components': path.resolve(__dirname, 'src/components'),
                'pages': path.resolve(__dirname, 'src/pages'),
            }
        },
        devServer: {
            open: true,
        }
    }

}
