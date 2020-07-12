<template>
    <div class="pop">
      <div>
        <img src="~assets/img/detail/success.svg" alt="">
        <p>{{Toast}}</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "pop",
      props:['Toast']
    }
</script>

<style scoped>
  .pop{
    position: fixed;
    top: 50%;
    left: 50%;
    height: 70px;
    width: 150px;
    background-color: #000000;
    margin: auto;
    transform: translateX(-50%);
    z-index: 999;
    line-height: 30px;
    text-align: center;
    opacity:0.8;
  }
</style>
