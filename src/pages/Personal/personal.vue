<template>
  
    <div>
        <div>
          <div class="header" @click="goto(`/Login`)">
            <img class="userImg"  src="http://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png" />
              <p class="user">{{userInfo.phoneNumber?`严选用户${userInfo.phoneNumber}`:'未登录'}}</p>
              <p class="level">普通用户</p>
          </div>
        </div>
        
           <div ref="scrollWrapper" style="height:472px;overflow:hidden;">
              <div class="content">
                <h2>我的资产</h2>
                <p class='line'></p>
                <div class="myAssetList">
                  <div class='assetItem'>
                    <span>￥0</span>
                    <span>回馈金</span>
                  </div>
                  <div class='assetItem'>
                    <span>￥0</span>
                    <span>红包</span>
                  </div>
                  <div class='assetItem'>
                    <span>￥0</span>
                    <span>优惠券</span>
                  </div>
                  <div class='assetItem'>
                    <span>￥0</span>
                    <span>津贴</span>
                  </div>
                  <div class='assetItem'>
                    <span>￥0</span>
                    <span>礼品卡</span>
                  </div>
                </div>
                <!-- 列表选项 -->
                  <div class="personalList">
                    <div class="navItem" v-for='(item, index) in personalList' :key='index'>
                      <i class='iconfont' :class='item.icon'></i>
                      <p>{{item.name}}</p>
                    </div>
                  </div>


                  <button  class="out" v-show="userInfo.phoneNumber" @click="quit">退出登录</button>
              </div>
            </div>
	</div>
	
  
  
</template>

<script>

import BScroll from 'better-scroll'
export default {
  name: 'Personal',
  components: {
    
  },
  data(){
    return{
      userInfo: {
						
				},
				personalList: [
						{
							name: '我的订单',
							icon: 'icondanju'
						},
						{
							name: '周六一起拼',
							icon: 'iconlinedesign-18'
						},
						{
							name: '售后服务',
							icon: 'iconshouhou'
						},
						{
							name: '邀请返利',
							icon: 'iconjinqian-fanli'
						},
						{
							name: '优先购',
							icon: 'iconbaobao'
						},
						{
							name: '积分中心',
							icon: 'iconjifen01'
						},
						{
							name: '会员俱乐部',
							icon: 'iconhuiyuan'
						},
						{
							name: '用户反馈',
							icon: 'iconfeedback'
						},
						{
							name: '地址管理',
							icon: 'icondizhi'
						},
						{
							name: '帐号安全',
							icon: 'iconzhanghaoanquanlast'
            },
            {
							name: '帮助与客服',
							icon: 'iconkefu'
            },
            {
							name: '意见反馈',
							icon: 'iconfankui'
						}
					]
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.scrollWrapper,{
        click: true,
        scrollY: true, // 开启横行滚动
      })
    let userInfo = localStorage.getItem('userInfo')
    this.userInfo = JSON.parse(userInfo)
    // console.log(this.userInfo)
  },
  methods:{
   goto(path){
      let userInfo = localStorage.getItem('userInfo')
    if(userInfo){
      this.userInfo = userInfo
      return
    }else{
      this.$router.replace(path)
    }
   },
   quit(){
     localStorage.setItem('userInfo','')
     this.userInfo = localStorage.getItem('userInfo')

   }
  }
}

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.header
  position relative
  width 750px
  height 270px
  background url('http://yanxuan.nosdn.127.net/5905098f74e04c39fa5e76ebb9ff591b.png?imageView&type=webp') no-repeat center center
  .userImg
    width 142px
    height 142px
    border-radius 50%
    position absolute
    left 0
    top 50%
    transform translate(0,-50%)
    margin-left 30px
  .user
    font-size 40px
    position absolute
    left 26%
    top 33%
    color #fff
  .level
    font-size 30px
    position absolute
    left 26%
    top 55%
    color #fff
.content
  height 1200px
  position relative
  h2
    height 105px
    width  720px 
    font-size 26px
    margin-left 30px  
    line-height 105px
  .line
    width 90%
    height 2px
    background #eeeeee
    margin 0 auto
  .myAssetList
    width 90%
    margin 20px auto
    display flex
    .assetItem
      font-size 22px
      width 20%
      display flex
      flex-direction column
      align-items center
      font-size 24px
      color #333333
      line-height 40px
  .personalList
    display flex
    flex-wrap wrap
    align-items center
    border-top 1px solid #EEEEEE
    .navItem
      width 33.3333%
      height 180px
      text-align center
      border-bottom 1px solid #EEEEEE
      border-right 1px solid #EEEEEE
      box-sizing border-box
      padding 30px 0
      &:nth-child(3n)
        border-right none
      .iconfont 
        font-size 60px
        color #333
      p
        font-size 24px
        line-height 40px
        margin-top 15px
  .out
    width 730px
    height 150px
    margin 0 auto
    text-align center
    line-height 150px
    font-size 40px
    position absolute
    bottom 0
    left 50%
    transform translate(-50%,0)
    border 3px solid #eee
    border-radius 20px
    color red
    z-index 0

    

</style>
