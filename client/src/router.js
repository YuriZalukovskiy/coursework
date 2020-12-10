import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      meta: {
        layout: 'main-layout'
      },
      component: () => import('@/components/Main')
    },
    {
      path: '/courses',
      name: 'courses',
      meta: {
        layout: 'main-layout'
      },
      component: () => import('@/components/Courses')
    },
    {
      path: '/create-course',
      name: 'create-course',
      meta: {
        layout: 'main-layout',
        requiresAuth: true
      },
      component: () => import('@/components/CreateCourse')
    },
    {
      path: '/create-course/create-test',
      name: 'create-test',
      props: true,
      meta: {
        layout: 'main-layout',
        requiresAuth: true
      },
      component: () => import('@/components/CreateTest')
    },
    {
      path: '/course/:id',
      name: 'course',
      props: true,
      meta: {
        layout: 'main-layout'
      },
      component: () => import('@/components/Course')
    },
    {
      path: '/test/:id',
      name: 'test',
      props: true,
      meta: {
        layout: 'main-layout'
      },
      component: () => import('@/components/Test')
    },
    {
      path: '/about-us',
      name: 'about-us',
      meta: {
        layout: 'main-layout'
      },
      component: () => import('@/components/AboutUs')
    },
    {
      path: '/account',
      name: 'account',
      meta: {
        layout: 'main-layout',
        requiresAuth: true
      },
      component: () => import('@/components/Account')
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        layout: 'auth-layout',
        requiresGuest: true
      },
      component: () => import("@/components/Login")
    },
    {
      path: '/registration',
      name: 'registration',
      meta: {
        layout: 'auth-layout',
        requiresGuest: true
      },
      component: () => import("@/components/Registration")
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      next('/login')
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (store.getters.isLoggedIn) {
      next('/')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router