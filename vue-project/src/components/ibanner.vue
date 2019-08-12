<template>
  <div>
    <div class="main">
      <van-swipe :autoplay="3000" :height="bannerheight">
        <van-swipe-item v-for="(image, index) in indexData.tops" :key="index">
          <img v-lazy="image.imglinkurl" />
        </van-swipe-item>
      </van-swipe>
      <div data-v-57742f5c class="home-search-box">
        <span data-v-57742f5c>输入关键词</span>
        <em data-v-57742f5c>搜一下</em>
      </div>
      <!-- 宫格 -->
      <van-grid :column-num="4">
        <van-grid-item
          v-for="value in indexData.icons"
          :key="value.gameorder"
          :icon="value.imglinkurl"
          :text="value.itemname"
          to="/list"
        />
      </van-grid>
      <!-- 最新快报 -->
      <div class="notice-box">
        <div class="van-hairline--top">
          <em></em>
          <span>【公告】《一起来捉妖》服务费调整公告</span>
          <a class="btn-more-notice">更多</a>
        </div>
      </div>
      <!-- 标签页 -->
      <van-tabs v-model="active">
        <van-tab title="热门游戏">
          <van-grid :column-num="4">
            <!-- <img src="http://pic.7881.com/7881/market/images/m-nav/001.png" style="width:50px;height:50px;"/> -->
            <van-grid-item
              v-for="value in indexgames.allHotGames"
              :icon="value.imgurl"
              :key="value.gameId"
              :text="value.alias"
              to="/list"
            />
          </van-grid>
        </van-tab>
        <van-tab title="端游">
          <van-grid :column-num="4">
            <van-grid-item
              v-for="value in indexgames.clientHotGames"
              :key="value.gameId"
              :icon="value.imgurl"
              :text="value.alias"
            />
          </van-grid>
        </van-tab>
        <van-tab title="手游">
          <van-grid :column-num="4">
            <van-grid-item
              v-for="value in indexgames.mobileHotGames"
              :key="value.gameId"
              :icon="value.imgurl"
              :text="value.alias"
            />
          </van-grid>
        </van-tab>
        <div class="more">更多</div>
      </van-tabs>
      <!-- 老板报 -->
      <div class="lbb-box">
        <em data-v-57742f5c class="icon-lbb"></em>
        <van-swipe vertical :autoplay="3000" :show-indicators="indicators">
          <van-swipe-item>
            <div
              data-v-57742f5c
              class="van-swipe-item"
              style="width: 217.637px; height: 34.125px; transform: translateY(0px);"
            >
              <p>
                用户
                <em>158*****788</em>刚刚购买了
                <em>征途2s30元游戏币</em>
              </p>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div
              data-v-57742f5c
              class="van-swipe-item"
              style="width: 217.637px; height: 34.125px; transform: translateY(0px);"
            >
              <p>
                用户
                <em>176*****512</em>刚刚购买了
                <em>冒险岛2账号</em>
              </p>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div
              data-v-57742f5c
              class="van-swipe-item"
              style="width: 217.637px; height: 34.125px; transform: translateY(0px);"
            >
              <p>
                用户
                <em>156*****394</em>刚刚出售了
                <em>英雄联盟LOL83800万游戏币</em>
              </p>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div
              data-v-57742f5c
              class="van-swipe-item"
              style="width: 217.637px; height: 34.125px; transform: translateY(0px);"
            >
              <p>
                用户
                <em>180*****416</em>刚刚购买了
                <em>征途2s2550元游戏币</em>
              </p>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div
              data-v-57742f5c
              class="van-swipe-item"
              style="width: 217.637px; height: 34.125px; transform: translateY(0px);"
            >
              <p>
                用户
                <em>177*****954</em>刚刚购买了
                <em>剑侠情缘Ⅲ账号</em>
              </p>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div
              data-v-57742f5c
              class="van-swipe-item"
              style="width: 217.637px; height: 34.125px; transform: translateY(0px);"
            >
              <p>
                用户
                <em>159*****445</em>刚刚出售了
                <em>英雄联盟LOL58500万游戏币</em>
              </p>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div
              data-v-57742f5c
              class="van-swipe-item"
              style="width: 217.637px; height: 34.125px; transform: translateY(0px);"
            >
              <p>
                用户
                <em>188*****545</em>刚刚购买了
                <em>英雄联盟LOL账号</em>
              </p>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div
              data-v-57742f5c
              class="van-swipe-item"
              style="width: 217.637px; height: 34.125px; transform: translateY(0px);"
            >
              <p>
                用户
                <em>181*****648</em>刚刚购买了
                <em>冒险岛21410元游戏币</em>
              </p>
            </div>
          </van-swipe-item>
          <div class="custom-indicator" slot="indicator"></div>
        </van-swipe>
        <b></b>
      </div>
      <!-- 新手指南 -->
      <div class="newFinger">
        <div class="fingerHead">
          <h2>新手指南</h2>
          <a>更多</a>
        </div>
        <div class="fingerBody">
          <ul>
            <li v-for="(value,index) in newFinger" :key="index">
              <em>·</em>
              <span v-text="value"></span>
            </li>
          </ul>
        </div>
        <div data-v-57742f5c class="serviceGg fingerFoot">
          <div data-v-57742f5c class="activeBan">
            <div data-v-57742f5c class="activeList">
              <div data-v-57742f5c class="bangz">
                <img data-v-57742f5c src="http://localhost:10130/images/indeximg/xszn0.png" />
              </div>
              <div data-v-57742f5c class="bangz">
                <img data-v-57742f5c src="http://localhost:10130/images/indeximg/xszn1.png" />
              </div>
              <div data-v-57742f5c class="bangz">
                <img data-v-57742f5c src="http://localhost:10130/images/indeximg/xszn2.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 热门推荐 -->
      <div class="Recommend">
        <div class="recommendHead">
          <h2>热门推荐</h2>
          <a>更多</a>
        </div>
        <div class="recommendBody">
          <dl v-for="(value,index) in indexData.hotNames" :key="index">
            <dt>
              <img :src="value.imglinkurl" />
            </dt>
            <dd class="van-hairline--bottom">
              <h2 v-text="value.gameName"></h2>
              <p v-text="value.itemname"></p>
            </dd>
          </dl>
        </div>
      </div>
      <!-- 验证中心 -->
      <div class="Verification">
        <h3>验证中心</h3>
        <p>输入客服QQ号或电话验证真伪（格式：02512345678）</p>
        <div class="cationInput">
          <a class="cationButton">验证</a>
          <input type="text" placeholder="请输入客服QQ号码/客服电话" />
        </div>
        <div class="cationFoot">
          <a href>商务合作</a>
          <em></em>
          <a href>电脑版</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "vant/lib/index.css";
import $axios from "axios";
//最新快报
import $zxkb from "./zxkb.png";
import $rmyx from "./reyx1.png";
export default {
  data() {
    return {
      indicators: false,
      value: "",
      //轮播图高度
      bannerheight: 120,
      //保存宫格数据
      indexData: "",
      //标签页选项卡
      active: 2,
      //存放标签选项
      indexgames: "",
      // 新手指南数据
      newFinger: [
        "龙族幻想钻石交易方式",
        "拉结尔怎么交易金币卷、钻石？",
        "一起来捉妖注意事项（交易必看）",
        "一起来捉妖没摊位怎么交易（无摊位必看）"
      ]
    };
  },
  methods: {
    onSearch() {},
    onCancel() {}
  },
  async created() {
    //获取宫格数据并保存起来
    this.$toast({
      mask: true,
      message: "加载中...",
      type: "loading"
    });
    let str = await $axios.get("http://localhost:10130/grad");
    this.indexData = str.data[0].body;
    console.log(this.indexData);
    let str2 = await $axios.get("http://localhost:10130/indexgames");
    this.indexgames = str2.data[0].body;
    this.$toast.clear();
  }
};
</script>
<style scoped>
/* 局部轮播图 */
.home-search-box {
  position: absolute;
  background: #fff;
  left: 0.45333rem;
  right: 0.45333rem;
  height: 1.17333rem;
  line-height: 1.17333rem;
  top: 3.54667rem;
  -webkit-box-shadow: 0 0.26667rem 0.4rem rgba(0, 0, 0, 0.06);
  box-shadow: 0 0.26667rem 0.4rem rgba(0, 0, 0, 0.06);
  z-index: 9;
}
.home-search-box .icon {
  float: left;
  margin: 0.30667rem 0.26667rem 0 0.32rem;
  color: #4a4a4a;
  font-size: 0.48rem;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.home-search-box span {
  color: #999;
  font-size: 0.37333rem;
  float: left;
  margin-left: 0.5rem;
}
.home-search-box em {
  float: right;
  font-size: 0.37333rem;
  color: #39f;
  margin-right: 0.37333rem;
  position: relative;
}
.van-swipe img {
  height: 4.133rem;
  width: 100%;
}
/* 最新快报 */
.notice-box {
  position: relative;
  background: #fff;
  height: 1.2rem;
  padding: 0 0.48rem;
  line-height: 1.2rem;
}
[class*="van-hairline"] {
  position: relative;
}
.notice-box em {
  position: relative;
  float: left;
  display: block;
  width: 1.33333rem;
  height: 0.32rem;
  margin-top: 0.42667rem;
  margin-right: 0.32rem;
  background: url("./zxkb.png") no-repeat;
  background-size: 100%;
}
.notice-box span {
  color: #888;
  font-size: 0.33333rem;
  float: left;
  width: calc(100% - 2.98667rem);
  height: 1.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.notice-box a {
  float: right;
  color: #333;
  font-size: 0.32rem;
  position: relative;
  width: 1.33333rem;
  text-align: right;
}
/* 标签页 */
.more {
  position: absolute;
  top: 0.05333rem;
  right: 0.48rem;
  font-size: 0.34667rem;
  color: #888;
  margin-top: 0.33333rem;
}
/* 老板报 */
.lbb-box {
  background: #fff;
  padding: 0 0.48rem;
  position: relative;
}
.lbb-box em.icon-lbb {
  position: absolute;
  display: block;
  width: 0.98667rem;
  height: 0.32rem;
  top: 0.37333rem;
  left: 0.90667rem;
  background: url("./lbb.png") no-repeat;
  z-index: 1;
  background-size: 100%;
}
.lbb-box .van-swipe {
  width: 100%;
  height: 1.06667rem;
  background: #f6f6f6;
  border-radius: 0.05333rem;
  padding: 0 0.26667rem 0 1.97333rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.lbb-box .van-swipe .van-swipe-item p em {
  color: #ffa430;
  margin: 0 0.10667rem;
}
.lbb-box .van-swipe .van-swipe-item p {
  height: 1.06667rem;
  line-height: 1.12rem;
  color: #333;
  font-size: 0.33333rem;
  white-space: nowrap;
}
.lbb-box b {
  position: absolute;
  top: 0.06667rem;
  right: 0.48rem;
  height: 0.93333rem;
  width: 2rem;
  display: inline-block;
  background: url("./zz.png") no-repeat;
  background-size: 100%;
  z-index: 2;
}
/* 新手指南 */
.newFinger,
.Recommend {
  background: #fff;
}
.newFinger .fingerHead,
.Recommend .recommendHead {
  height: 1.46667rem;
  padding-top: 0.13333rem;
  line-height: 1.33333rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
}
.newFinger .fingerHead h2,
.Recommend .recommendHead h2 {
  padding-left: 0.48rem;
  color: #333;
  font-size: 0.50667rem;
  font-weight: 700;
}
.newFinger .fingerHead a,
.Recommend .recommendHead a {
  position: absolute;
  top: 0.05333rem;
  right: 0.48rem;
  font-size: 0.34667rem;
  color: #888;
}
.fingerBody {
  padding: 0 0.48rem;
  padding-bottom: 0.4rem;
}
.fingerBody li {
  line-height: 32px;
  position: relative;
  line-height: 1.01333rem;
  height: 1.01333rem;
  color: #666;
  font-size: 0.37333rem;
}
.fingerBody li span {
  display: inline-block;
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.fingerBody li em {
  float: left;
  margin-right: 0.18667rem;
}
.fingerBody li::after {
  content: "";
  border: 5px solid transparent;
  display: block;
  height: 0px;
  width: 0px;
  border-left-color: #ccc;
  position: absolute;
  top: 9px;
  right: 4px;
}
.serviceGg .activeBan {
  height: 2.4rem;
  overflow: hidden;
}
.serviceGg .activeList {
  overflow-y: hidden;
  overflow-x: auto;
  height: 2.66667rem;
  display: flex;
}
.serviceGg .bangz:first-child {
  padding-left: 0.46667rem;
}
.serviceGg .bangz {
  margin-right: 0.34667rem;
}
.serviceGg .bangz img {
  width: 4.26667rem;
  height: 2.1rem;
  border-radius: 0.13333rem;
  -webkit-box-shadow: 0.05333rem 0.08rem 0.16rem rgba(0, 0, 0, 0.2);
  box-shadow: 0.05333rem 0.08rem 0.16rem rgba(0, 0, 0, 0.2);
}
/* 热门推荐 */
.Recommend .recommendBody dl {
  position: relative;
  padding: 0 0.48rem 0 2.74667rem;
  margin-bottom: 0.32rem;
  height: 2.18667rem;
}
.Recommend .recommendBody dt {
  position: absolute;
  top: 0;
  left: 0.48rem;
  height: 1.86667rem;
  width: 1.86667rem;
}
.Recommend .recommendBody img {
  width: 100%;
}
.Recommend .recommendBody dl dd h2 {
  font-weight: 700;
  font-size: 0.48rem;
  color: #333;
  margin-bottom: 0.13333rem;
}
.Recommend .recommendBody dl dd p {
  font-size: 0.32rem;
  color: #999;
}
/* 验证中心 */
.Verification {
  background: #fff;
}
.Verification h3 {
  padding-left: 0.48rem;
  color: #333;
  font-size: 0.50667rem;
  font-weight: 700;
}
.Verification p {
  color: #666;
  font-size: 0.34667rem;
  line-height: 0.64rem;
  margin: 0.16667rem 0 0 0.26667rem;
}
.cationInput {
  color: #323233;
  text-align: left;
  line-height: 1.06667rem;
  background: #f6f6f6;
  height: 1.06667rem;
  width: 6.5rem;
  margin-left: 0.25rem;
  position: relative;
  margin-top: 0.25rem;
}
.Verification input[type="text"]::-webkit-input-placeholder {
  color: #ccc;
}
.Verification input[type="text"] {
  height: 100%;
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 0;
  color: #323233;
  text-align: left;
  background-color: transparent;
  border: 0;
  resize: none;
  padding: 0 0.32rem;
}
.cationInput .cationButton {
  padding: 0 0.5667rem;
  font-size: 0.37333rem;
  height: 1.06667rem;
  line-height: 1.06667rem;
  background: #ff6700;
  border-color: #ff6700;
  color: #fff;
  height: 100%;
  position: absolute;
  top: 0;
  right: -2.5rem;
  border-radius: 0.08rem;
}
.cationFoot {
  padding: 0.20667rem 0.48rem 0.53333rem;
}
.cationFoot a {
  color: rgb(51, 51, 51);
  font-size: 0.37333rem;
  position: relative;
}
.cationFoot em {
  width: 0.02667rem;
  height: 0.37333rem;
  display: inline-block;
  top: 0.05333rem;
  position: relative;
  margin: 0px 0.26667rem;
  background: rgb(170, 170, 170);
}
.main {
  margin-bottom: 50px;
}
.yd-slider-pagination {
  bottom: 0.7rem !important;
}
.van-hairline--top .van-grid-item__content {
  padding: 0.33rem !important;
}
/* 标签页 */
.van-tabs__wrap {
  background-color: #fff;
}
.van-tab .van-ellipsis {
  font-size: 0.33rem;
}
</style>


