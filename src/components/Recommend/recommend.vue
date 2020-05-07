<template>
  <div class="recommendContainer" ref="scrollRecommendContainer">
   <div class="content">
      <!-- 轮播图 -->
    <div class="swiperWrap">
       <swiper :options="swiperOption" class="swiper" >
        <swiper-slide class="swiper-slide"  >
          <img src="https://yanxuan.nosdn.127.net/91038b7db8982d4288d71f0547a2569d.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
        </swiper-slide>
        <swiper-slide class="swiper-slide" >
          <img src="https://yanxuan.nosdn.127.net/a12c510b428bbcc4fdf1eb4bdfd86ae4.png?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
        </swiper-slide>
        <swiper-slide class="swiper-slide" >
          <img src="https://yanxuan.nosdn.127.net/8d6ea84dbf81210291edc275327f6c50.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination circle" slot="pagination"></div>
     </div>

     <!-- 三个横向图标 -->
     <div class="policyDescList">
       <div class="policyItem">
         <img src="https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png" alt="">
         <span>网易自营品牌</span>
       </div>
       <div class="policyItem">
         <img src="https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png" alt="">
         <span>30天无忧退货</span>
       </div>
       <div class="policyItem">
         <img src="https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png" alt="">
         <span>48小时快速退款</span>
       </div>

     </div>
     <!-- 十个图标区域 -->
     <div class="kingkongList" v-if="indexData.kingKongModule">
       <div class="kingkongItem" v-for="(item, index) in indexData.kingKongModule.kingKongList" :key='item.L1Id'>
         <img :src="item.picUrl" alt="">
         <span>{{item.text}}</span>
        </div>
     </div>

      <div class="kouzhao">
        <img src="https://yanxuan.nosdn.127.net/7db5ad89be165b82b6a3e261029d0122.gif?imageView&quality=75" alt="">
      </div> 
      <div class="xinren">新人有礼</div>
      <div class="xinrenContainer">
        <div class="xin-left">
          <span class="text">新人专享礼包</span>
          <img src="" alt="">
        </div>
        <div class="xin-right">
          <div class="xin-r-top">
            <div><span>福利社</span></div>
            <div><span>今日特价</span></div>
            <img src="" alt="">
          </div>
          <div class="xin-r-bottom">
            <div><span>新人拼团</span></div>
            <div><span>1元起包邮</span></div>
            <img src="" alt="">
          </div>
        </div>
      </div>
      <CateGorys></CateGorys>
   </div>
  </div>
</template>

<script>
import CateGorys from '../CateGorys/cateGorys'
import BScroll from 'better-scroll'
import { mapState } from 'vuex'

export default {
  name: 'Recommend',
  components:{
    CateGorys
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
    }
  },
 
  mounted(){
    
    this.scroll = new BScroll(document.querySelector('.recommendContainer'),{
      click: true,
      scrollY: true, // 开启横行滚动
      // eventPassthrough: 'vertical'
    })
    // console.log(this.scroll,"1111")
    
  },
  computed:{
    ...mapState({
      indexData:state=>state.index.indexData
    })
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .recommendContainer
    overflow hidden
    height 1074px
    .content
      height 2000px
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
      .policyDescList
          display flex
          width 100%
          .policyItem
            text-align center
            flex 1
            img
              width 32px
              height 32px
              vertical-align middle
              margin-right 6px
            span
              font-size 24px
              vertical-align middle
      .kingkongList
        display flex
        flex-wrap wrap
        margin 20px 0
        .kingkongItem
          width 20%
          display flex
          flex-direction column
          align-items center
          img
            width 110px
            height 110px
          span
            font-size 24px
      .kouzhao
        img
          width 100%
          height 240px
      .xinren
        position relative
        text-align center
        width 100%
        height 90px
        line-height 90px
        font-size 32px
        &:before
          content ''
          display inline-block
          height 2px
          width 20px
          background #333
          position absolute
          left 280px
          top 40px
        &:after
          content ''
          display inline-block
          height 2px
          width 20px
          background #333
          position absolute
          right  280px
          top 40px 
              
</style>
