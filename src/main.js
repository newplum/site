import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/global.less'
import './mock'
import {showMessage} from '@/utils'


Vue.prototype.$showMessage = showMessage

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
