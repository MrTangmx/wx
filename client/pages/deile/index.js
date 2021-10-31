// pages/deile/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showInput: true, //显示输入框
    commentInfo: '', //评论内容
    id: '',
    list: [],
    detail: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList()
    this.getDeile(options.id)

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  getList(page, size, type) {
    app.wxRequest('GET', "/list", { page, size, type }, (res) => {
      let arr = res
      arr.forEach((item, i) => {
        let iarr = item.image.split(',')
        iarr.length > 3 ? iarr.pop() : false
        arr[i].image = iarr
        arr[i].imageNum = iarr.length
      })
      this.setData({
        list: arr
      })
    }, (err) => {
    })
  },
  getDeile(id) {
    app.wxRequest('GET', "/getDeile", { id }, (res) => {
      let arr = { ...res }
      arr.image = res.image.split(',')
      arr.image.length > 3 ? arr.image.pop() : false
      this.setData({
        detail: arr
      })
    }, (err) => {
    })
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
  // 跳转
  jumpPage(e) {
    console.log(e.currentTarget.dataset.id);
    wx.navigateTo({
      url: '/pages/deile/index?id=' + e.currentTarget.dataset.id,
    })
  },
  // 点击评论框
  changeInput() {
    this.setData({
      showInput: false
    })
  },
  // 评论输入框失去焦点
  changeState() {
    this.setData({
      showInput: true
    })
  },
  // 获取评论类容
  bindKeyInput(e) {
    this.setData({
      commentInfo: e.detail.value
    })
  },
  // 发送评论
  sendInfo() {


    try {
      let nickName = wx.getStorageSync('nickName')
      if (nickName) {
        wx.showToast({
          title: this.data.commentInfo + nickName,
          icon: 'success',
          duration: 2000
        })
      } else {
        wx.getUserProfile({
          desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
          success: (data) => {
            console.log(123456789);
            wx.setStorageSync('nickName', data.userInfo.nickName)
            wx.setStorageSync('avatarUrl', data.userInfo.avatarUrl)
            wx.showToast({
              title: this.data.commentInfo + wx.getStorageSync('nickName'),
              icon: 'success',
              duration: 2000
            })
          }
        });
      }


    } catch (e) {

    }


  }
})