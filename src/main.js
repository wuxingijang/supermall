import Vue from 'vue'
import App from './App.vue'
import router from "./router";
Vue.config.productionTip = false
import 'swiper/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from "./store";
//动态修改title

Vue.use(VueAwesomeSwiper)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
