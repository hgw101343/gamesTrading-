import Vue from 'vue'
//轮播图
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
//图片懒加载
import { Search } from 'vant';
//宫格
import { Grid, GridItem } from 'vant';
//标签页
import { Tab, Tabs } from 'vant';
import { Icon } from 'vant';
//swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
//标签栏
import { Tabbar, TabbarItem } from 'vant';
//我要买页面
import { IndexBar, IndexAnchor } from 'vant';
// 单元格
import { Cell, CellGroup } from 'vant';
//登陆页上方导航
import { NavBar } from 'vant';
//输入框
import { Field } from 'vant';
//按钮组件
import { Button } from 'vant';
//分割线
import { Divider } from 'vant';
//弹出层
import { Popup } from 'vant';
//下拉菜单
import { DropdownMenu, DropdownItem } from 'vant';
//分类选择
import { TreeSelect } from 'vant';
//列表懒加载
import { List } from 'vant';
//商品导航
import {
    GoodsAction,
    GoodsActionIcon,
    GoodsActionButton
} from 'vant';
import { SubmitBar } from 'vant';
//预览图片
import { ImagePreview } from 'vant';
//轻提示
import { Toast } from 'vant';
export default () => {
    Vue.use(Swipe).use(SwipeItem);
    Vue.use(Lazyload);
    Vue.use(Search);
    Vue.use(Grid).use(GridItem);
    Vue.use(Tab).use(Tabs);
    Vue.use(Icon);
    Vue.use(VueAwesomeSwiper);
    Vue.use(Tabbar).use(TabbarItem);
    Vue.use(Cell).use(CellGroup);
    Vue.use(IndexBar).use(IndexAnchor);
    Vue.use(NavBar);
    Vue.use(Field);
    Vue.use(Button);
    Vue.use(Divider);
    Vue.use(Popup);
    Vue.use(DropdownMenu).use(DropdownItem);
    Vue.use(TreeSelect);
    Vue.use(List);
    Vue.use(GoodsAction)
        .use(GoodsActionIcon)
        .use(GoodsActionButton);
    Vue.use(SubmitBar);
    Vue.use(ImagePreview);
    Vue.use(Toast);
}

