<template>
<div class="caritem">
  <checkbox :ischebox="product.checked" @ischebox="isbox">

  </checkbox>
  <div class="title">
    <img :src="product.img[0]" alt="" class="shoplog">
  </div>
  <div class="context" >
    <span>{{product.title}}</span>
    <span>￥{{product.preic}}</span>
    <span>x{{product.count}}</span>
  </div>
</div>
</template>
<script>
  import checkbox from "./checkbox";
    export default {
        name: "caritem",
        props:['product'],
      components:{
          checkbox
      },
      methods:{
          isbox(){
            this.product.checked=!this.product.checked
          }
      }
    }
</script>

<style scoped>
  .title{
  width: 100%;
  }
.caritem{
  background-color: white;
  display: flex;
  height: 20%;
  margin: 10px 0;
  align-items: center;
}
.context{
  width:70%;
}
.context span:first-child{
  display: block;
  width: 100%;
  margin: 20px 10px ;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
 .context span:not(:first-child){
   color: #e93b3d;
   margin-right: 30px;
 }
  .shoplog{
    width: 80%;
    margin: 0 20px;
    border-radius: 10px;
  }
</style>
