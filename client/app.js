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
        // https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code
        wx.setStorageSync('js_code', res.code)
        this.isUser(res.code)
      }
    })

    wx.getUserInfo({
      success: function (res) {
      }

    })
  },
  globalData: {
    userInfo: null,
    URL: 'http://localhost:8080',// 填写服务器端口
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
  },
  getWxUser() {
    let nickName = wx.getStorageSync('nickName')
    if (nickName) {
      return false
    } else {
      wx.getUserProfile({
        desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (data) => {
          wx.setStorageSync('nickName', data.userInfo.nickName)
          wx.setStorageSync('avatarUrl', data.userInfo.avatarUrl)
        },
      });
    }
  },
  // 判断当前用户是否已经存在与数据库
  isUser(code) {
    let that = this
    let data = null
    var APP_ID = "wx9adf6f81f35cef82"; //小程序的app id ，在公众开发者后台可以看到
    var APP_SECRET = "13f0c200631f6e3e2b00321a88d88e0f"; //程序的app secrect，在公众开发者后台可以看到
    wx.request({
      url: "https://api.weixin.qq.com/sns/jscode2session", //仅为示例，并非真实的接口地址
      data: {
        appid: APP_ID,
        secret: APP_SECRET,
        js_code: code
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        that.wxRequest('GET', "/login", { open_id: res.data.openid }, (res) => {
          if (res.user_id) {
            wx.setStorageSync('user_id', res.user_id)
          }
        })
      }
    })
    return data
  }



})

