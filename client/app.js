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
        console.log(res);
      }
    })
    // router.post('/wxgetOpenId', function (req, res, next) {  
    //   var data=req.body
    //   var APP_URL='https://api.weixin.qq.com/sns/jscode2session'
    //   var APP_ID='wxXXXXXXXXX'   //小程序的app id ，在公众开发者后台可以看到
    //   var APP_SECRET='8ad6f0XXXXXXXXXXXX'  //程序的app secrect，在公众开发者后台可以看到
    
    //   var resData=null 
    //   var thisRes=res
    //   if(!!data.js_code)
    //   {
     
    //     request(`${APP_URL}?appid=${APP_ID}&secret=${APP_SECRET}&js_code=${data.js_code}&grant_type=authorization_code`, (error, response, body)=>{
    //       console.log('statusCode:', response && response.statusCode)
    //       console.log(body)
    //       res.end(body)})
     
    //   }
    // })
    wx.getUserInfo({
      success: function (res) {
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
        }
      });
    }
  }



})

