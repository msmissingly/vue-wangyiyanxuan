<template>
  <div class="cateContainer">
    <!-- 轮播图 -->
    <div class="content">
      <div class="swiperWrap">
        <swiper :options="swiperOption" class="swiper" >
          <swiper-slide class="swiper-slide"  v-for="(item, index) in currentNavCateList" :key="index">
            <img :src=item alt="">
          </swiper-slide>
        </swiper> 
        <div class="swiper-pagination circle" slot="pagination"></div>
      </div>
    </div>
    <!-- <span class="title">{{cateObj.category.name}}</span>
		<span class="desc">{{cateObj.category.frontDesc}}</span> -->
  </div>
</template>

<script>

import BScroll from 'better-scroll'
import {reqNavCateList} from "../../utils/index"
export default {
  name: 'CateList',
  props:['navIndex'],
  components: {
    
  },
 async mounted(){
     this.scroll = new BScroll(document.querySelector('.cateContainer'),{
        click: true,
        scrollY: true, // 开启横行滚动
      })
      let NavCateListData = await reqNavCateList()
      // console.log(NavCateListData.data)
      this.NavCateListData = NavCateListData.data
    
      let currentNavCateList = this.NavCateListData.find(item => item.category.showIndex === this.navIndex)
      this.currentNavCateList = currentNavCateList.category.bannerUrlList
      // console.log(this.currentNavCateList)
  },
  data(){
    return{
      swiperOption: {
        //显示分页
        pagination: {
          el: '.swiper-pagination',
          paginationType:'progress'
          // clickable: true //允许分页点击跳转
        },

        //自动轮播
        autoplay: {
          delay: 1000
        },
        //开启循环模式
        loop: true,
        //开启鼠标滚轮控制Swiper切换
        mousewheel: true
      },
      NavCateListData:[],
      currentNavCateList:{}
    }
  },
  computed: {

		}
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.cateContainer
    overflow hidden
    height 1074px
    .content
      height 3000px
      .swiperWrap
        position relative
        margin 5px 0
        .swiper
          .swiper-slide 
            img
              width 100%
              height 370px
        .swiper-pagination
          width 100px
          height 100px
          position absolute
          left 0
          right 0
          bottom  -60px
          margin 0 auto
        


</style>
