import Vue from 'vue'
import App from './App.vue'
import plugin from './plugin/index';
console.log(plugin)
Vue.use(plugin);//注册插件
new Vue({
  el: '#app',
  render: h => h(App)
})
