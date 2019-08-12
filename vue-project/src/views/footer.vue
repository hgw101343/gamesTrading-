<template>
  <div class="footer">
    <router-view />
    <van-tabbar v-model="active1">
      <van-tabbar-item icon="home-o" to="./home">首页</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="./buy">我要买</van-tabbar-item>
      <van-tabbar-item icon="http://localhost:10130/images/indeximg/wym.png" to="./sell">我要卖</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="./mine">我的</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="./message">消息</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active1: 0
    };
  }
};
</script>
<style scoped>
.van-tabbar--fixed {
  position: fixed !important;
  z-index: 999 !important;
}
</style>


