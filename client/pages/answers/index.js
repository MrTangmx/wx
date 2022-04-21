// pages/ranking/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showInput: true, //搜索是否可输入
    showSearchList: false, //搜索列表 是否显示
    searchList: ['点击完成按钮时触发，event.detail = { value }', '点击完成按钮时触发，event.detail = { value }', '点击完成按钮时触发，event.detail = { value }'],
    answersList: [],// 问答的列表数据保存
    page: 1,// 定义页
    size: 5,//定义条
    backTopValue: false,// 返回顶部是否可用

  },
  // 监听滚动条坐标
  onPageScroll: function (e) {
    const that = this
    let scrollTop = e.scrollTop
    let backTopValue = scrollTop > 500 ? true : false
    that.setData({
      backTopValue
    })
  },
  // 返回顶部方法
  backTop() {
    wx.pageScrollTo({
      scrollTop: 0,
    })
  },
  //改变搜索框
  changeInput() {
    this.setData({
      showInput: false
    })
  },
  //关闭搜索框
  changeState() {
    this.setData({
      showInput: true,
      showSearchList: false
    })
  },
  //获取到输入内容
  bindKeyInput(e) {
    if (e.detail.value != '') {
      this.setData({
        showSearchList: true
      })
    } else {
      this.setData({
        showSearchList: false
      })
    }
  },
  // 获取问答列表
  getAnswers(page, size) {
    app.wxRequest('GET', "/getAnswers", { page, size }, (res) => {
      this.setData({
        answersList: this.data.answersList.concat(res)
      })
    }, (err) => {
    })
  },
  // 打开当前页时触发事件
  onLoad: function (options) {
    this.getAnswers(this.data.page, this.data.size)
  },
  onReachBottom: function () {

  },
  // 触底事件
  onReachBottom: function () {
    this.setData({
      page: this.data.page += 1
    })
    this.getAnswers(this.data.page, this.data.size)
  },
})