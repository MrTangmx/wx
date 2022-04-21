const app = getApp();
Page({
  data: {
    formats: {},// 定义发布内容表单
    imgArr: [],//定义上传图片列表
    inputValue: "",// 定义标题内容接收变量
    valueText: ''//定义文章内容接收
  },
  // 上传图片的数量控制
  insertImage() {
    const that = this
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        that.getpublish(res.tempFilePaths, 0)
      }
    })
  },
  // 递归循环下载图片
  getpublish(list, i) {
    wx.showLoading({
      title: '正在上传第' + (i + 1) + '张',
    })
    var that = this
    let arr = that.data.imgArr
    wx.uploadFile({
      url: "https://api110.herbplantist.com/sucai/public/index.php/post/post/uploadFile",
      filePath: list[i],
      name: 'file',
      formData: {
        key: 'Gn1xVdBiTClSSHKZifg0pTQSU5XGagWO',
        is_https: 1,
      },
      success(res) {
        var data = JSON.parse(res.data)
     
        if (data.status == 200) {
          arr.push(data.info.url)
          that.setData({
            imgArr: arr
          })
        }
        if (i + 1 == list.length) {
          wx.showToast({
            title: '上传成功',
          });
        }
        wx.hideLoading()
        if (++i < list.length) {
          that.getpublish(list, i);
        }
      },
    })
  },
  // 发布上传事件
  release() {
    if (this.data.imgArr.length == 0) {
      wx.showToast({
        title: '发布内容存在未输入项！',
        icon: 'error',
        duration: 2000
      })
      return
    }
    let data = {
      user_id: '',
      title: '',
      image: '',
      content: '',
    }

    let that = this
    let js_code = wx.getStorageSync('js_code');
    let user_id = wx.getStorageSync('user_id');
    data.user_id = user_id;
    data.image = this.data.imgArr.join(',');
    data.title = this.data.inputValue;
    data.content = this.data.valueText;

    if (!user_id) {
      app.isUser(js_code)
    }
    app.getWxUser();

    wx.showModal({
      title: '提示',
      content: '请选择想要发布的模块',
      cancelText:'问答区域',
      cancelColor:'#07C160',
      confirmText:'测评区域',
      confirmColor:'#3390FF',
      success (res) {
        if (res.confirm) {
          app.wxRequest('POST', "/releaseData", data, (res) => {
            wx.showToast({
              title: res.msg,
              icon: 'success',
              duration: 2000
            })
            this.setData({
              imgArr: [],
              valueText: '',
              inputValue: ''
            })
      
          }, (err) => {
          })
        } else if (res.cancel) {
          app.wxRequest('POST', "/releaseReply", data, (res) => {
            wx.showToast({
              title: res.msg,
              icon: 'success',
              duration: 2000
            })
            this.setData({
              imgArr: [],
              valueText: '',
              inputValue: ''
            })
      
          }, (err) => {
          })
        }
      }
    })
    
  },
  // 输入时触发赋值操作
  bindKeyInput(e) {
    console.log(e);
    this.setData({
      inputValue: e.detail.value
    })
  },
    // 输入时触发赋值操作
  bindTextInput(e) {
    this.setData({
      valueText: e.detail.value
    })
  }
})