<template>
  <div class="detail">
    <i class="tohost" @click="tohost()">
      <img :src="Sy" alt />
    </i>
    <van-nav-bar title="商品详情页" left-arrow @click-left="returnUrl()"></van-nav-bar>
    <div class="imgdress">
      <img src="https://pic.7881.com/7881/market/images/promotion/game/240-240/G10.jpg" alt />
    </div>
    <div class="mess">
      <h3 v-text="alist.title"></h3>
      <p class="price">￥{{alist.price}}</p>
      <ul class="messzi">
        <li>类型:{{alist.goodsTypeName}}</li>
        <li>{{alist.groupName}}/{{alist.serverName}}</li>
        <li>平均&nbsp;分5分&nbsp;发货</li>
      </ul>
      <p class="sfrz">
        <i>✔</i>
        <span>{{alist.goodsFlagDictionaryDTO.realNameAuthName}}</span>
      </p>
      <div class="seller">
        <span>买家信息</span>
        <em>{{alist.goodsFlagDictionaryDTO.trustedName}}</em>
      </div>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="收藏" />
      <van-goods-action-icon icon="shop-o" text="分享" />
      <van-goods-action-button type="info" text="立即购买" @click="buy" />
    </van-goods-action>
  </div>
</template>
<script>
import Sy from "./sy.png";
export default {
  data() {
    return {
      Sy,
      alist: "",
      index: ""
    };
  },
  created() {
    let str = window.location.hash;
    let arr = str.split("/");
    let index = arr[arr.length - 1];
    this.index = index;
    this.alist = this.$store.state.alllists[index];
    console.log(this.alist);
  },
  methods: {
    buy() {
      this.$router.push({
        name: "order",
        query: {
          index: this.index
        }
      });
    },
    returnUrl() {
      window.location.href = this.$store.state.url;
    },
    tohost() {
      this.$router.push({
        path: "/"
      });
    }
  }
};
</script>
<style scoped>
.detail {
  height: 100%;
  background: #f6f6f6;
}

.detail .tohost {
  position: fixed;
  top: 0.4rem;
  z-index: 12;
  right: 0.2rem;
}
.detail .tohost img {
  width: 0.5rem;
}
.detail .imgdress {
  margin-left: 1.2rem;
}
.detail .mess {
  padding: 0px 0.2rem;
}
.detail .mess h3 {
  font-size: 0.37333rem;
  color: #333;
  line-height: 0.53333rem;
  font-weight: 400;
  margin-top: 0.4rem;
}
.detail .mess .price {
  width: 100%;
  height: 0.58667rem;
  line-height: 0.58667rem;
  margin: 0.3rem 0;
  color: #ff6700;
  font-size: 0.64rem;
}
.detail .mess .sfrz {
  position: relative;
  line-height: 0.74667rem;
  margin-top: 0.26rem;
  margin-bottom: 0.26667rem;
  overflow: hidden;
}
.detail .mess .sfrz i {
  width: 0.7rem;
  height: 0.7rem;
  border: 1px solid #ff6700;
  color: #ff6700;
  border-radius: 50%;
  margin-right: 0.2rem;
}
.detail .mess .seller {
  height: 1.2rem;
  line-height: 1.2rem;
  font-size: 0.37333rem;
  color: #333;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  background: #fff;
  margin-bottom: 0.26667rem;
  padding: 0 0.2rem;
}
.detail .mess .seller em {
  height: 0.42667rem;
  line-height: 0.42667rem;
  color: #ff6700;
  font-size: 0.24rem;
  border: 0.02667rem solid #ffd9c0;
  background: #fff8f4;
  border-radius: 0.06rem;
  display: inline-block;
  padding: 0 0.06rem;
  margin-top: 0.3rem;
}
.detail .messzi {
  display: flex;
  justify-content: space-between;
  color: #aaa;
}
</style>


