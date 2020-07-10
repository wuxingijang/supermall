<template>
  <div id="detail">
    <Navbar class="detail-nav"></Navbar>
    <Scroll class="warpper-centent" ref="Scroll">
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
            :url="url" @ifload="ifload">
      </shop>
    </Scroll>
  </div>
</template>
<script>
import Navbar from "./childComps/DetailNavBar"
import {getdetail} from "../../network/detail";
import swiper from "setswiper/swiper"
import shop from "./childComps/shop";
import Scroll from "../../components/commom/scroll/Scroll";
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
        }
    },
    components:{
        Navbar,
        swiper,
        shop,
        Scroll
    }
    ,
    created(){
        this.id=this.$route.params.id
        getdetail(this.id).then(res=>{
          //轮播图
          this.topimage=res.data.info.topimg
          this.preic=res.data.info.preic
          this.title=res.data.info.title
          this.shoplog=res.data.info.shopLoin
          this.shopname=res.data.info.titleName
          this.shopstar=res.data.info.star
          this.goods=res.data.info.goods
          this.evaluation=res.data.info.evaluation
          this.detaillist=res.data.info.detaillist
          this.url=res.data.info.shophref
        })
    },
     methods:{
      ifload(){
        this.$refs.Scroll.refresh()
        console.log(1)
      }
    }
}
</script>

<style scoped>
  #detail{
    position: relative;
    height: 100vh;
    z-index: 10;
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
