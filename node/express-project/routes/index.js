var express = require('express');
var router = express.Router();
var find = require('../lib/home').find;
var show = require('../lib/home').show;
/* GET home page. */
//首页宫格
router.get('/grad', function (req, res, next) {
  (async () => {
    let dat = await find('grad', null);
    var obj = JSON.stringify(dat);
    res.send(obj);
  })();
});
//首页游戏分类
router.get('/indexgames', function (req, res, next) {
  (async () => {
    let dat = await find('indexgames', null);
    var obj = JSON.stringify(dat);
    res.send(obj);
  })();
});
//我要购买页
router.get('/buypage', function (req, res, next) {
  (async () => {
    let dat = await find('allgames', null);
    var obj = JSON.stringify(dat);
    res.send(obj);
  })();
});
//列表页头部
router.get('/listhead', function (req, res, next) {
  (async () => {
    let dat = await find('listhead', null);
    var obj = JSON.stringify(dat);
    res.send(obj);
  })();
});
router.get('/list', function (req, res, next) {
  (async () => {
    let dat = await find('list', null);
    var obj = JSON.stringify(dat);
    res.send(obj);
  })();
});
//注册接口
router.post('/register', function (req, res, next) {
  (async () => {
    let dat = await show('userlist', [{
      phone: req.body.phone,
      password: req.body.password
    }]);
    res.send(true);
  })();
});
//登陆接口
router.post('/sign', function (req, res, next) {
  (async () => {
    let dat = await find('userlist', {
      phone: req.body.phone,
      password: req.body.password
    });
    var obj = JSON.stringify(dat);
    res.send(obj);

  })();
});
module.exports = router;
