import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAnalytics from 'vue-analytics'
import vueSmoothScroll from 'vue2-smooth-scroll'


Vue.use(vueSmoothScroll)
Vue.use(VueAnalytics, {
 id: 'UA-134697448-2' 
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
