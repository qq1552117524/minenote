<template>
    <div>
        noteContent日记内容
        <div class="kindOfnote">
            <ul>
                <li>
                    <router-link to="/noteContent/dateNote" style="width: 100%;display: block;" active-class="active">日记</router-link>
                </li>
                <li>
                    <router-link to="/noteContent/anythingNote" style="width: 100%;display: block;"  active-class="active">随笔</router-link>
                </li>
                <div class="cl"></div>
            </ul>
            <router-view class="content"></router-view>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
 ul li{
        float: left;
        width: 49%;
        background:#ddd;
        border:1px solid #fff
    }
.active{
    background:#fff;
}
.content{
    height: 200px;
    border: 1px solid #ddd;
    background: #eee;
}
.cl{
        clear: both;
    }
</style>

