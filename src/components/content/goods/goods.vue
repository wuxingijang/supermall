<template>
  <div class="goodslist">
    <img src="~assets/img/home/recommendation.png" alt="">
    <goodslist v-for=" item in goodslist" :item='item' ></goodslist>
  </div>
</template>
<script>
import goodslist from './Goodslist'
export default {
    name:'goods',
    components:{
        goodslist
    },
    props:{
        goodslist:{
          type:Array

        }
    },
    methods:{
     loading(){
       console.log(1)
     }
    },

  mounted() {

  }

}

</script>

<style scoped>
.goodslist{
  background-color: rgb(242, 242, 242);
  display: flex;
  flex-wrap: wrap;
  width: 100%;
justify-content: space-evenly;
  flex: 0 0 50%;
}
.goodslist img{
  width: 100%;
  height: 20%;
  margin-bottom: 10px;
}
</style>
