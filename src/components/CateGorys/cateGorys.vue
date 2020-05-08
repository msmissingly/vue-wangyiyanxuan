<template>
  <div class="categoryContainer">
    <div class="kouzhao">
        <img src="https://yanxuan.nosdn.127.net/7db5ad89be165b82b6a3e261029d0122.gif?imageView&quality=75" alt="">
      </div> 
      <div class="module1">
        <div class="xinren">新人有礼</div>
        <div class="xinrenContainer">
          <div class="xin-left">
            <div class="text">新人专享礼包</div>
            <div class="img"><img src="https://yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png" alt=""></div>
          </div>
          <div class="xin-right">
            <div class="xin-r-top">
              <div class="fulishe">福利社</div>
              <div class="jrtj">今日特价</div>
              <div class="img"><img src="https://yanxuan-item.nosdn.127.net/aa436fa42dc09938c7f985c071503569.png?quality=75&type=webp&imageView&thumbnail=200x200" alt=""></div>
            </div>
            <div class="xin-r-bottom">
              <div class="xrpt"><span>新人拼团</span></div>
              <div class="yiyuan"><span>1元起包邮</span></div>
              <div class="img"><img src="https://yanxuan-item.nosdn.127.net/073f16bf0c7ad8634c3abb7636e063c2.png?quality=75&type=webp&imageView&thumbnail=200x200" alt=""></div>
            </div>
          </div>
        </div>
      </div>

      <div class="module2">
        <div class="title">
          <span>类目热销榜</span>
        </div>
        <div class="m2-top">
          <div class="left">
            <div class="text">热销榜</div>
            <div class="img"><img src="https://yanxuan-item.nosdn.127.net/967cc4d8140d27299cc1bc4d20294df7.png?quality=75&type=webp&imageView&thumbnail=200x200" alt=""></div>
          </div>
          <div class="right">
            <div class="text">好评榜</div>
            <div class="img"><img src="https://yanxuan-item.nosdn.127.net/be9a4d3988a3d3434a374d22141fd455.png?quality=75&type=webp&imageView&thumbnail=200x200" alt=""></div>
          </div>
        </div>
        <div class="m2-content" v-if="indexData.categoryHotSellModule">
          <div class="content" v-for="(item,index) in indexData.categoryHotSellModule.categoryList.slice(2,indexData.categoryHotSellModule.categoryList.length) " :key="index">
            <div class="text">{{item.categoryName}}</div>
            <div class="img"><img :src="item.picUrl" alt=""></div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'
export default {
  name: 'CateGorys',
  components: {
    
  },
  computed:{
    ...mapState({
      indexData:state=>state.index.indexData
    })
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
      .kouzhao
        border-bottom 15px solid #eee
        img
          width 100%
          height 240px
      .module1
        width 100%
        height 557px
        margin-bottom 20px
        border-bottom 15px solid #eee
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
        .xinrenContainer
          width 750px
          height 438px
          .xin-left
            width 343px
            height 434px
            margin-left 30px
            float left
            background #F9E9CF
            .text
              width 313px
              height 48px
              padding 30px 0 0 30px
              font-size 30px
            .img 
              width 100%
              height 386px
              position relative
              img
                width 258px
                height 257px
                position absolute
                left 50%
                top 50%
                transform translate(-50%,-60%)
          .xin-right
            width 343px
            height 434px
            float left
            border-left 3px solid #fff
            .xin-r-top
              position relative
              width 343px
              height 215px
              background #FBE2D3
              border-bottom 3px solid #fff
              .fulishe
                font-size 30px
                padding 30px 0 0 30px
              .jrtj
                font-size 26px
                padding 10px 0 0 30px
                color #7F7F7F
              .img
                img
                  width 200px
                  height 200px
                  position absolute
                  right 0
                  top 10px
            .xin-r-bottom
              position relative
              width 343px
              height 215px
              background #FFECC2
              .xrpt
                font-size 30px
                padding 30px 0 0 30px
              .yiyuan
                font-size 26px
                padding 10px 0 0 30px
                color #7F7F7F
              .img
                img
                  width 200px
                  height 200px
                  position absolute
                  right 0
                  top 10px
      .module2
        width 100%
        height 710px
        background #fff
        .title
          width 100%
          height 100px
          margin 0 30px
          line-height 100px
          font-size 32px
        .m2-top
          width 100%
          height 200px
          margin 0 30px
          .left
            background #F9F3E4
            position relative
            float left
            width 340px
            height 100%
            margin-right 10px
            .text
              position relative
              width 84px
              font-size 26px
              padding-left 20px
              height 100%
              line-height 200px
              &:after
                content ''
                display block
                height 2px
                width 50px
                background #333
                position absolute
                left 35px
                bottom 70px
            .img
              width 200px
              height 100%
              position absolute
              right 0
              top 0
              img 
                width 200px
                height 100%
                
          .right
            background #EBEFF6
            float left
            width 340px
            height 100%
            position relative
            .text
              position relative
              width 84px
              font-size 26px
              padding-left 20px
              height 100%
              line-height 200px
              &:after
                content ''
                display block
                height 2px
                width 50px
                background #333
                position absolute
                left 35px
                bottom 70px
            .img
              width 200px
              height 100%
              position absolute
              right 0
              top 0
              img 
                width 200px
                height 100%
        .m2-content
          width 100%
          height 410px
          background #fff
          margin 0 30px
          display flex
          flex-wrap wrap
          align-content: flex-start；
          .content
            width 165px
            height 180px
            background #F5F5F5
            margin 10px 10px 0 0
            .text
              text-align center
              width 100%
              height 36px
              line-height 36px
              margin-top 10px
            .img
              width 120px
              height 120px
              margin 2px 0 0 23px
              img 
                width 120px
                height 120px
    
</style>
