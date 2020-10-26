const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        'index' : '/sass/index.scss',
        'product' : '/sass/product.scss',
        'product_detail' : '/sass/product_detail.scss',
        'about_us' : '/sass/about_us.scss',
        'address' : '/sass/address.scss',
        'news' : '/sass/news.scss',
        'login' : '/sass/login.scss',
        'signup' : '/sass/signup.scss',
        'cart' : '/sass/cart.scss',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: '/css/[name].css',
            // chunkFilename: "/css/[name].css"
        })
    ]
};