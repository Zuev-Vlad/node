const path = require('path');
const defPath = {
    build: path.resolve(__dirname, 'public/build'),
    src: path.resolve(__dirname, 'src'),
}
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: {
        test: defPath.src + '/js/test.js',
        rootApp: defPath.src + '/js/app.js',
    },
    output: {
        filename: "js/[name].js?[contenthash]",
        path: defPath.build,
    },
    plugins: [new MiniCssExtractPlugin({
        filename: 'css/[name].css',
    })],

    module: {
        rules: [{
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-react"],
                        plugins: ["transform-regenerator"],
                    }
                }
            },
            {
                test: /\.less$/i,
                use: [MiniCssExtractPlugin.loader,
                    "css-loader",
                    "less-loader",
                ],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader,
                    "css-loader",
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|png|jpg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'url-loader',
                }, ]
            },
        ]
    }
};