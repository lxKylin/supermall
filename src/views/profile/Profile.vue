<template>
  <div class="profile">
    <nav-bar class="profile-bar">
      <div slot="center">个人中心</div>
    </nav-bar>
    <UserInfo></UserInfo>
  </div>
</template>

<script>
  // import Scroll from 'components/common/scroll/Scroll'

  import NavBar from 'components/common/navbar/NavBar.vue'
  import UserInfo from './childComps/UserInfo.vue'

  export default {
    name: 'Profile',
    components: {
      // Scroll,
      NavBar,
      UserInfo
    }
  }
</script>

<style scoped>
  .profile-bar {
    color: #fff;
    background-color: var(--color-tint);
  }
  .content {
    /* 动态计算高度 */
    height: calc(100vh - 93px);
    overflow: hidden;
  }
</style>
