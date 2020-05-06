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
    
  </div>
</template>

<script>



export default {
  name: 'Index',
  components: {
 
  },
  data(){
    return{
      
    }
  }
  
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
					font-size 30px
         
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
 
        

    
    

		
	



</style>
