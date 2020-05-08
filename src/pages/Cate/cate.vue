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
            <div class="item" @click="changeNav(item.id)" :class="{active: navId === item.id}" v-for="(item,index) in cateNavData" :key="index">
              {{item.name}}
            </div>
          </div>
        </div>


        <div class="rightContainer" ref="rightContainer">
          <div class="content">
            <div class="top">
              <img src="https://yanxuan.nosdn.127.net/a41ddf5b8d7921d5d09987022dd71cac.jpg?quality=75&type=webp&imageView&thumbnail=0x196" alt="">
            </div>
            <div class="bottom">
              <div class="item" v-for="(item,index) in currentList" :key="index">
              <div class="img"><img :src="item.bannerUrl" alt=""></div>
              <div class="text">{{item.name}}</div>
            </div>
            </div>
          </div>
        </div>

    </div>

  </div>
</template>

<script>
import {reqCateNavData,reqCateListData} from '../../utils/index'
import BScroll from 'better-scroll'
export default {
  name: 'Cate',
  components: {
    
  },
  data(){
    return{
      cateNavData:[],
      cateListData:[],
      navId:0,
      currentList:{}
    }
  },
  async mounted(){
    this.scroll = new BScroll(this.$refs.leftContainer,{
          click: true,
          scrollY: true,
          }) 
    let cateNavData = await reqCateNavData()
    console.log(cateNavData.data.categoryL1List)
    this.cateNavData = cateNavData.data.categoryL1List
    this.navId = cateNavData.data.categoryL1List.id

    let cateListData = await reqCateListData()
    console.log(cateListData.data,"111")
    this.cateListData = cateListData.data

    this.changeNav(11)


  },
  methods:{
    changeNav(navId){
      this.navId = navId
      let currentList = this.cateListData.find(item => item.id === this.navId)
      this.currentList = currentList.categoryList
      console.log(currentList,"-------")
    }
  },
  computed:{
    
  }
  
  
  
}

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.cateGorysListContainer
  .header
    width 690px
    height 55px
    padding 20px 0 10px 30px
    .search
      width 100%
      height 100%
      background #EEEEEE
      border-radius 10px
      line-height 55px
      text-align center
      font-size 26px
  .contentContainer
    display flex
    width 100%
    height 1030px
    margin-top 40px
    border-top 2px solid #EEEEEE
    .leftContainer
      width 162px
      height 1030px
      border-right 2px solid #EEEEEE
      overflow hidden
      .content
        padding 40px 0
        height 1500px
        display flex
        flex-direction column
        align-items center
        .item
          width 100%
          height 50px
          // background red
          font-size 26px
          margin-bottom 30px
          text-align center
          line-height 50px
          position relative
          &.active
            color #ab2b2b
            &:after
              content ''
              display block
              width 5px
              height 40px
              background red
              position absolute
              left 0
              top 5px
    .rightContainer
      width 528px
      height 872px
      padding 30px 30px 0 30px
      .content
        .top
          margin-bottom 30px
          img 
            width 528px
            height 192px
        .bottom
            display flex
            flex-direction row
            flex-wrap wrap
            align-content: flex-start；
            .item
              width 144px
              height 216px
              margin-right 30px
              .img
                img 
                  height 144px
                  width 144px
              .text
                height 72px
                width 144px
                text-align center
                font-size 20px








        

</style>
