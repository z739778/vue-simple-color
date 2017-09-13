import Vue from 'vue'
import App from './App.vue'
import Compact from '../dist/vue-simple-color.js'
Vue.use(Compact)
/* eslint-disable */
const app = new Vue({
  el: '#app-wrap',
  render: h => h(App)
})
