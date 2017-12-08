const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const PATH = {
    src: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'dist')
}

module.exports = {
    entry: {
        index: './src/view/index/index.js',
        // card: './src/view/card/card.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].js'
    },
    plugins:[
        new HtmlWebpackPlugin(
            {
                filename: 'index.html',
                chunks: ['index', 'common'],
                template: PATH.src + '/view/index/index.pug'
            }
        ),
        // new HtmlWebpackPlugin(
        //     {
        //         filename: 'card.html',
        //         chunks: ['card', 'common'],
        //         template: PATH.src + '/view/card/card.pug'
        //     }
        // ),
        new CleanWebpackPlugin('dist'),
        new ExtractTextPlugin('./css/[name].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.optimize\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: {removeAll: true } },
            canPrint: true
        }),
        // new StyleLintPlugin({
        //     configFile: './.stylelintrc'
        // }),
        new UglifyJsPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: { pretty: true }
            },
            {
                test: /\.sass$/,
                use: ExtractTextPlugin.extract({
                    publicPath: '../',
                    fallback: 'style-loader',
                    use: 'css-loader!autoprefixer-loader!sass-loader'
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'image/'
                }
            }
        ]
    }
}