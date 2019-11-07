import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import jQuery from 'jquery'
window.$ = window.jQuery = jQuery

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
