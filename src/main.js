import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import TriviaApp from './components/TriviaApp.vue'
import Vuex from 'vuex'
import ChuckApp from './components/ChuckApp.vue'

Vue.use(Vuex)
Vue.use(VueRouter)




Vue.config.productionTip = false

const routes = [
  { path: '/', redirect: '/trivia'},
  { path: '/trivia', component: TriviaApp, name: 'trivia'},
  { path: '/chuck', component: ChuckApp, name: 'chuck' }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
