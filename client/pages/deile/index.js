// pages/deile/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showInput: true, //显示输入框
    commentInfo: '', //评论内容
    id: '',//保存临时id
    list: [],//保存列表数据
    detail: {},//保存当前列表
    article_id: null,//保存文章id
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList()
    this.getDeile(options.id)
    this.setData({
      article_id: options.id
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  // 获取列表数据
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
  // 获取单条数据
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

  },
  // 获取评论类容
  bindKeyInput(e) {
    this.setData({
      commentInfo: e.detail.value
    })
  },
  // 发送评论
  sendInfo() {
    let that = this
    let js_code = wx.getStorageSync('js_code');
    let user_id = wx.getStorageSync('user_id');
    if (!user_id) {
      app.isUser(js_code)
    }
    app.getWxUser();
    app.wxRequest('POST', "/addComments", { user_id, article_id: this.data.article_id, content: this.data.commentInfo, nickName: wx.getStorageSync('nickName'), avatarUrl: wx.getStorageSync('avatarUrl') }, (res) => {
      this.setData({
        showInput: true
      })
      wx.showToast({
        title: res.msg,
        icon: 'success',
        duration: 2000
      })
      wx.navigateTo({
        url: '/pages/deile/index?id=' + this.data.article_id,
      })
    }, (err) => {
    })
  },
  bindCollect() {
    app.wxRequest('POST', "/bindCollect", { user_id: wx.getStorageSync('user_id'), article_id: this.data.article_id, }, (res) => {
      console.log(res);
      wx.showToast({
        title: '收藏成功!',
        icon: 'success',
        duration: 2000
      })
    }, (err) => {
    })
  }
})