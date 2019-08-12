<template>
  <div class="mine">
    <van-search placeholder="搜索您心仪的游戏名称" v-model="value" />
    <van-index-bar ref="usernameInput"></van-index-bar>
    <van-tabs v-model="active" ref="allgame">
      <van-tab title="全部">
        <van-grid :column-num="4">
          <van-grid-item
            v-for="(value,index) in allgames.allhot"
            :key="index"
            :icon="value.imgurl"
            :text="value.gameName"
            to="/list"
          />
        </van-grid>
      </van-tab>
      <van-tab title="手游">
        <van-grid :column-num="4">
          <van-grid-item
            v-for="(value,index) in allgames.allsy"
            :key="index"
            :icon="value.imgurl"
            :text="value.gameName"
            to="/list"
          />
        </van-grid>
      </van-tab>
      <van-tab title="端游">
        <van-grid :column-num="4">
          <van-grid-item
            v-for="(value,index) in allgames.alldy"
            :key="index"
            :icon="value.imgurl"
            :text="value.gameName"
            to="/list"
          />
        </van-grid>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
var _this = "";
export default {
  data() {
    return {
      value: "",
      active: 0,
      allgames: "",
      //暂时保存一开始的数据
      allgames1: ""
    };
  },
  computed: {},
  methods: {},
  async created() {
    let str = await this.$axios("http://localhost:10130/buypage");
    let arr = str.data[0];
    this.allgames = arr;
    _this = this;
  },
  mounted() {
    //原来的数据保存起来
    //选项卡主体部分
    // console.log(this.$data.allgames);
    let allgames1 = "";
    let allBody = this.$refs.allgame.$el.children[1];
    //选项卡头部
    let allHead = this.$refs.allgame.$el.children[0].children[0];
    //右侧索引
    let barfather = this.$refs.usernameInput.$el.children[0];
    let Bar = this.$refs.usernameInput.$el.children[0].children;
    //创建新节点热门
    let newchild = document.createElement("span");
    newchild.classList.add("van-index-bar__index");
    newchild.dataset.index = "rm";
    newchild.innerText = "热门";
    barfather.insertBefore(newchild, Bar[0]);
    //索引选中高亮
    window.onload = function() {
      let allchild = document.getElementsByClassName("van-tab");
      for (let i = 0; i < Bar.length; i++) {
        Bar[i].onclick = function() {
          for (let j = 0; j < Bar.length; j++) {
            Bar[j].classList.remove("active");
          }
          //根据索引字母切换
          function showdata(a, px) {
            //用一个空数组保存数据
            let arr = [];
            let oldarr = _this.allgames.allgames
              ? _this.allgames.allgames
              : _this.allgames1;
            for (let k = 0; k < oldarr.length; k++) {
              if (a == 1) {
                if (oldarr[k].px == px && oldarr[k].gameType == 1) {
                  arr.push(oldarr[k]);
                }
              } else if (a == 2) {
                if (oldarr[k].px == px && oldarr[k].gameType == 0) {
                  arr.push(oldarr[k]);
                }
              } else if (a == 0) {
                if (oldarr[k].px == px) {
                  arr.push(oldarr[k]);
                }
              }
            }
            return arr;
          }
          this.classList.add("active");
          allgames1 = _this.$data.allgames;
          _this.$data.allgames1 = allgames1;
          let newarr = showdata(_this.$data.active, this.innerText);
          console.log(_this.$data.allgames);
          if (_this.$data.active == 0) {
            _this.$data.allgames.allhot = newarr;
          } else if (_this.$data.active == 1) {
            _this.$data.allgames.allsy = newarr;
          } else if (_this.$data.active == 2) {
            _this.$data.allgames.alldy = newarr;
          }
          // _this.$data.allgames = newarr;
          // console.log(_this.$data.active, this.innerText);
        };
      }
    };
  }
};
</script>
<style scoped>
#app .van-index-bar__sidebar {
  height: 80% !important;
  overflow: auto;
}
.van-index-bar__index {
  font-size: 20px !important;
}
</style>


