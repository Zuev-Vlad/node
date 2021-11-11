module.exports = {
    plugins: [
        "transform-regenerator",
        "@babel/plugin-transform-runtime"
    ],
    presets: ['@babel/preset-env', '@babel/preset-react'],
}