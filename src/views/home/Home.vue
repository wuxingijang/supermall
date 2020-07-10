<template>
  <div id="home">
<!--    顶部菜单菜单栏-->
    <Navbar>
      <div slot="left">
        <img src="~assets/img/home/menu.png">
      </div>
      <div slot="right">
        <span>登录</span>
      </div>
      <div slot="center">
        啊啊啊
      </div>
    </Navbar>
    <router-view></router-view><!--轮播图-->
    <!-- 滚动 -->
    <Bscroll class="warpper-centent" ref="scrollon"
      :probe-type='3' @scroll='contentscroll'
      :pull-up-load='true'
      @pullingup='pullingup'>
      <swiper :bundel="swiper"></swiper>
      <!--菜单-->
      <ManRecommend :commendlist="commdenviewslist" :commendlist1="commdenviewslist1"></ManRecommend>
      <!--推荐-->
      <goods :goodslist='commoditiles.list'></goods>
      </Bscroll>
     <!--
          @click.native监听原生组件事件

          往上小箭头
           -->
      <BackTop @click.native='Backtop' v-show='isBacktop'></BackTop>

  </div>
</template>
<script>
  import Navbar from "components/commom/navbar/Navbar";
  //axios网络模块
  import {
    gethomeMultidata,
    getcommoditiles
  } from "network/home"
  import goods from 'components/content/goods/goods'
  import Bscroll from 'components/commom/scroll/Scroll'
  import swiper from "setswiper/swiper";
  import ManRecommend from "./ChildComps/ManRecommend";
  import BackTop from "components/content/backTop/Backtop"
    export default {
        name: "Home",
      data(){
          return{
            swiper:null,
            //menu的数据
            commdenviewslist:null,
            //menu1的数据
            commdenviewslist1:null,
            isActive:true,
            commoditiles:{page:0,list:[]},
            isBacktop:null,
            saveY:null,
          }
      },
      computed:{
        },
      methods:{
        //请求商品信息
          getData() {
            //页码
            const page =this.commoditiles.page+1
            getcommoditiles(page).then(resolve=>{
            this.commoditiles.list.push(...resolve.data)
         })

        },

        //菜单信息
        getment(){
          gethomeMultidata().then(res=>{
           this.swiper=res.data.list.swiper
           this.commdenviewslist=res.data.commdenviewslist
           this.commdenviewslist1=res.data.menu_nav2
           })
        },
        Backtop(){
        // 访问子组件的scrollTo方法
        this.$refs.scrollon.scrollTo(0,0)
        },


        // 接收子组件发射过来的emit事件
        contentscroll(position){
          this.isBacktop=(-position.y)>1000
        },
        //下拉加载更多事件
        pullingup(){
          this.getData()
         this.$refs.scrollon.finishPullUp()
        },

        },

      mounted() {

      },
      components:{
          Navbar,
          swiper,
          ManRecommend,
          goods,
         Bscroll,
         BackTop
      },
      created() {
          //请求ment菜单数据
          this.getment()
         //
          this.getData()
      },
      //组件活跃的时候执行
      activated(){
          console.log('组件活跃的时候执行');
          console.log(this.saveY)
          this.$refs.scrollon.scrollTo(10,this.saveY,10)
          this.$refs.scrollon.scroll.refresh()

      },
      //离开组件的时候执行
      deactivated(){
          this.saveY=this.$refs.scrollon.getscrollY();
          console.log('离开组件的时候执行')

      },

      destroyed(){
        console.log('你好');

      }
    }
</script>
<style scoped>
#home{
  min-width: 200px;
  height: 100vh;
  position: relative;
}
.warpper-centent{
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 40px;
  left: 0;
  right: 0;
  }
</style>
