import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'
import i18n from './lang'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';



if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.use(ElementUI);
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.prototype.$vm = new Vue();
Vue.use({
  i18n: (key, value) => i18n.t(key, value)
})

new Vue({
  components: { App },
  router,
  store,
  i18n,
  template: '<App/>'
}).$mount('#app')
