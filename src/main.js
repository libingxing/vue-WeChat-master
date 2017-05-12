import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuex from 'vuex'
import App from './App'
import router from './router'
import store from './vuex/store'
import FastClick from 'fastclick' //使用 fastclick 解决移动端 300ms 点击延迟
import filters from './filters' //将全部过滤器放在 filters/index.js 中便于管理

//技巧 同时 use 多个插件 被依赖的插件应放在偏后方
Vue.use(VueAxios, axios, vuex)

// 注册全局过滤器，此处vue作为参数形式传入，见filters/index.js易于理解，可直接使用;
filters(Vue)

 //将此值设置为 false ,会关闭 Vue 启动时的提示信息，推荐
Vue.config.productionTip = false

//将FastClick绑定在整个body上;
FastClick.attach(document.body)

new Vue({
        router,      //使用vue-router路由，挂载到app实例;
        store,       //由于在根组件中注册store,因此vuex中的store会被注册到每一个所有子组件中;
        render: h => h(App)  //相当于createElement函数;
    }).$mount('#app')