<template>
  <div class="list">
    <div class="flex">
      <i class="tohost">
        <img :src="Sy" alt />
      </i>
      <van-nav-bar title="地下城与勇士" left-arrow @click-left="tohost">
        <van-icon name="search" slot="right" />
      </van-nav-bar>
      <div class="overbox">
        <div class="headlistbox">
          <div class="more-goodstype">
            <img :src="Xl" alt />
            <i></i>
          </div>
          <ul class="headlist" ref="headlist">
            <li
              v-for="(value,index) in headlist"
              :key="index"
              v-text="value.gtidname"
              :class="[{list1:true},{active:active1==index}]"
              @click="onlist(index)"
            ></li>
          </ul>
        </div>
      </div>
      <van-dropdown-menu>
        <van-dropdown-item title="选择区服" ref="item">
          <van-tree-select
            :items="xzqf"
            :main-active-index="mainActiveIndex"
            :active-id="activeId"
            @click-nav="onClickNav"
            @click-item="onClickItem"
          />
        </van-dropdown-item>
        <van-dropdown-item v-model="value" :options="option" @change="sortlist(value)" />
        <van-dropdown-item title="高级筛选"></van-dropdown-item>
      </van-dropdown-menu>
    </div>
    <div class="flexbottom">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-cell v-for="(item,index) in list" :key="index" @click="todetail(index)">
          <div class="shoplist">
            <div class="shophead">
              <i>卖家发货</i>
              <h2 v-text="item.title"></h2>
              <div class="shopbottom">
                <div class="shopleft">
                  <p>区服:{{item.groupName}}/{{item.serverName}}</p>
                  <p>
                    库存
                    <em>{{item.stock}}</em>件
                  </p>
                </div>
                <div class="shopright">
                  <span>￥{{item.price}}</span>
                </div>
              </div>
            </div>
          </div>
        </van-cell>
      </van-list>
    </div>
  </div>
</template>
<script>
import Sy from "./sy.png";
import Xl from "./xl.png";
// import Jquery from "jquey";
export default {
  data() {
    return {
      Sy,
      Xl,
      headlist: "",
      value: 0,
      //弹出层显示
      show: true,
      //headlist默认高亮
      active1: 0,
      xzqf: "",
      mainActiveIndex: 0,
      // 被选中元素的id
      activeId: 1,
      option: [
        { text: "默认排序", value: 0 },
        { text: "总价最低", value: 1 },
        { text: "发布时间", value: 2 }
      ],
      //列表懒加载
      list: [],
      loading: false,
      finished: false,
      //存全部数据
      alllist: [],
      oldalllist: []
    };
  },
  methods: {
    tohost() {
      this.$router.push({
        path: "/footer/home"
      });
    },
    onClickNav(index) {
      this.mainActiveIndex = index;
    },
    onClickItem(data) {
      this.activeId = data.id;
      let arr = [];
      console.log(data.text);
      this.alllist.forEach((item, index) => {
        if (item.serverName == data.text) {
          arr.push(item);
        }
      });
      this.list.length = 0;
      this.list = arr.concat();
    },
    onlist(a) {
      // console.log(this.$el.children[2].children[1]);
      this.active1 = a;
      console.log(this.active1);
      let ul = this.$el.children[2].children[1];
      for (let i = 0; i < ul.children.length; i++) {
        ul.children[i].classList.remove("active");
      }
      ul.children[a].classList.add("active");
    },
    async onLoad() {
      let str2 = await this.$axios("http://localhost:10130/list");
      // this.list = [...this.list, ...str2.data[0].body.results];
      //如果数组为空就赋值不为空就不用重新赋值
      this.alllist = this.alllist.length
        ? this.alllist
        : str2.data[0].body.results;
      this.oldalllist = this.alllist.concat();
      this.$store.state.alllists = this.alllist;
      for (let i = 0; i < 15; i++) {
        this.list.push(this.alllist[this.list.length]);
      }
      // 加载状态结束
      this.loading = false;
      // 数据全部加载完成
      if (this.list.length >= 80) {
        this.finished = true;
      }
    },
    sortlist(index) {
      if (index == 1) {
        this.list.length = 0;
        let b = this.alllist.sort(function(a, b) {
          return a.price - b.price;
        });
        this.alllist = b;
        for (let i = 0; i < 15; i++) {
          this.list.push(b[i]);
        }
      } else if (index == 2) {
        this.list.length = 0;
        for (var i = 0; i < this.alllist.length; i++) {
          var data = new Date(this.alllist[i].createtime);
          var time = data.getTime();
          this.alllist[i].time = time;
        }
        let b = this.alllist.sort(function(a, b) {
          return b.time - a.time;
        });
        this.alllist = b;
        for (let i = 0; i < 15; i++) {
          this.list.push(b[i]);
        }
      } else if (index == 0) {
        this.alllist = this.oldalllist.concat();
        this.list.length = 0;
        for (let i = 0; i < 15; i++) {
          this.list.push(this.alllist[i]);
        }
      }
    },
    //列表单击事件
    todetail(index) {
      this.$store.state.url = location.href;
      window.location.href = `#/detail/${index}`;
    }
  },
  async created() {
    let str = await this.$axios("http://localhost:10130/listhead");
    this.headlist = str.data[0].body.gttype;
    //区服分类
    let arr = str.data[0].body.list;
    for (let i = 0; i < arr.length; i++) {
      arr[i].text = arr[i].name;
      for (let j = 0; j < arr[i].children.length; j++) {
        arr[i].children[j].text = arr[i].children[j].name;
      }
    }
    this.xzqf = arr;
    // let str2 = await this.$axios("http://localhost:10130/list");
    // this.$store.state.alllists = str2.data[0].body.results;
    this.onLoad();
    //获取列表
    // let str2 = await this.$axios("http://localhost:10130/list");
    // let arr2 = str2.data[0].body.results;
    // this.list = arr2;
    // console.log(arr2);
  },
  mounted() {}
};
</script>
<style scoped>
.list .van-nav-bar {
  width: 95%;
}
.list .van-nav-bar__arrow {
  font-size: 20px;
  color: #000;
}
.list .van-nav-bar__title {
  font-weight: 700;
}
.list .tohost {
  position: fixed;
  top: 0.4rem;
  z-index: 12;
  right: 0.2rem;
}
.list .tohost img {
  width: 0.5rem;
}
.list .van-nav-bar .van-icon-search {
  color: #000;
  font-size: 0.7rem;
}
/* 头部列表 */
.list .headlistbox::-webkit-scrollbar {
  background-color: #fff;
}
.list .flexbottom {
  margin-top: 3.5rem;
}
.list .van-dropdown-menu {
  position: fixed;
  width: 100%;
  top: 2rem;
  z-index: 999;
  padding-right: 10%;
}
.list .van-nav-bar {
  position: fixed;
  top: 0;
}
.list .overbox {
  position: fixed;
  top: 1.4rem;
  width: 100%;
  z-index: 999;
  padding-right: 10%;
  padding-left: 0.5rem;
  background: #fff;
  z-index: 999;
}
.list .headlistbox {
  overflow-x: auto;
}
.list .headlist::after {
  content: "";
  height: 0;
  clear: both;
  display: block;
  overflow: hidden;
  visibility: hidden;
}
.list .headlistbox .more-goodstype {
  position: fixed;
  top: 1.4rem;
  right: 0.2rem;
  z-index: 999;
}
.list .headlistbox .more-goodstype i {
  position: absolute;
  left: 0px;
  height: 0.45rem;
  background: #ccc;
  width: 1px;
  top: 0.2rem;
  left: 0.05rem;
}
.list .headlistbox .more-goodstype img {
  width: 0.8rem;
}
.list .headlist {
  width: 2000px;
}
.list .headlist li {
  float: left;
  line-height: 0.4rem;
  font-size: 0.4rem;
  padding: 0 0.4rem;
  color: #666;
  box-sizing: border-box;
  padding-bottom: 0.5rem;
}
.list .headlist li.active {
  color: #39f;
  border-bottom: 2px solid #39f;
  font-weight: 700;
}
.list .shophead i {
  font-size: 0.26667rem;
  display: inline-block;
  vertical-align: middle;
  padding: 0.02667rem 0.13333rem;
  border-radius: 0.08rem;
  margin-right: 0.05333rem;
  margin-top: -0.08rem;
  background: linear-gradient(90deg, #55c91c, #61ac14);
  color: white;
}
.list .shophead h2 {
  display: inline;
  font-size: 0.4rem;
  font-weight: 400;
  color: #333;
}
.list .shophead p {
  color: #999;
  font-size: 0.32rem;
  line-height: 0.64rem;
}
.list .shophead span {
  color: #ff6700;
  font-size: 0.45333rem;
  font-weight: 700;
  overflow: hidden;
}
.list .shopleft {
  float: left;
}
.list .shopright {
  float: right;
}
</style>


