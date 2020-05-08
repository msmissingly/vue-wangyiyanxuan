<template>
  <div class="indexContainer">
    <div class="header">
      <img class="logo" src="../../common/images/logo.png" alt="" />
      <div class="searchInput">
        <span class="iconfont iconsousuo"></span>
        <input type="text" placeholder="搜索商品" placeholder-class="placeholder" style="border:0px;outline:none;background:#ededed;">
      </div>
      <button>登录</button>
    </div>
    <!-- 导航区域 -->
    <div class="wrapper" ref="scrollWrapper">
      
          <div class="content" v-if="indexData.kingKongModule">
            <div class="wrapper-item" @click="changeNavIndex(0)" :class="{active: navIndex === 0}">
              <span>推荐</span>
            </div>
            <div class="wrapper-item" :class="{active: navIndex === index + 1}" @click="changeNavIndex((index + 1))" v-for="(navItem,index) in indexData.kingKongModule.kingKongList.slice(1,indexData.kingKongModule.kingKongList.length) " :key="index">
              <span>{{navItem.text}}</span>
            </div>
          </div>
          
    </div>
   
    <div class="indexContent">
       <!-- 轮播图 -->
      <Recommend :indexData="indexData" v-if='navIndex === 0'></Recommend>
      <CateList v-else :navIndex='navIndex'></CateList>
    </div>
  
     



  </div>
</template>

<script>
import CateList from '../../components/CateList/cateList'
import {mapState,mapActions} from 'vuex'
import BScroll from 'better-scroll'
import Recommend from '../../components/Recommend/recommend'
export default {
  name: 'Index',
  components: {
    Recommend,
    CateList

  },
  data(){
    return{
      navIndex:0,
      scroll:null,
       
    }
  },
  
  mounted(){
    this.getIndexData()
    
    // console.log(this.$refs.scrollWrapper,"----------")
    
  },
  updated(){
    this.$nextTick(()=>{
        this.scroll = new BScroll(this.$refs.scrollWrapper,{
        click: true,
        scrollX: true, // 开启横行滚动
      })
      })
      
  },
   methods:{
    ...mapActions({
      getIndexData:'getIndexData'
    }),
    changeNavIndex(navIndex){
				this.navIndex = navIndex
			},
  },
  computed:{
    ...mapState({
      indexData:state=>state.index.indexData
    })
    
  },
 


  
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.indexContainer
 
  .header 
			display flex
			height 60px
			width 100%
			padding 16px 3px
			.logo 
				width 138px
				height 40px
				margin 10px 30px
			.searchInput
				position relative
				height 56px
				width 440px
				background #ededed
        border-radius 15px
				.iconfont 
					position absolute
					left 10px
					top 15px
					font-size 15px
         
				input
					width 370px
					margin-left 50px
					height 100%
					color #BB2C08
				.placeholder
          font-size 28px
          text-align center
          line-height 60px
            
			button
				font-size 24px
				width 74px
				height 40px
				margin 4px 10px
				color #b4282d
				white-space nowrap
				overflow hidden
				text-overflow ellipsis
				padding 0 5px
  .wrapper
    height 60px
    margin-bottom 10px
    // overflow hidden
    .content
      display inline-flex
      // width 100%
      height auto
      padding 0 15px
      line-height 60px
      // white-space nowrap
      // overflow: hidden;
      .wrapper-item
        position relative
        font-size 30px
        height auto
        padding 0 8px
        white-space nowrap
        margin-right 5px
        &.active:after
          content ''
          display block
          width 100%
          height 1px
          background #BB2C08
          position absolute
          left 0
          bottom 0
  




</style>
