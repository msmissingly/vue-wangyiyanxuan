const path = require('path')
function resolve (dir) {
    return path.join(__dirname, dir)
}
const px2rem = require('postcss-px2rem')
   
   const postcss = px2rem({
     remUnit: 75   //remUnit = 设计稿/等分数10， 网易严选首页750宽，正好相当于是设计稿宽度，所以值为750/10 = 75
   })
   
   module.exports = {
     css: {
       loaderOptions: {
         postcss: {
           plugins: [
             postcss
           ]
         }
       }
     },
     lintOnSave:false,//不使用eslint
     devServer:{
      open:true,
      //跨的是单域  项目的接口 在4000服务器上
      // proxy: 'http://localhost:4000'
      //如果说项目的接口来至于不同的服务器 4000服务器  5000服务器  6000服务器


       //没有配代理
       //1. 向 devServer 发送了一个ajax请求 http://localhost:8080/4000/position/40.10038,116.36867
       //2. devServer 中没有对应的静态资源
       //3. devServer 发现将url中域去掉之后  /4000/position/40.10038,116.36867 ,没有命中了自己的代理
       //4. 因为此处接收到是ajax请求 所以 devServer 会直接报错 (如果不是ajax请求 是http请求 devServer还是会返回index.html的)

       //配了代理之后
       //1. 向 devServer 发送了一个ajax请求 http://localhost:8080/4000/position/40.10038,116.36867
       //2. devServer 中没有对应的静态资源
       //3. devServer 发现将url中域去掉之后  /4000/position/40.10038,116.36867 命中了自己的代理
       //4. devServer将请求转发给target对应的服务器  到此为止devServer已经成功处理了请求 所以是肯定不报错的
       //5. target接受到请求后 发现/4000/position/40.10038,116.36867 不能命中自己的后台路由 通知deveserver 请求失败了
       //6. devServer 返回 index.html

       // 配完pathRewrite后:
       //1. 向 devServer 发送了一个ajax请求 http://localhost:8080/4000/position/40.10038,116.36867
       //2. devServer 中没有对应的静态资源
       //3. devServer 发现将url中域去掉之后  /4000/position/40.10038,116.36867 命中了自己的代理
       //4. devServer将请求转发给target对应的服务器 转发时将/4000替换成了"" 到此为止devServer已经成功处理了请求 所以是肯定不报错的
       //5. target接受到请求后 发现/position/40.10038,116.36867 命中自己的后台路由 通知deveserver 请求成功了
       //6. devServer 返回 请求成功的数据

      proxy:{
          '/3001': {
              target: 'http://localhost:3001',
              changeOrigin: true,
              pathRewrite:{
                  "^/3001":""
              }
          }
      }
   },
   configureWebpack:{
       resolve: {
           alias: {
              "@":resolve('src'),
               'components': resolve('src/components'),
               'pages': resolve('src/pages'),
               'store': resolve('src/store'),
           }
       }
   }
   }