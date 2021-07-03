<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <home-feature-view></home-feature-view>
    <tab-control
      class="tab-control"
      :title="['流行', '新款', '精选']"
      @tabClick="tabClick">
    </tab-control>
    <!-- <goods-list :goods="goods[currentType].list"></goods-list> -->
    <goods-list :goods="showGoods"></goods-list>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>4</li>
      <li>4</li>
      <li>4</li>
      <li>4</li>
      <li>4</li>
      <li>4</li>
      <li>4</li>
      <li>4</li>
      <li>4</li>
      <li>4</li>
      <li>4</li>
      <li>4</li>
      <li>4</li>
      <li>4</li>
      <li>4</li>
      <li>4</li>
      <li>4</li>
      <li>4</li>
      <li>4</li>
      <li>7</li>
      <li>7</li>
      <li>7</li>
      <li>7</li>
      <li>7</li>
      <li>7</li>
      <li>7</li>
      <li>7</li>
      <li>7</li>
      <li>7</li>
      <li>7</li>
      <li>7</li>
      <li>7</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>0</li>
    </ul>
  </div>
</template>

<script>

  import HomeSwiper from './childComps/HomeSwiper'
  import HomeRecommendView from './childComps/HomeRecommendView'
  import HomeFeatureView from './childComps/HomeFeatureView'

  import NavBar from 'components/common/navbar/NavBar'

  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import GoodsListItem from 'components/content/goods/GoodsListItem'

  import {getHomeMultidata, getHomeGoods} from 'network/home'


  // import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: 'Home',
    components: {
      HomeSwiper,
      HomeRecommendView,
      HomeFeatureView,
      NavBar,
      TabControl,
      GoodsList,
      GoodsListItem,
    },
    data() {
      return {
        // 定义个变量将请求的数据保存 初始化为null
        // result: null
        //存具体数据
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType: 'pop',
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    // 生命周期函数 创建完后马上执行
    created() {
      // 1.请求多个数据 加this 才是methods中第一个封装
      this.getHomeMultidata()
      // 2.请求商品数据
      this.getHomeGoods('pop')

      this.getHomeGoods('new')

      this.getHomeGoods('sell')
    },
    methods: {
      /**
       * 事件监听的方法
       */
      tabClick(index) {
        // console.log(index);
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break;
        }
      },
      /**
       * 网络请求相关的方法
       */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // console.log(res);
          // this.result = res;
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
        // console.log(res);
          // this.goods[type].list = this.goods[type].list.push(res.data.list);
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
        })
      }
    },
  }
</script>

<style scoped>
  /* #home {
    padding-top: 44px;
  } */
  .home-nav {
    color: #fff;
    background-color: var(--color-tint);
    /* position: fixed; */
    /* 粘性定位 */
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .tab-control {
    /* 粘性定位 */
    position: sticky;
    top: 44px;
    z-index: 9;
  }
</style>
