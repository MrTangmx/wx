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
    productList: [],

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
  skipDetail(e) {
    console.log(e.currentTarget.dataset.id);
    wx.navigateTo({
      url: '/pages/productdetails/index?id=' + e.currentTarget.dataset.id,
    })
  },
  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    // 查询产品库
    app.wxRequest('GET', "/getProductList", { id: options.id }, (res) => {
      res.forEach(e => {
        e.pinglun = Math.round(Math.random() * (30 - 100) + 100);
      });
      this.setData({
        productList: res
      })
    })

  },

})