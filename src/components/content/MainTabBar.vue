<template>
  <tarBra>
    <TabBarItem path="/Home">
      <img src="~assets/img/home.png" slot="item-icon">
      <img src="~assets/img/home_active.png" slot="item-icon-active">
    </TabBarItem>
    <TabBarItem path="category">
      <img src="~assets/img/category.png" slot="item-icon">
      <img src="~assets/img/category_active.png" slot="item-icon-active">

    </TabBarItem>
    <TabBarItem path="/cart">
      <img src="~assets/img/cart.png" slot="item-icon">
      <img src="~assets/img/cart_active.png" slot="item-icon-active">

    </TabBarItem>
    <TabBarItem path="/profile">
      <img src="~assets/img/profile.png" slot="item-icon">
      <img src="~assets/img/profile_active.png" slot="item-icon-active">
      <!--<div slot="item-text">我的</div>-->
    </TabBarItem>
  </tarBra>
</template>

<script>
  import TabBarItem from "components/commom/trabar/TabBarItem";
  import tarBra from "components/commom/trabar/tar-bra"
    export default {
        name: "MainTabBar",
      components:{
          tarBra,
        TabBarItem
      }
    }
</script>

<style scoped>

</style>
