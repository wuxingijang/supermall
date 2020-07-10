module.exports={
    configureWebpack:{
      /*devServer:{
        proxy:{
          '^/api':{
            target:"http://127.0.0.1:8000",
            changeOrigin: true,
            pathRewriter:{
              '^/api':''
            }
          }
        }
      },*/
        resolve:{
            /* 配置 别名*/
            alias:{
                'assets':'@/assets',
                'common':'@/common',
                'network':'@/network',
                'components':'@/components',
                'views':'@/views',
                'setswiper':'@/swiper'
            },

        },

    }
    }
