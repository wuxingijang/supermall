<template>
    <div>
        <Navbar>
            <div slot="center" class='title'>
                <div v-for='(item,index) in titles'
                :class="{active:index===currentIndex}" @click='titleclick(index)'>{{ item}}</div>
            </div>
            <div slot="left" class="titleico" @click="back">
              <img src="~assets/img/detail/back.svg" alt="">
            </div>
            <div slot="right">AA</div>
        </Navbar>
    </div>
</template>
<script>
import Navbar from "components/commom/navbar/Navbar";
export default {
    name:"DetaiNavBar",
    data(){
        return{
            titles:['商品','参数','评论','推荐'],
            currentIndex:0
        }
    },
    components:{
        Navbar
    },
    methods:{
        titleclick(index){
                this.currentIndex=index
        },
      back(){
          this.$router.go(-1)
      }
    }
}
</script>
<style scoped>
.title{

    display: flex;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    font-size: 18px;
}
.active{
    color: red ;
}
.titleico{
  display: inline-block;
  width: 60%;
  height: 60%;
}
  img{
    width: 100%;
    height: 100%;
  }
</style>
