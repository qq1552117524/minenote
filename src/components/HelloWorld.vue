<template>
  <div class="hello">
    <p>{{msg}}</p>
    <button @click="login">登录</button>
    <button @click="about">关于</button>
    <img src="../assets/logo.png">
    <my-dialog :isShow="dialogShow" @on-close="closeDialog('dialogShow')">
      账号<input type="text"><br>
      密码<input type="text">
    </my-dialog>
    <my-dialog :isShow="dialogShowAbout" @on-close="closeDialog('dialogShowAbout')">
      关于我们
    </my-dialog>
  </div>
</template>

<script>
import dialog from './dialog'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'mineNote index 首页',
      dialogShow: false,
      dialogShowAbout: false
    }
  },
  components : {
    myDialog:dialog
  },
  methods : {
    login () {
      this.dialogShow = true
    },
    closeDialog (attr) {
      this[attr] = false
    },
    about () {
      this.dialogShowAbout = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
