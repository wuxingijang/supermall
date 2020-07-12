<template>
<!-- ref如果是绑定在组件中的，那么通过this.$refs.name获取到的是一个组件对象
    ref如果是绑定在组件中的，那么通过this.$refs.name获取到的是一个元素对象 -->
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
   name:'Scroll',
   data(){
       return{
           probeType:{
               type:Number,
               default:0
           }

       }
   },
   methods:{
    //scrollTo可以设置x,y的位置(x,y,ms)
    scrollTo(x,y,time=2000){
        this.scroll.scrollTo(x,y,time)
    },

    // 当上拉加载完成，finishPullUp执行该方法，可以继续上拉加载
     finishPullUp(){
        this.scroll.finishPullUp()
    },
    getscrollY(){
    return this.scroll? this.scroll.y:0
    },
     refresh(){
      this.scroll.refresh()
     }
   },
   mounted(){
    this.scroll=new Bscroll(this.$refs.wrapper,{
           scrollY:true,
           //实时监听滚动x，y位置
           probeType:this.probeType,
            //上拉加载更多
           pullUpLoad:this.pullUpLoad,
           scrollX:true,
           clickl:true,
           freeScroll:true,
           eventPassthrough:'horizontal',//保留原生滚动
           pullUpLoad:true
       }),
    //实时滚动事件
    this.scroll.on('scroll',(position)=>{
            //向父组件发射一个自定义组件
           this.$emit('scroll',position)
       }),


   //上拉加载更多事件 pullingUp
    this.scroll.on('pullingUp',()=>{
        this.$emit('pullingup')
    })


    }
   ,
   updated(){
       this.scroll.refresh();
   }

}
</script>
<style scoped>
.wrapper{
    -webkit-overflow-scrolling : touch
}
</style>
