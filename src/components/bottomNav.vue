<template>
    <div class="app-bottomNav">
        <ul>
            <li>
                <!-- :class="{'last-bottomNav' : (index+1) % 2 !== 0}</a> -->
                <router-link to="/noteList">日记列表</router-link>
            </li>
            <li>
                <!-- :class="{'last-bottomNav' : (index+1) % 2 !== 0}</a> -->
                <router-link to="/mine">我的</router-link>
            </li>
            <div class="cl"></div>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
        //    navList: [
        //        {
        //            title:'日记列表',
        //            url:''
        //        },
        //        {
        //            title:'我的',
        //            url:''
        //        }
        //    ]
        }
    }
}
</script>

<style scoped>
    .app-bottomNav{
        position: fixed;
        bottom: 0;
        background: #eee;
        height: 80px;
        width: 100%;
        left: 0;
        line-height: 80px;
    }
    ul li{
        float: left;
        width: 49%;
    }
    .cl{
        clear: both;
    }
    .last-bottomNav{
        border-right: 1px solid #ddd;
    }
</style>
