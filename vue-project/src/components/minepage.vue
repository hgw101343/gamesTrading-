<template>
  <div class="mine">
    <div class="headpicbox">
      <img :src="Head" class="headpic" @click="previewpic(Head)" />
    </div>
    <img :src="Wd" class="bjpic" />
    <div class="mineBody">
      <ul class="body1">
        <li>
          <p>0</p>
          <span>待付款</span>
        </li>
        <li>
          <p>0</p>
          <span>交易中</span>
        </li>
        <li>
          <p>全部订单</p>
          <span>查看</span>
        </li>
      </ul>
      <ul class="body2">
        <li>
          <i>
            <img :src="Money" />
          </i>
          <p>我的余额</p>
          <span>￥0.00</span>
        </li>
        <li>
          <i>
            <img :src="Jf" />
          </i>
          <p>我的积分</p>
          <span>0</span>
        </li>
        <li>
          <i>
            <img :src="Order" />
          </i>
          <p>我的租号订单</p>
        </li>
        <li>
          <i>
            <img :src="Start" />
          </i>
          <p>我的收藏</p>
          <span>0</span>
        </li>
      </ul>
      <ul class="body3">
        <li>
          <i>
            <img :src="Zhsz" />
          </i>
          <p>账号设置</p>
        </li>
        <li>
          <i>
            <img :src="Kf" />
          </i>
          <p>账号设置</p>
        </li>
      </ul>
    </div>
    <van-image-preview v-model="show1" :images="images"></van-image-preview>
  </div>
</template>
<script>
import Wd from "./wd.png";
import Jf from "./jf.png";
import Money from "./money.png";
import Order from "./order.png";
import Start from "./start.png";
import Zhsz from "./zhsz.png";
import Kf from "./kf.png";
import Head from "./headxiang.png";
export default {
  data() {
    return {
      Wd,
      Money,
      Jf,
      Order,
      Start,
      Kf,
      Zhsz,
      Head,
      show1: false,
      images: []
    };
  },
  methods: {
    previewpic(imgurl) {
      this.images = [imgurl];
      this.show1 = true;
    }
  }
};
</script>
<style scoped>
.mine {
  height: 100%;
  background: #f2f2f2;
}
.mine .headpicbox {
  position: absolute;
  top: 0.8rem;
  left: 1rem;
  z-index: 999;
  border-radius: 50%;
}
.mine .headpic {
  width: 2rem;
  height: 2rem;
  display: block;
  border-radius: 50%;
}
.mine .bjpic {
  position: absolute;
  top: 0;
  height: 4rem;
  width: 100%;
}
.mine .mineBody {
  position: absolute;
  top: 3rem;
  width: 90%;
  left: 0.5rem;
}
.mine .mineBody .body1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  height: 1.86667rem;
  border-radius: 0.1rem;
}
.mine .mineBody .body1 li {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.mine .mineBody .body1 li p {
  font-size: 0.42667rem;
  margin-bottom: 0.26667rem;
  line-height: 0.42667rem;
  margin-top: 0.21333rem;
  font-weight: 400;
}
.mine .mineBody .body1 li span {
  color: #999;
}
.mine .mineBody .body1 li:nth-of-type(-n + 2) p {
  font-size: 0.72667rem;
}
.mine .mineBody .body2 li i,
.mine .mineBody .body3 li i {
  width: 0.48rem;
  height: 0.48rem;
  margin-right: 0.26667rem;
  margin-top: 0.4rem;
  float: left;
  margin-left: 0.23rem;
}
.mine .mineBody .body2 li p,
.mine .mineBody .body3 li p {
  float: left;
}
.mine .mineBody .body2 li span,
.mine .mineBody .body3 li span {
  float: right;
}
.mine .mineBody .body2,
.mine .mineBody .body3 {
  margin-top: 0.5rem;
  border-radius: 0.3rem;
}
.mine .mineBody .body2 li,
.mine .mineBody .body3 li {
  background: #fff;
  height: 1.333rem;
  line-height: 1.333rem;
  padding-right: 0.4rem;
  font-size: 0.42667rem;
}
.mine .mineBody .body2 i img,
.mine .mineBody .body3 i img {
  height: 100%;
  width: 100%;
  vertical-align: top;
}
</style>
