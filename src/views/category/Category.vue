<template>
  <div class="category">
    <nav-bar class="category-bar">
      <div slot="center">分类</div>
    </nav-bar>
    <scroll class="content">
      <!-- 结构：wrapper里面只能有一个元素content content里可以有多个元素 -->
    
    </scroll>

  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'

  import NavBar from 'components/common/navbar/NavBar.vue'

  export default {
  components: { NavBar },
    name: 'Category',
    components: {
      Scroll,
      NavBar
    },
    // data() {
    //   return {
    //     scroll: null
    //   }
    // },
    // created() 组件创建完后调用 内部DOM元素尚未完成挂载，此时'.wrapper'根本获取不到任何DOM元素，要用mounted
    // mounted() {
    //   this.scroll = new BScroll('.wrapper', {
    //     // probe 侦测
    //     // 3 只要滚动都侦测
    //     probeType: 3,
    //     pullUpLoad: true,
    //     click: true
    //   })
    //   this.scroll.on('scroll', (position) => {
    //     // console.log(position);
    //   })
    //   this.scroll.on('pullingUp', () => {
    //     console.log('上拉加载更多');
    //     // setTimeout(() => {
    //     //   this.finishPullUp()
    //     // }, 2000)
    //   })
    // },
  }
</script>

<style scoped>
  .category-bar {
    color: #fff;
    background-color: var(--color-tint);
  }
  .wrapper {
    /* 动态计算高度 */
    height: calc(100vh - 93px);
    overflow: hidden;
  }
</style>
