module.exports = {
    lintOnSave: false, // 关闭eslint
    devServer: {
        proxy: {
            '/api': {
                target:'http://localhost',
                pathRewrite: {'^/api':''},
            },
        },
    },
}
