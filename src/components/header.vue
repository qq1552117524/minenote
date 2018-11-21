<template>
    <div class="app-header">
        <p class="back" @click="back"><</p>
        header
        <router-link class="gohome" :to="{name:'HelloWorld'}">首页</router-link>
        <div class="cl"></div>
        <!-- <slot>无内容的时候显示empty</slot> -->
    </div>
</template>

<script>
export default {
    methods :{
        back () {
            this.$router.go(-1)
        }
    }
}
</script>

<style>
    .app-header{
        background: #409eff;
        position: absolute;
        top: 0;
        width: 100%;
        left: 0;
        height: 50px;
        line-height: 50px;
        color: #fff;
        font-size: 1.2rem;
    }
    .back{
        display: inline;
        float: left;
        padding-left: 15px;
        font-size: 22px;
    }
    .gohome{
        float: right;
        padding-right: 10px
    }
</style>
