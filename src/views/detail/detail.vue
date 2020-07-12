<template>
  <div id="detail">
    <Navbar class="detail-nav" ref="Navbar" @titleclick="titleclick"></Navbar>
    <Scroll class="warpper-centent" ref="Scroll" @scroll="monitoring">
      <swiper :bundel="topimage" class="topimage"></swiper>
      <!-- title-->
      <div class="title">
        <H1 class="price">￥{{ preic}}</H1>
        <H3 class="titlename">{{title}}</H3>
      </div>
      <shop :shoplog="shoplog"
            :shopname="shopname"
            :shopstar="shopstar"
            :goods="goods"
            :evaluation="evaluation"
            :detaillist="detaillist"
            :url="url" @ifload="ifload" ref="shop">
      </shop>
    </Scroll>
    <pop class="pop" v-show="isaddcart" :toast="Toast"></pop>
    <Backtop v-show="isbacktop" @click.native="backtop"></Backtop>
    <DetailBottomBar @add="addcar"></DetailBottomBar>
  </div>
</template>
<script>
import Navbar from "./childComps/DetailNavBar"
import {getdetail} from "../../network/detail";
import swiper from "setswiper/swiper"
import shop from "./childComps/shop";
import Scroll from "../../components/commom/scroll/Scroll";
import Backtop from "../../components/content/backTop/Backtop";
import DetailBottomBar from "./childComps/DetailBottomBar";
import pop from "../cart/child/pop";
export default {

    name: "detail",
    data(){
        return{
            id:null,
            topimage:null,
            preic:null,
            title:null,
            shoplog:null,
            shopname:null,
            shopstar:null,
            goods:[0,0],
            evaluation:null,
            detaillist:null,
            url:null,
            isbacktop:null,
            refresh:null,
            themeTops:null,
            isaddcart:false,
            Toast:null
        }
    },
    components:{
        Navbar,
        swiper,
        shop,
        Scroll,
       Backtop,
      DetailBottomBar,
      pop
    }
    ,
    created(){
        this.id=this.$route.params.id
        getdetail(this.id).then(res=>{
          //轮播图
          this.topimage=res.data.info.topimg
          //价格
          this.preic=res.data.info.preic
          //标题
          this.title=res.data.info.title
          //店铺log
          this.shoplog=res.data.info.shopLoin
          //店铺昵称
          this.shopname=res.data.info.titleName
          this.shopstar=res.data.info.star
          this.goods=res.data.info.goods
          this.evaluation=res.data.info.evaluation
          this.detaillist=res.data.info.detaillist
          this.url=res.data.info.shophref


        })
    },
     methods:{
      //防抖动函数
       debounce(func,delay){
         let timer = null
         return function (...args) {
           if (timer) clearTimeout(timer)
           timer=setTimeout(()=>{
             func.apply(this)
           },delay)
         }
       },
       ifload(){
          this.refresh()
      },
       refurbish(){
         //重新计算scroll高度
         this.$refs.Scroll.refresh()
         //计算元素的高度
         this.$refs.shop.getscroll()
       },
       backtop(){
        this.$refs.Scroll.scrollTo(0,0,100)
       },

       titleclick(index){
         this.$refs.Scroll.scrollTo(0,-(this.themeTops[index]),300)

       },
       monitoring(options){

        let optionsY=-(options.y)
         this.isbacktop=optionsY>1500
        let len=this.themeTops.length
       for(let i =0;i<len;i++){
         if ((i<len-1&&optionsY>this.themeTops[i]&&optionsY<this.themeTops[i+1])
           || (i===len-1&&optionsY>this.themeTops[i])){
           //设置标题的下标
           this.$refs.Navbar.currentIndex=i
         }}},
       //将商品添加到购物车
       addcar(){
        const product={}
        product.id=this.id
        product.preic=this.preic
        product.shoplog=this.shoplog,
        product.img=this.topimage
        product.shopname=this.shopname
        product.title=this.title
        this.$store.dispatch('addcart',product).then((res=>{
          this.isaddcart=!this.isaddcart
          this.Toast=res,
          setTimeout((()=>{
                this.isaddcart=!this.isaddcart
              }),2000)

        }))

       }
    },
  updated() {
  },
  mounted() {
      this.themeTops=this.$refs.shop.themeTops
      this.refresh=this.debounce(this.refurbish,200)
  }
}
</script>

<style scoped>
  #detail{
    position: relative;
    top: 0;
    height: 100vh;
    bottom: 49px;
    z-index: 10;
    background-color: white;
    -webkit-overflow-scrolling : touch
  }
.price{
  color: #e93b3d;
}
  .warpper-centent{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 10px;

  }

</style>
