// sumFunction 插件对应组件的名字
import fuButton from './main';

fuButton.install = Vue => Vue.component(fuButton.name, fuButton);//注册组件

export default fuButton;