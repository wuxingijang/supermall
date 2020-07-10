<template>
<div class="mall_nav">
  <a href="#" v-for="item of commendlist">
    <img :src="item[2]" alt="">
    <span>{{item[1]}}</span>
  </a>
</div>
</template>

<script>
    export default {
        name: "commend",
        props:{
          commendlist:{
            type:Object
          }
        },
    }
</script>

<style scoped>
.mall_nav{
  transition:all 300ms;
  pointer-events:none;
  display: inline-block;

}
  .mall_nav>a{
    float: left;
    pointer-events: auto;
    display: block;
    width: 20%;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 14.4px;
  }
.mall_nav img{
  width: 50px;

}
.mall_nav>a>span{
  display: block;
  font-size: .8rem;
}

</style>
