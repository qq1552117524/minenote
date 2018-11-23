<template>
  <div class="hello">
    <p>{{msg}}</p>
    <img src="../assets/logo.png">
    <div>
      <button @click="login">登录</button>
      <button @click="about">关于</button>  
    </div>
    <my-dialog :isShow="dialogShow" @on-close="closeDialog('dialogShow')" >
      用户名：<input type="text" v-model="userModel"><br>
      <span>{{ userError.errorText }}</span><br>
      密  码：<input type="text" v-model="psdModel"><br>
      <span>{{ psdError.errorText }}</span><br>
      <button style="margin-top: 45px;" @click="onLogin">登录</button>
      <p>{{ loginError }}</p><br>
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
      msg: '首页',
      dialogShow: false,
      dialogShowAbout: false,
      userModel:'',
      psdModel:'',
      loginError:''
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
    },
    onLogin () {
      if( !this.userError.status || !this.psdError.status ){
        this.loginError = '提交内容错误'
      }
      else{
        this.loginError = ''
        alert('提交成功')
        this.dialogShow = false
      }
    }
  },
  computed : {
    userError(){
      let errorText,status
      if(!/@/g.test(this.userModel)){
        errorText = '用户名错误',
        status = false
      }
      else{
        errorText = '',
        status = true
      }
      return{errorText,status}
    },
    psdError () {
      let errorText,status
      if(!/^\w{1,6}$/g.test(this.psdModel)){
        errorText = '密码长度为1-6位数',
        status = false
      }
      else{
        errorText = '',
        status = true
      }
      return{status,errorText}
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
