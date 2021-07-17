import {debounce} from "./utils"

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 50)
    this.itemImgListener = () => {
      // console.log('-------'); // 30次 以至于下面的会调用很多次
      refresh()
    }
    this.$bus.$on('itemImgLoad', this.itemImgListener)
    // console.log('我是混入的内容');
  },
}
