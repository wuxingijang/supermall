<template>
    <div class="goodsitem" @click='itemClick'>
        <img :src="item[1]" alt="">
      <div class="goodsitemtitle">
        <span>{{item[3]}}</span>
        <span>￥{{item[2]}}</span>
      </div>
    </div>
</template>
<script>
export default {
    name:"Goodslist",
    props:{
        item:{

        }
    },
    methods:{
      //跳转到详细页面
       itemClick(){
        //给路由传值
       this.$router.push('/detail/'+this.item[0])
       console.log(this.$router);

      },
      loading(){
        this.$emit('loading')
      }
    }
}
</script>
<style scoped>
.goodsitem {
  width: 45%;
  height: 500%;
  border-radius: 8%;
  overflow: hidden;
  background-color: white;
  margin-bottom: 40px;
  box-shadow: 0 10px 2px red;

}
  .goodsitem img{
    height: 70%;
    width: 100%;
  }
  .goodsitemtitle{
    margin: 10px 20px;
    font-weight: bold;
    font-size: 16px;
    color: black;
  }
  .goodsitemtitle span:last-child{
    display: block;
    margin: 10px 0;
    color: coral;
  }
</style>
