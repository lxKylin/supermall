// 配置别名
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // '@': 'src' 内部已经配置
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}

// const path = require('path')
// const resolve = dir => path.join(__dirname, dir)

// module.exports = {
//   chainWebpack: config => {
//     // 设置快捷路径， @ 表示 'src' ，components 表示 'src/components'
//     config.resolve.alias
//       // .set('@', resolve('src'))
//       .set('assets', resolve('src/assets'))
//       .set('common', resolve('src/common'))
//       .set('components', resolve('src/components'))
//       .set('network', resolve('src/network'))
//       .set('views', resolve('src/views'))
//   },
// }
