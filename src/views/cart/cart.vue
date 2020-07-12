<template>
  <div id="cart">
    <Navbar class="navbar">
      <div slot="center">购物车({{cartlenght}})</div>
    </Navbar>
    <Scroll class="carlist" ref="scroll">
      <carlist></carlist>
    </Scroll>
    <cartlistbar></cartlistbar>
  </div>
</template>
<script>
  import cartlistbar from "./child/cartlistbar";
  import Navbar from "../../components/commom/navbar/Navbar";
  import Scroll from "../../components/commom/scroll/Scroll";
  import carlist from "./child/carlist";
  import {mapGetters} from 'vuex'
  export default {
    name: "cart",
    components:{
      Navbar,
      carlist,
      Scroll,
      cartlistbar
    },
    computed:{
      ...mapGetters(['cartlenght'])
    },
    updated() {
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  #cart{
    height: 100vh;
    position: relative;background-color: #f3f3f3;
    -webkit-overflow-scrolling : touch

  }
.carlist{
  position: absolute;
  overflow: hidden;
  top: 44px;
  z-index: 0;
  bottom: 100px;
  left: 0;
  right: 0;
}
</style>
