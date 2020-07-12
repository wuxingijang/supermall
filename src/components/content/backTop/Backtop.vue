<template>
<div class="backtop">
    <img src="~assets/img/commom/up-circle.svg" alt="circle">
</div>

</template>
<script>
export default {
    name:'Backtop',
    methods:{

    }

}
</script>
<style scoped>
.backtop{
    position:fixed;
    bottom: 90px;
    right: -30px;
    z-index: 999;
}
.backtop img{
    width: 50%;
    height: 50%;
}
</style>
