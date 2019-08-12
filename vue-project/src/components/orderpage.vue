<template>
  <div class="mine">
    <img :src="Blue" class="bjpic" />
    <van-nav-bar title="购买下单页" left-arrow @click-left="onClickLeft" />
    <div class="orderlist">
      <div class="list1">
        <div class="list1Top">
          <img src="https://pic.7881.com/7881/market/images/game_logo/G10.png" />
          <h4 v-text="list.title"></h4>
          <p>
            <span>区服：{{list.groupName}}/{{list.serverName}}</span>
            <span>￥{{list.price}}</span>
          </p>
          <p></p>
        </div>
        <div class="list1Bottom">
          温馨提示：
          <br />1、请您认真核对商品，仔细填写收货信息，以免自身填写错误造成损失。
          2、7881不会以任何名义让您进行私下交易，任何私下交易均为诈骗。如遇到要求进行私下交易的，请立即联系客服举报。
          3、下单成功后，请您务必使用7881官方聊天工具进行订单沟通，如发生纠纷，官方将以7881聊天工具作为重要判定依据。
        </div>
      </div>
      <div class="list2">
        <van-cell-group>
          <van-field v-model="username" required clearable label="电话号码" placeholder="请输入电话号码" />
          <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
          <van-field type="password" label="推广码" placeholder="请输入推广码" />
        </van-cell-group>
      </div>
    </div>
    <van-submit-bar
      :price="list.price*100"
      button-text="提交订单"
      @submit="onSubmit"
      button-type="info"
    />
  </div>
</template>
<script>
import Blue from "./blue.png";
export default {
  data() {
    return {
      Blue,
      username: "",
      password: "",
      list: ""
    };
  },
  methods: {
    onSubmit() {},
    onClickLeft() {}
  },
  created() {
    let str = window.location.hash;
    let index = str
      .split("/")[1]
      .split("?")[1]
      .split("=")[1];
    console.log(index);
    console.log(this.$store.state);
    let res = this.$store.state.alllists[index];
    this.list = res;
  }
};
</script>
<style scoped>
.mine {
  height: 100%;
  background: #f2f2f2;
}
.mine .bjpic {
  position: absolute;
  top: 0;
  height: 4rem;
  width: 100%;
}

.mine .van-nav-bar {
  background: #4aa6f8;
}
.mine .van-nav-bar__title {
  color: #fff;
  font-weight: 700;
}
.mine .van-icon-arrow-left {
  color: white;
}
.mine .orderlist {
  z-index: 999;
  /* background: #fff; */
  width: 95%;
  height: 80%;
  position: absolute;
  top: 1.3rem;
  left: 0.2rem;
}
.mine .orderlist .list1Top img {
  width: 2.26667rem;
  height: 2.26667rem;
  float: left;
}
.mine .orderlist .list1Top {
  height: 3rem;
}
.mine .orderlist .list1 {
  background: #fff;
  height: 5rem;
  width: 100%;
  padding: 0.2rem 0.3rem;
  border-radius: 0.2rem;
}
.mine .orderlist .list1 h4 {
  float: left;
  width: 65%;
  margin-left: 0.6rem;
  font-weight: 500;
  margin-top: 0.3rem;
}
.mine .orderlist .list1 span:nth-of-type(1) {
  float: left;
  margin-left: 0.6rem;
}
.mine .orderlist .list1 span:nth-of-type(2) {
  float: right;
}
.mine .orderlist .list1 .list1Bottom {
  width: 70%;
  height: 1rem;
  margin: auto;
  background: #fbf8dc;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #d07234;
  font-size: 0.32rem;
  padding: 0.1rem 0.2rem;
}
.mine .orderlist .list2 {
  margin-top: 0.6rem;
}
</style>
