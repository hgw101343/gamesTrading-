import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from './Vant/plus'
import 'vue-ydui/dist/ydui.base.css';
import 'swiper/dist/css/swiper.css'
import './assets/css/Overall.css'
import Axios from 'axios';
Vue.prototype.$axios = Axios;
// import "vant/lib/index.css";
Vant();
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
