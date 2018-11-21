<template>
    <div>
        <img src="../assets/logo.png">
        noteList日记列表
        <button @click="getParams">
        <router-link :to="{ name:'noteContent', params:{id:1} }">第一个日志</router-link>
        </button>
    </div>
</template>

<script>
export default {
    methods : {
        getParams(){
         console.log(this.$route.params)
        }
    },
    //VueResource  的get请求
    created: function () {
        this.$http.get('getlist')
        .then(function(data){
            console.log(data)
        },function(error){
            console.log(error)
        })
    }
}
</script>
