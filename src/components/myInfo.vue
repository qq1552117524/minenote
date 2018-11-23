<template>
    <div style="margin-top:30px">
        <select name="" id="" >
            <option v-for="item in lage" :value="item.value">{{ item.lable }} </option>
        </select>
    </div>
</template>

<script>
export default {
    props:{
        lage: {
            type: Array,
            value:'0'
        }
    }
}
</script>
