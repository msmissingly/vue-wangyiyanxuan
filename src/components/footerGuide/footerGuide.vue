<template>
  <div>
    <footer class="footer_guide">
      <a href="javascript:;" class="guide_item" @click="goto(`/Index`);isClick(click)" :class="{on:$route.path===`/Index`}" >
        <span class="item-icon iconfont iconshouye" ></span>
        <span :class="isClick?'active':''">首页</span>
      </a>
      <a href="javascript:;" class="guide_item" @click="goto(`/Cate`);isClick(click)" :class="{on:$route.path===`/Cate`}">
        <span class="item-icon iconfont iconfen_lei2"></span>
        <span >分类</span>
      </a>
      <a href="javascript:;" class="guide_item" @click="goto(`/Buy`);" :class="{on:$route.path===`/Buy`}">
        <span class="item-icon iconfont iconmairu "></span>
        <span >值得买</span>
      </a>
      <a href="javascript:;" class="guide_item" @click="goto(`/Cart`)" :class="{on:$route.path===`/Cart`}">
        <span class="item-icon iconfont icongouwuche2" ></span>
        <span >购物车</span>
      </a>
      <a href="javascript:;" class="guide_item" @click="goto(`/Personal`)" :class="{on:$route.path===`/Personal`}">
        <span class="item-icon iconfont icontubiaozhizuomoban" ></span>
        <span >个人</span>
      </a>
    </footer>
  </div>
</template>

<script >

import homePic from "../../common/images/tabBar/tab-home.png"
import homePicCur from "../../common/images/tabBar/tab-home-current.png"

export default {
  name: 'FooterGuide',
  components: {
    
  },
  data(){
    return{
      click:true,
      homePic,
      homePicCur,
    }
  },
  methods:{
    goto(path){
         //編程式导航
      this.$router.replace(path)
      
    },
    isClick(click){
      this.click = !click
    }
  },

  computed:{
    
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .footer_guide
    height 98px
    width 100%
    // background-color pink
    position fixed 
    left 0
    right 0
    bottom 0px
    display flex
    justify-content space-around
    z-index 6
    .guide_item
      margin-top 10px
      display flex
      flex-direction column
      align-items center
      &.on
        color #DD1A21
      .item-icon
        font-size  40px
      span 
        margin-top 5px
        font-size 24px
        
</style>
