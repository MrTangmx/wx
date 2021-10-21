// pages/product/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classify: ['手机', '笔记本', '相机', '整机平板', 'DIY硬件', '家用电器', '智能设备', '数码影音', '办公商务', '网络服务', '安全监控', '户外运动', '数码影音', '办公商务', '网络服务', '安全监控', '户外运动'],
    current: 0,
    detaileArr: {
      title: '手机',
      child: [
        {
          hotTitles: '热门品牌',
          child: [{
            id: 0,
            image: 'https://2c.zol-img.com.cn/manu_photo/544.jpg',
            name: '苹果'
          }, {
            id: 1,
            image: 'https://2c.zol-img.com.cn/manu_photo/544.jpg',
            name: '苹果'
          }, {
            id: 2,
            image: 'https://2c.zol-img.com.cn/manu_photo/544.jpg',
            name: '苹果'
          }, {
            id: 3,
            image: 'https://2c.zol-img.com.cn/manu_photo/544.jpg',
            name: '苹果'
          }
          ]
        }
      ]
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  changeClass(e) {
    this.setData({
      current: e.target.dataset.index
    })
  },
  touchSkip(e) {
    console.log(e.currentTarget.dataset.id);
    wx.navigateTo({
      url: '/pages/ranking/index?id=' + e.currentTarget.dataset.id,
    })
  },
})