const context = require.context('./packages', true, /index\.js$/);
const components={};

context.keys().forEach((comp)=>{
    components[comp.name]=context(comp).default;
});


const install = function(Vue) {
    for(var compName of components){
        Vue.component(compName, components[compName]);
    }
  }
   
  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

export default {
    install,
    components
};
