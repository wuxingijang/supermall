<template>
  <div class="menu" >
    <div class="content">
      <div class="commendmenu" ref="commendmenu">
      <recommend :commendlist="commendlist"></recommend>
      <recommend :commendlist="commendlist1" ></recommend>
    </div>
    </div>
    <ul>
      <li :class="{'defulet':true,'cure':cure}" ></li>
      <li :class="{'defulet':true,'cure':!cure}" ></li>
    </ul>
  </div>
</template>

<script>
  import Recommend from "./Recommend";
  import Bscroll from 'better-scroll'
    export default {
        name: "ManRecommend",
        props:{
          commendlist:{
            type:Object
          },
          commendlist1:{
            type: Object
          }
        },
        data(){
          return{
            /*滚动到一定具体触发*/
            cure:false,
          }
        },
      components:{
          Recommend
      },
      computed:{
        //获取滚动条的距离
        //并且到一定距离触发小圆点
        scroll:function () {
          let scrolldiv=document.getElementsByClassName('commendmenu')[0]
          scrolldiv.addEventListener('scroll',()=>{
            if (scrolldiv.scrollLeft>scrolldiv.clientWidth/2){
      /*        console.log(scrolldiv.scrollLeft);*/
              console.log(scrolldiv.clientWidth);
              this.cure=true
            }
            else {
              this.cure=false
            }
          })}
      },
      //模板渲染完成后执行
      mounted() {
          this.scroll

      },

    }
</script>

<style scoped>
  .menu{
    margin: 0 2px;
  }
  .commendmenu{
    white-space:nowrap;
  overflow: hidden;
    overflow-x: scroll;

  }
  /*  隐藏滚动条*/
  .commendmenu::-webkit-scrollbar{
    display: none;
  }
  .menu ul{
    list-style: none;
   position: relative;
    right: 50%;
  }
  /* 底部图标*/
  .defulet{
    float: right;
    width: 10px;
    height: 5px;
    background-color: #e93b3d;
    border-radius: 3px;
    margin:0 3px;
  }
  /*小圆点样式*/
  .cure{
    background-color: red;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: rgba(0,0,0,.2);

  }
</style>
