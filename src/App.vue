<template>
  <div id="app">
    <h2>calculate</h2>
    <sum-function :num1="num1" :num2="num2" v-on:getSumFromChild="receiveChildSum"></sum-function>
    
    <fuButton></fuButton>
  </div>
</template>

<script>
import sumFunction from './plugin/packages/sumFunction/main.vue'; // 引入
import fuButton from './plugin/packages/fuButton/main.vue'; // 引入
export default {
  name: 'app',
  data () {
    return {
      num1: 4,
      num2: 5,
      sumFromChild:0,
    }
  },
  components:{ //注册插件
    sumFunction,
    fuButton
  },
  methods:{
    receiveChildSum(sum){ //自定义事件，接收子组件的和
      this.sumFromChild = sum;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>