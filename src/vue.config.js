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