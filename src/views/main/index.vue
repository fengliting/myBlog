<template>
  <div class="page-box" :class="{cur: pageShow}">
    <!--{{data}}-->
    <page-explain :isTop="true"/>
    <logo-row />
    <container>
      <div class="left-box" slot="left">
        <calendar />
      </div>
      <div class="right-box" slot="right" >
        <nav-box @onSelectType="onSelectType" />
        <!--<div class="content-box">-->
          <Detail
            v-if="id"
            :id="id"
          />
          <List
            ref="list"
            v-else-if="type"
            @onDetail="onDetail"
          />
          <bookcase
            v-else
            :data="bookData"
            @event-change="onChangeArticle"
          />
        <!--</div>-->
      </div>
    </container>
    <page-explain
      :data="pageTail"
      :isTail="true"
    />
    <modal :isShow="isModal" @event-change="onChangeModal">
      <iframe id="content" :src="src"
              frameborder="0"
              style="position: absolute;left: 0px;width: 100%;height: 1000px;overflow-y: auto;">

      </iframe>
    </modal>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line
import Vue from 'vue'
import Component from 'vue-class-component'
import PageExplain from './component/PageExplain.vue'
import LogoRow from './component/LogoRow.vue'
import Container from './component/Container.vue'
import Calendar from './component/Calendar.vue'
import NavBox from './component/NavBox.vue'
import Bookcase from './component/Bookcase.vue'
import Modal from './component/Modal.vue'
import List from '../Article/list/index.vue'
import Detail from '../Article/detail/index.vue'
import {enums} from '../../config/utils.js'
// import Axios from 'axios'
// @Component 修饰符注明了此类为一个 Vue 组件

@Component({
  components: {
    PageExplain,
    LogoRow,
    Container,
    Calendar,
    NavBox,
    Bookcase,
    Modal,
    List,
    Detail
  }
})
export default class Main extends Vue {
  pageShow: Boolean = false
  bookData: Object = {
    row1column1: [
      {id: '10001', name: '可编辑', href: 'edit'},
      {id: '10002', name: '重叠框', href: 'border'},
      {id: '10003', name: '蚂蚁线', href: 'ant'},
      {id: '10004', name: '画个圆', href: 'circle'},
      {id: '10005', name: '验证表', href: 'validate'},
      {id: '10006', name: '空链接', href: 'link'},
      {id: '10007', name: '加逗号', href: 'comma'},
      {id: '10008', name: '焦点色', href: 'focus'},
      {id: '10009', name: '波浪线', href: 'wave'},
      {id: '10010', name: '大白', href: 'white'},
      {id: '10011', name: '模糊字', href: 'vague'},
      {id: '10012', name: '单选框', href: 'radio'},
      {id: '10013', name: '复选框', href: 'check'},
      {id: '10014', name: '流光字', href: 'stream'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'}
    ],
    row1column2: [
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'}
    ],
    row2column1: [
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'}
    ],
    row2column2: [
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'}
    ],
    row3column1: [
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'}
    ],
    row3column2: [
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'},
      {id: '10000', name: '大世界'}
    ],
    row4column1: [
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'}
    ],
    row4column2: [
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'}
    ],
    row5column1: [
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'}
    ],
    row5column2: [
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'}
    ],
    row6column1: [
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'}
    ],
    row6column2: [
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'},
      {id: '10000', name: '世界'}
    ]
  }
  src: String='http://www.2tro.com/art.aspx'

  // 弹框显示
  isModal:Boolean = false

  // 页尾
  date:Date = new Date()
  pageTail: String = `Retro Mr.${this.date.getFullYear()} 厦门程序猿 - New Piece  版权所有 闽ICP 18019448`

  // 当前类别 && 当前文章id
  type:String = ''
  id:String = ''

  get getWindowHeight () {
    return window.outerHeight
  }

  onChangeArticle (id: String, name:String, href:String) {
    this.isModal = true
    console.log('文章id==>', id, name, href)
    if (href) {
      this.src = href
    }
  }

  // 选择类别
  onSelectType (type: String) {
    console.log('type==>', type)
    this.type = type
    this.id = ''
    console.log('div==>', this.$refs.list)
    this.$nextTick(() => {
      let list:any = this.$refs.list
      console.log('list==>', list)
      list && list.setList(enums[`${type}`])
    })
  }
  // 文章id
  onDetail (type: String, id: String) {
    this.type = type
    this.id = id
  }
  onChangeModal (status:Boolean) {
    this.isModal = status
  }
  beforeCreate () {
    console.log('beforeCreate')
  }
  created () {
    // 隐藏加载
    this.$nextTick(() => {
      this.pageShow = true
    })
  }
  beforeMount () {
    console.log('beforeMount')
  }

  mounted () {
    try {
      let div = document.getElementById('content')
      if (div)div.style.height = window.outerHeight + 'px'
    } catch (e) {
      console.log(e)
    }
    try {
      let {type, id} = this.$route.params
      this.type = type
      this.id = id
    } catch (e) {
      console.log('router-err==>', e)
    }

    // Axios.get('http://localhost:3003/')
    //   .then(res => {
    //     console.log(res)
    //     this.data = res
    //   })
  }
}
</script>

<style scoped>
  .page-box{
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity .5s linear;
  }
  .page-box.cur{
    opacity: 1;
  }
  .left-box{
    float: left;
    width: 268px;
    min-height: 704px;
    margin-top: 120px;
  }
  .right-box{
    float: right;
    width: 826px;
    margin-top: 10px;
    margin-left: 68px;
  }
  .content-box{
    float: left;
    width: 100%;
  }
</style>
