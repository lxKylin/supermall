<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from './childComps/HomeSwiper.vue'
  import {getHomeMultidata} from 'network/home'

  // import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper
    },
    data() {
      return {
        // 定义个变量将请求的数据保存 初始化为null
        // result: null
        //存具体数据
        banners: [],
        recommends: [],
      }
    },
    // 生命周期函数 创建完后马上执行
    created() {
      // 1.请求多个数据
      getHomeMultidata().then(res => {
        console.log(res);
        // this.result = res;
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
  }
</script>

<style scoped>
  .home-nav {
    color: #fff;
    background-color: var(--color-tint);
  }
</style>
