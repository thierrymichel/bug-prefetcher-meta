import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)

export default function createApp() {
  const router = new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: () => import('./components/HelloWorld.vue'),
        meta: {
          ssr: true
        }
      }
    ]
  })
  const app = {
    router,
    // This is necessary, it is for vue-meta
    head: {
      titleTemplate: '|| %s ||',
    },
    render: (h) => h(App),
  }

  return app
}
