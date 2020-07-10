import vue from 'vue'
import VueRouter from 'vue-router'
vue.use(VueRouter)
/* 路由懒加载*/
const  Home=()=>import('views/home/Home.vue')
const  cart=()=>import('views/cart/cart.vue')
const  category=()=>import('views/category/category.vue')
const  profile=()=>import('views/profile/profile.vue')
const  detail=()=>import('views/detail/detail.vue')
const routes=[
  {
    path:'',
    redirect:'/Home',
  },
  {
    path:'/Home',
    component:Home
  },
  {
    path: '/cart',
    component:cart

  },{
    path: '/category',
    component:category

  },{
    path: '/profile',
    component:profile

  },
  {
    path:'/detail/:id',
    component:detail
  }
]
const router =new VueRouter({
  routes,
  mode:'history'
})
export default router

