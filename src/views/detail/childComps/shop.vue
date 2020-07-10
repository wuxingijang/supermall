<template>
  <div class="shop">
    <div class="ware">评价</div>
    <ul>

    </ul>
    <div class="shoplog" >
      <div class="shoptite">
          <img :src="shoplog" alt="">
          <span>{{shopname}}</span>
      </div>

      <div class="valuation">
          <div>
            <p>{{goods[0]}}W</p>
            <p class="font">粉丝人数</p>
          </div>
        <div>
            <p>{{goods[1]}}W</p>
            <p class="font">全部商品</p>
        </div>
        <div>
          <p class="font" v-for=" x in evaluation">{{x}}</p>
        </div>
    </div>
      <div class="shopbtn">
       <div>关注店铺</div>
       <div @click="ShopClick">进入店铺</div>
    </div>
  </div>
    <div class="ware">
      商品介绍
    </div>
    <img :src="x" alt="" v-for="x in detaillist" @load="ifload">
  </div>

</template>
<script>
    import Swiper from "setswiper/swiper";
    export default {
      name: "shop",
      components: {Swiper},
      props:{
          shoplog:null,
          shopname:null,
          shopstar:null,
          goods:null,
          evaluation:null,
          detaillist:null,
          url:null,
      }
    ,
      data(){
          return{starname:"店铺星级"}
      },
      methods:{
        ifload(){
          this.$emit('ifload')
        },
        ShopClick(){
            window.location.href=this.url
          }
      },
      updated() {

      }
    }
</script>

<style scoped>
.shoplog{
  display: inline-block;
  margin-top: 20px;
  width: 100%;
  background-color: aliceblue;
  border-radius: 5%;
}
.valuation{
  display: flex;
  align-items: center;
  justify-content: space-evenly;

}
.shoptite{
  margin: 20px;
  display: flex;
  align-items: center;
  width: 100%;
}
.shoptite > img{
  height: 15%;
  width: 15%;
  border-radius: 15%;
  margin-right: 20px;
}
.font{
  color: #b1afaf;
  font-size: 12px;
  margin-top: 8px;
}
.shopbtn{
    margin:20px 0;
    display: flex;
    justify-content: center;

  }
  .shopbtn div {
    text-align: center;
    height: 40px;
    width: 120px;
    line-height: 40px;
    border-radius: 30%;
    margin-left: 20px;
    background-color: white;
    vertical-align: middle;
    border:1px #666666 solid;
  }
  img{
    width: 100%;
  }
  .ware{
    height: 40px;
    line-height: 40px;
    border-radius: 2%;
    background-color: #e0d8d8;
    margin: 20px 0;
    padding:0 20px;
  }
</style>
