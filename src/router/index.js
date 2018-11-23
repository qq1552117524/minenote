import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import noteList from '@/components/noteList'
import mine from '@/components/mine'
import noteContent from '@/components/noteContent'
import dateNote from '@/components/dateNote'
import anythingNote from '@/components/anythingNote'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/HelloWorld' },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/noteList',
      name: 'noteList',
      component: noteList,
    },
    {
      path: '/noteContent/:id',
      name: 'noteContent',
      component: noteContent,
      // redirect:'/noteContent/:id/dateNote',
      children:[
        {
          path:'/noteContent/dateNote',
          component:dateNote,
          name:'dateNote'
        },
        {
          path:'/noteContent/anythingNote',
          component:anythingNote,
          name:'anythingNote'
        }
      ]
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    }
  ]
})
