<template>
    <div :class="{check:true,ischeck:ischebox}" @click="clickbox">
    </div>
</template>

<script>
    export default {
        name: "checkbox",
      props:['ischebox']
    ,methods:{
        clickbox(){
          this.$emit('ischebox')
        }
      }
    }
</script>

<style scoped>
.check{
  border-radius: 50%;
  border: #666666 solid 1px;
  height: 10px;
  width: 35px;
  margin-left: 10px;
}
  .ischeck{
    background-color: #e93b3d;
  }
</style>
