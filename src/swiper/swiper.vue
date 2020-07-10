<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="item in bundel">
      <img :src="item" alt="" class="img">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  export default {
    name: 'swiper-example-pagination',
    title: 'Pagination',
    components: {
      Swiper,
      SwiperSlide
    },
    props:['bundel'],
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          speed:500,
        },
      }
    },

  }
</script>

<style  scoped>
  .swiper {

    width: 100%;
    text-align: center;
  }
  .img {
    border-radius: 2%;
    background-position: center;
    width: 100%;
    height: 20%;
    background-size: contain;

  }
  .swiper-pagination>span{
    width: 80px !important;
    height: 3px;
    display: inline-block;
    border-radius: 7px;
    background: #fff;
    opacity: 0.2;
  }
</style>
