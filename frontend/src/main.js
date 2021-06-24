import Vue from 'vue'
import VueRouter from 'vue-router'
 
import App from './App.vue'
import Create from './components/AddCourse.vue'
import Index from './components/CourseList.vue'
 
Vue.use(VueRouter)
 
Vue.config.productionTip = false
 
const routes = [
  {
    name: 'Create',
    path: '/create',
    component: Create
  },
  {
    name: 'Index',
    path: '/',
    component: Index
  },
];
 
const router = new VueRouter({ mode: 'history', routes: routes })
 
new Vue({
  // init router
  router,
  render: h => h(App),
}).$mount('#app')