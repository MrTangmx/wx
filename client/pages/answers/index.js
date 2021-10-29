// pages/ranking/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showInput: true, //搜索
    showSearchList: false, //搜索列表 
    searchList: ['点击完成按钮时触发，event.detail = { value }', '点击完成按钮时触发，event.detail = { value }', '点击完成按钮时触发，event.detail = { value }'],
    answersList: []
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
        answersList: res
      })
    }, (err) => {
    })
  },
  onLoad: function (options) {
    this.getAnswers(1, 5)
  },
  onReachBottom: function () {

  },
})