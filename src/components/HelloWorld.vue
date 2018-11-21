<template>
  <div class="hello">
    <p>{{msg}}</p>
    <button @click="login">登录</button>
    <button @click="about">关于</button>
    <img src="../assets/logo.png">
    <my-dialog :isShow="dialogShow" @on-close="closeDialog('dialogShow')">
      用户名：<input type="text" v-model="userModel"><br>
      <span>{{ userError }}</span><br>
      密  码：<input type="text" v-model="psdModel"><br>
      <span>{{ psdError }}</span><br>
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
      dialogShowAbout: false,
      userModel:'',
      psdModel:''
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
  },
  computed : {
    userError(){
      if(!/@/g.test(this.userModel)){
        return  '用户名错误'
      }
    },
    psdError () {
      if(!/^\w{1,6}/g.test(this.psdModel)){
        return '密码长度为6位数'
      }
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
