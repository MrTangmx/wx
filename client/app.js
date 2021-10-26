// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId


      }
    })
  },
  globalData: {
    userInfo: null,
    URL: 'http://127.0.0.1:8080',
  },
  wxRequest(method, url, data, callback, errFun) {
    wx.request({
      url: this.globalData.URL + url,
      method: method,
      data: data,
      dataType: 'json',
      success: function (res) {
        callback(res.data);
      },
      fail: function (err) {
        errFun(err);
      }
    })
  }
})
