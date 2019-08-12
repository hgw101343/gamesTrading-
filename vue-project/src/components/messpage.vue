<template>
  <div class="message">
    <van-tabs v-model="active" line-height="0px">
      <van-tab title="我是买家">
        <van-tabs v-model="active2">
          <van-tab title="全部">暂无订单</van-tab>
          <van-tab title="待支付">暂无订单</van-tab>
          <van-tab title="交易中">暂无订单</van-tab>
          <van-tab title="已完成">暂无订单</van-tab>
          <van-tab title="已取消">暂无订单</van-tab>
        </van-tabs>
      </van-tab>
      <van-tab title="我是卖家">
        <van-tabs v-model="active3">
          <van-tab title="全部">暂无订单</van-tab>
          <van-tab title="待发货">暂无订单</van-tab>
          <van-tab title="已发货">暂无订单</van-tab>
          <van-tab title="已完成">暂无订单</van-tab>
          <van-tab title="已取消">暂无订单</van-tab>
        </van-tabs>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      active2: 0,
      active3: 0
    };
  }
};
</script>
<style scoped>
.message {
  height: 100%;
  background: #f6f6f6;
}
</style>


