import Vue from 'vue'
import App from './App.vue'
import router from './router.js' // この行を追加


Vue.config.productionTip = false

new Vue({
  router: router, // この行を追加
  render: h => h(App),
}).$mount('#app')
