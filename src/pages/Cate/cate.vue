<template>
  <div class="cateGorysListContainer">
    <!-- 头部区域 -->
    <div class="header">
      <div class="search">
        <span class="iconfont iconsousuo tubiao"></span>
        <span class="text">搜索商品，共26362款好物</span>
      </div>
    </div>
    <div class="contentContainer" >
        <div class="leftContainer" ref="leftContainer">
          <div class="content" >
            <!-- <div class="item" v-for="(item,index) in cateNavData" :key="index">
              {{item.name}}
            </div> -->
            <div class="item">baokuan</div>
          </div>
        </div>


        <div class="rightContainer"></div>
     
    </div>

  </div>
</template>

<script>
import {reqCateNavData} from '../../utils/index'
import BScroll from 'better-scroll'
export default {
  name: 'Cate',
  components: {
    
  },
  data(){
    return{
      cateNavData:[]
    }
  },
  async mounted(){
    let cateNavData = await reqCateNavData()
    // console.log(cateNavData.data.categoryL1List)
    this.cateNavData = cateNavData.data.categoryL1List
  },
  updated(){
    this.$nextTick(()=>{
        this.scroll = new BScroll(this.$refs.leftContainer,{
          click: true,
          scrollY: true, 
      })
      })
      
  },
  
}

</script>

<style scoped lang="stylus" >
  .cateGorysListContainer
		.header 
			width 690px
			height 55px
			padding 10px 0 10px 15px 
			.search
				width 100%
				height 100%
				background #EEEEEE
				border-radius 10px
				line-height 55px
				text-align center
				font-size 26px
          

        

</style>
