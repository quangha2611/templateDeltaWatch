const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        'index' : '/sass/index.scss',
        'product' : '/sass/product.scss',
        'product_detail' : '/sass/product_detail.scss',
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