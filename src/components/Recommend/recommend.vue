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
      })
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
      
        





              

</style>
