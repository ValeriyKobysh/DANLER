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
        card: './src/view/card/card.js',
        category: './src/view/category/category.js',
        products: './src/view/products/products.js',
        articles: './src/view/articles/articles.js',
        article: './src/view/article/article.js',
        contacts: './src/view/contacts/contacts.js',
        order: './src/view/order/order.js',
        reviews: './src/view/reviews/reviews.js'
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
        new HtmlWebpackPlugin(
            {
                filename: 'card.html',
                chunks: ['card', 'common'],
                template: PATH.src + '/view/card/card.pug'
            }
        ),
        new HtmlWebpackPlugin(
            {
                filename: 'category.html',
                chunks: ['category', 'common'],
                template: PATH.src + '/view/category/category.pug'
            }
        ),
        new HtmlWebpackPlugin(
            {
                filename: 'products.html',
                chunks: ['products', 'common'],
                template: PATH.src + '/view/products/products.pug'
            }
        ),
        new HtmlWebpackPlugin(
            {
                filename: 'articles.html',
                chunks: ['articles', 'common'],
                template: PATH.src + '/view/articles/articles.pug'
            }
        ),
        new HtmlWebpackPlugin(
            {
                filename: 'article.html',
                chunks: ['article', 'common'],
                template: PATH.src + '/view/article/article.pug'
            }
        ),
        new HtmlWebpackPlugin(
            {
                filename: 'contacts.html',
                chunks: ['contacts', 'common'],
                template: PATH.src + '/view/contacts/contacts.pug'
            }
        ),
        new HtmlWebpackPlugin(
            {
                filename: 'order.html',
                chunks: ['order', 'common'],
                template: PATH.src + '/view/order/order.pug'
            }
        ),
        new HtmlWebpackPlugin(
            {
                filename: 'reviews.html',
                chunks: ['reviews', 'common'],
                template: PATH.src + '/view/reviews/reviews.pug'
            }
        ),
        new CleanWebpackPlugin('dist'),
        new ExtractTextPlugin('./css/[name].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
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
                test: /\.scss$/,
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
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
              },
        ]
    },
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' для webpack 1
        }
      }
}