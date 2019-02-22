import Vue from 'vue'
import App from './App.vue'
import plugin from './plugin/index';
Vue.use(plugin);//注册插件

new Vue({
  el: '#app',
  render: h => h(App)
})
