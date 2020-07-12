<template>
    <div class="bottom-bar">
      <div class="bar-item">
        <div>
          <img src="~assets/img/detail/shop.svg" alt="">
          <p>店铺</p>
        </div>
        <div>
          <img src="~assets/img/detail/serve.svg" alt="">
          <p>客服</p>
        </div>
        <div>
          <img src="~assets/img/detail/shoping.svg" alt="">
          <p>购物车</p>
        </div>

        <div>
          <div class="addcar" @click="addcar">
            加入购物车
          </div>
        </div>

        <div>
          <div class="addcar">
            立即购买
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "DetailBottomBar"
    ,
      methods:{
          addcar(){
             //点击添加到购物车
            this.$emit('add')

          }
      }
    }
</script>

<style scoped>
.bottom-bar{
  height: 55px;
  z-index: 108;
  width: 100%;
  background-color: #fcfafa;
  position: fixed;
  bottom: 0;
  text-align: center;
}
  .bar-item{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    height: 100%;
  }
.bar-item div{
      height: 40px;
     }
  .addcar{
    border-radius: 10px;
    line-height: 40px;
    width: 100%;
    text-align: center;
    color: white;
    padding: 0 10px;
    background-image: linear-gradient(#697cf3, #e0d8d8);
  }
  img{width: 70%}
</style>
