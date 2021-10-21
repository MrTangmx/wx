// pages/ranking/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showInput: true, //搜索
    showSearchList: false, //搜索列表 
    searchList: ['点击完成按钮时触发，event.detail = { value }', '点击完成按钮时触发，event.detail = { value }', '点击完成按钮时触发，event.detail = { value }'],
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
})