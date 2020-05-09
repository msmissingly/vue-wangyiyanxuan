<template>
  <div>
    <div class="loginContainer">
      <div class="header">
        <span class="iconfont iconshouye icon1" @click="goto(`/Index`)"></span>
        <div class="title">网易严选</div>
        <div class="iconRight">
          <span class="iconfont iconsousuo icon2"></span>
          <span class="iconfont icongouwuche2 icon3" @click="goto(`/Cart`)"></span>
        </div>
      </div>
      <div class="content">
        <div class="img"><img class="logo" src="http://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt=""></div>
        <form class="inputContainer">
          <input type="text" maxlength="11" placeholder="请输入手机号" @input="changePhone" :value="phoneNumber" name="phone" v-validate="`required|phone`">
          <span   v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
          <!-- <span style="color: red;" v-show="!isRight">手机号必须是11位</span> -->
          
          <input type="password" minlength="6" maxlength="12" placeholder="请输入密码" @input="changePassword" :value="password" name="pwd" v-validate="`required`">
        </form>
        <button :disabled="!isRight" class="login" @click="login">登录</button>
      </div>
         

      </div>
  </div>
</template>

<script>


export default {
  name: 'Login',
  components: {
    
  },
  data(){
    return{
      phoneNumber:'',
      password:'',
      phoneReg:/^1\d{10}/igm,
      userInfo:{},
      isRight:true
    }
  },
  methods:{
    goto(path){
      this.$router.replace(path)
    },
    changePhone(e){
     this.phoneNumber = e.target.value
     
    this.isRight = this.phoneReg.test(this.phoneNumber)
      
     
    },
    changePassword(e){
      this.password = e.target.value
    },
    login(){
      this.userInfo = {phoneNumber:this.phoneNumber,password:this.password}
      // console.log(JSON.stringify(this.userInfo))
      localStorage.setItem('userInfo',JSON.stringify(this.userInfo))
      this.$router.replace('/Personal')
    }

  },
  computed:{
      
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .loginContainer
    .header
      position relative
      height 88px
      width 710px
      background #fafafa
      padding  0 20px 0 20px
      display flex
      justify-content space-between
      line-height 88px
      font-size 40px
      &:after
        content ''
        display block
        width 100%
        height 2px
        background #d9d9d9
        position absolute
        left 0
        top 90px
      .icon1
        display inline-block
        margin-right 35px
        font-size 50px
      .iconRight
        .iconfont
          font-size 50px
        .icon3
          display inline-block
          margin-left 20px 
    .content
      .img
        width 100%
        height 90px
        margin 60px 0
        .logo
          display block
          width 268px
          height 90px
          margin 0 auto
      .inputContainer
        position relative
        input
          font-size 30px
          display block
          width 660px
          height 90px
          margin 30px auto
          border-bottom 2px solid #eee
        span
          color red
          display block
          position absolute
          left 35px
          top 95px

      .login
        display block
        width 670px
        height 90px
        border-radius 10px
        text-align center
        font-size 30px
        line-height 90px
        background #DD1A21
        color #ffffff
        margin 100px auto
        // pointer-events none

          



</style>
