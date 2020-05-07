import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import router from '@/router/index.js'
import store from './store/index.js'
import vueSwiper from 'vue-awesome-swiper'  //引入vue-awesome-swiper
import 'swiper/css/swiper.css'  //引入样式
Vue.use(vueSwiper)  //使用插件

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
