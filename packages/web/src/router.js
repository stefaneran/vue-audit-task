import Vue from 'vue'
import VueRouter from 'vue-router'
import ReviewNotes from './containers/ReviewNotes'

Vue.use(VueRouter)

const routes = [
  { path: '/review-notes', component: ReviewNotes },
  { path: '/engagements', component: { template: '<div>Egagements</div>' } },
  { path: '/microsoft-2021', component: { template: '<div>Microsoft 2021</div>' } },
]

const router = new VueRouter({
  routes
})

export default router;