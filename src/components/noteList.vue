<template>
    <div>
        <img src="../assets/logo.png">
        <p>noteList日记列表</p>
        <ul style="margin-top:10px">
            <router-link :to="{ name:'noteContent', params:{id:1} }" tag="li" @click="getParams">第一个日志</router-link>
        </ul>
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
