<template>
<div class="dialog-wrap" v-if="isShow">
    <div class="dialog-cover" @click="undialog"></div>
    <div class="dialog">
        <div class="dialog-close" @click="undialog">x</div>
        <slot></slot>
    </div>
</div>
</template>

<script>
export default {
    props: {
        isShow: {
            type:Boolean,
            default: false
        }
    },
    methods: {
        undialog () {
            this.$emit('on-close')
        }
    }
}
</script>


<style>
    .dialog{
        background: #fff;
        width: 80%;
        height: 50px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -39%;
        margin-top: -38%;
        height: 30%;
    }
    .dialog-cover {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        opacity: 0.3;
    }
    .dialog-close{
        text-align: right;
        margin-right: 11px;
        font-size: 24px;
    }
</style>
