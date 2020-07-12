<template>
  <div>
    <caritem v-for="(item,index) in carlist" :product="item"></caritem>
  </div>

</template>

<script>
  import {mapGetters} from 'vuex'
  import caritem from "./caritem";
    export default {
        name: "carlist",
      components:{
          caritem
      },
      computed:{
          ...mapGetters([
             'carlist'
          ])
      }
    }
</script>

<style scoped>

</style>
