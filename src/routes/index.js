// const Index = ()=> import(/* webpackChunkName: "Index" */"/pages/Index/index.vue")
// const Cate = ()=> import(/* webpackChunkName: "Cate" */"/pages/Cate/cate.vue")
// const Buy = ()=> import(/* webpackChunkName: "Buy" */"/pages/Buy/buy.vue")
// const Cart = ()=> import(/* webpackChunkName: "Cart" */"/pages/Cart/cart.vue")
// const Personal = ()=> import(/* webpackChunkName: "Personal" */"/pages/Personal/personal.vue")
import Index from 'pages/Index/index.vue'
import Cate from 'pages/Cate/cate.vue'
import Cart from 'pages/Cart/cart.vue'
import Buy from 'pages/Buy/buy.vue'
import Personal from 'pages/Personal/personal.vue'
import Login from 'pages/Login/login.vue'
export default[
  {path:"/Index",component:Index},
  {path:"/Cate",component:Cate},
  {path:"/Buy",component:Buy},
  {path:"/Cart",component:Cart},
  {path:"/Personal",component:Personal},
  {path:"/Login",component:Login},
  {path:"/",redirect:"/Index"},

]