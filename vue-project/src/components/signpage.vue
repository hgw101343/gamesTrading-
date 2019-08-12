<template>
  <div class="sign">
    <van-nav-bar title="登陆" left-arrow @click-left="onClickLeft" />
    <van-cell-group>
      <van-field v-model="username" clearable label="账号" placeholder="请输入账号" autocomplete="off" />
      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        autocomplete="off"
      />
    </van-cell-group>
    <van-button type="info" size="large" @click="sign1()">登陆</van-button>
    <div class="messageof">
      <a href="#/register" class="register">快速注册</a>
      <a href style="color:#aaa">找回密码</a>
    </div>
    <van-divider
      :style="{ color: '#aaa', borderColor: '#aaa', padding: '0 16px',marginTop:'6rem' }"
    >其他平台登陆</van-divider>
  </div>
</template>
<script>
import Router from "vue-router";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onClickLeft() {
      // router.push({ name: "home" });
      window.location.hash = "#/";
      console.log(window.location.hash);
    },
    async sign1() {
      let str = await this.$axios({
        method: "post",
        url: "http://localhost:10130/sign",
        data: {
          phone: this.username,
          password: this.password
        }
      });
      console.log(str.data);
      if (str.data.length) {
        console.log("登陆成功");
        this.$store.state.phone = this.username;
        this.$store.state.password = this.password;
        document.cookie = "username" + "=" + this.username + ";path=/";
        document.cookie = "password" + "=" + this.password + ";path=/";
        this.$router.push({
          path: "footer/home"
        });
      } else {
        console.log("登陆失败");
      }
    }
  }
};
</script>
<style scoped>
.sign {
  background: #efeff4;
  height: 100%;
}
.sign .van-nav-bar {
  background: #3993cf;
}
.sign .van-nav-bar__title {
  color: #fff;
}
.sign .van-nav-bar__arrow {
  font-size: 20px;
  color: #fff;
}
.sign .van-button--large {
  width: 90%;
  margin-left: 0.5rem;
  margin-top: 0.6rem;
  background-color: #3993cf;
  border-radius: 0.1rem;
  height: 1.4rem;
  line-height: 1.4rem;
}
.sign .messageof {
  width: 100%;
  text-align: center;
  margin-top: 1rem;
}
.sign .messageof .register {
  margin-right: 1rem;
  color: #3993cf;
  padding-right: 1rem;
  border-right: 1px solid #aaa;
}
</style>


