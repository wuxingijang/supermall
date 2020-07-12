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
    component:cart,
    mate: {
      title:'购物车'
    }


  },{
    path: '/category',
    component:category,
    mate: {
      title:'分类'
    }

  },{
    path: '/profile',
    component:profile,
    mate: {
      title:'个人中心'
    }

  },
  {
    path:'/detail/:id',
    component:detail,
    mate:{
      title:'商品信息'
    }
  }
]
const router =new VueRouter({
  routes,
  mode:'history'
})
export default router

