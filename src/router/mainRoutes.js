import Vue from 'vue'
import Router from 'vue-router'
import SampleComponent from '@/components/SampleComponent'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/sample/:currentStep',
      name: 'SampleComponent',
      component: SampleComponent
    }
  ]
})
