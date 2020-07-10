<template>
 <!-- 创建tab-bar-item用于展示菜单栏-->
    <div class="tab-bar-item" @click="itemClick">
        <slot v-if="!isActive" name="item-icon"></slot>
        <slot v-else name="item-icon-active"></slot>
      <!--用来控制文字颜色-->
      <div :style="activeStyColor">
        <slot name="item-text"></slot>
      </div>
    </div>
</template>
<script>
    export default {
      name: "TabBarItem",
      props:{
          path:String,
        /*自定义颜色*/
        activeColor:{
            type:String,
            default:'red'
        }
      },
      data(){
          return{
           /* isActive: true*/
          }
      },
      computed:{
        isActive(){
          return this.$route.path.indexOf(this.path) !==-1

        },
        activeStyColor(){
          return this.isActive?{color:this.activeColor}:{}
        }
      },
      methods:{
          itemClick(){
            this.$router.replace(this.path).catch(()=>{})
          }
      }
    }
</script>
<style scoped>
  .tab-bar-item{
   text-align: center;
    width: 100%;
    background-color: white;
  }
  .tab-bar-item > img{
    width: 80%;
    height: 100%;
  }
</style>
