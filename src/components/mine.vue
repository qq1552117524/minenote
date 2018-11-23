<template>
    <div>
        <h3>我的信息：</h3>
        <my-info :lage = "lage"></my-info>
    </div>
</template>

<script>
import myInfo from './myInfo'

export default {
    components:{
        myInfo
    },
    data () {
        return {
            lage: [
                {
                    lable: '男',
                    value: '0'
                },
                {
                    lable: '女',
                    value: '1'
                }
            ]
        } 
    }
}
</script>
