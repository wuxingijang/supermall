<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tar-bra"
    }
</script>
<style scoped>
#tab-bar{
  width: 100%;
  display: flex;
  position: fixed;
  height: 54px;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba(100,100,100,.2);
}
</style>
