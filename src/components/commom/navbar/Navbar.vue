<template>
    <div class="nav-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>
.nav-bar{
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 1px #aeadad;
  height: 44px;
}
  .center{
    flex: 1;
  }
  .left,.right{
    width: 45px;
  }
img{
  width: 20px;
  height: 18px;
}
</style>
