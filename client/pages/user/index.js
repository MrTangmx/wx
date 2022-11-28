// pages/user/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image: ''
  },
  getSession() {
    wx.navigateTo({
      url: '/pages/collect/index',
    })
  },
  getProduct() {
    wx.navigateTo({
      url: '/pages/product/index',
    })
  },
  getUser() {
    wx.navigateTo({
      url: '/pages/myAnswer/index',
    })
  },
  getYijianUser() {
    wx.showToast({
      title: '请在公众号反馈',
      icon: 'error',
      duration: 2000
    })
  },
  getGuanUser() {
    wx.showToast({
      title: 'ZEAL',
      icon: 'loading',
      duration: 2000
    })
  },
  showLogs() {
    wx.navigateTo({
      url: '/pages/logs/logs',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.wxRequest('GET', "/getMsgCode", {}, (res) => {
      console.log(res);

    }, (err) => {
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

})