<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: 'Scroll',
    props: {
      probeType: {
        type: Number,
        defaolt: 0
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      // 创建better-scroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        // 确定连接能点击
        click: true,
        // probe 侦测
        // 3 只要滚动都侦测
        // probeType: 3
        // 动态传入是否需要动态监听位置值
        probeType: this.probeType
      })
      // 监听滚动的位置
      this.scroll.on('scroll', (position) => {
        // console.log(position);
        this.$emit('scroll', position)
      })
    },
    methods: {
      scrollTo(x, y, time) {
        this.scroll.scrollTo(x, y, time)
      }
    },
  }
</script>

<style scoped>

</style>
