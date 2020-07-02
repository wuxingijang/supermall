module.exports={
    configureWebpack:{
        resolve:{
            /* 配置 别名*/
            alias:{
                'assets':'@/assets',
                'common':'@/common',
                'network':'@/network',
                'components':'@/components',
                'views':'@/views',
            }
        }
    }
}