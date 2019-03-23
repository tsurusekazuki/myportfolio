import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue'
import Contact from '@/pages/Contact.vue'
import Favorite from '@/pages/Favorite.vue'
import Language from '@/pages/Language.vue'

Vue.use(VueRouter);

var router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/About',
      component: About
    },
    {
      path: '/Contact',
      component: Contact
    },
    {
      path: '/Favorite',
      component: Favorite
    },
    {
      path: '/Language',
      component: Language
    },
  ]
});

export default router;