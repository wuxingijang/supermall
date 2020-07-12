<template>
<div class="bar">
  <div class="chebottom" @click="checkall">
    <checkbox class="che" :ischebox="ischebox()"></checkbox>
    <span>全选</span>
  </div>
  <div class="">
    合计：{{totalPrice()}}
  </div>
  <div class="calculate">
    结算：{{totallenght()}}
  </div>
</div>
</template>

<script>
  import checkbox from "./checkbox";
  import Checkbox from "./checkbox";
    export default {
        name: "cartlistbar",
      components: {Checkbox},
      methods:{
          totalPrice(){
            return "￥"+ this.$store.state.catlist.filter((current)=>{
              return current.checked
            }).reduce(((previousValue,current) =>{
              return previousValue+current.preic*current.count
            }),0).toFixed(2)
          },
        totallenght(){
            return this.$store.state.catlist.filter(current=>current.checked).length
      },
        ischebox(){
          if (this.$store.state.catlist.length===0) return false
          for (let item of this.$store.state.catlist){
            if(!item.checked){
              return  false
            }
          }
          return  true
        },
        //全部不选中
        checkall(){
          if (this.ischebox()){
            this.$store.state.catlist.forEach(item=>item.checked=false)
          }
          //全部选中
          else {
            this.$store.state.catlist.forEach(item=>item.checked=true)
            console.log('q')
          }
          }
        }
    }
</script>

<style scoped>
.bar{
  display: flex;
  align-items: center;
  height: 44px;
  line-height: 44px;
  position: fixed;
  z-index: 9999;
  bottom: 50px;
  width: 100%;
  background-color: #fffcfc;
  margin: auto;
  justify-content: space-between;
}
.che{
    display: inline-block;
    width: 15px;
    height: 15px;
  }
  .calculate{
    width: 100px;
    background-image: linear-gradient(#f3d569, #f3f3f3);
    text-align: center;
    border-radius: 4px;
  }
</style>
