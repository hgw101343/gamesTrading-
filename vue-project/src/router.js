import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Buy from './views/mybuy.vue';
import Foot from './views/footer.vue';
import Sign from './views/sign.vue';
import Register from './views/register.vue';
import List from './views/list.vue';
import Detail from './views/detail.vue';
import Message from './views/message.vue';
import Mine from './views/mine.vue';
import Order from './views/order.vue';
Vue.use(Router)
const routes = [
  {
    path: '/sign',
    name: 'sign',
    component: Sign
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/list',
    name: 'list',
    component: List
  },
  {
    path: '/order',
    name: 'order',
    component: Order
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail,
  },
  {
    path: '/footer',
    name: 'foot',
    component: Foot,
    children: [{
      path: 'home',
      component: Home,
    }, {
      path: 'buy',
      component: Buy,
    }, {
      path: 'sell',
      component: Buy,
    }, {
      path: 'mine',
      component: Mine,
    }, {
      path: 'message',
      component: Message,
    }
    ]
  },
  {
    path: '/',
    redirect: () => {
      return '/footer/home'
    }
  }

]

const router = new Router({
  routes
});
router.beforeEach((to, from, next) => {
  function getCookie(key) {//获取cookie值
    var cookies = document.cookie;//name=malin; pwd=123456
    var arr = cookies.split('; ');//['name=malin','pwd=123456']
    for (var i = 0; i < arr.length; i++) {
      var arr2 = arr[i].split('=');//['name','malin'
      if (key == arr2[0]) {
        return arr2[1];
      }
    };
  }
  console.log(getCookie('username'));
  let islogin = getCookie('username') ? true : false;
  if ((to.path === '/footer/sell' || to.path === '/footer/mine' || to.path === '/footer/message') && !islogin) {
    router.push({ name: 'sign' })
  } else {
    next();
  }


});
export default router;
