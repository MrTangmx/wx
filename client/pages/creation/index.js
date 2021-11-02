const app = getApp();
Page({
  data: {
    formats: {},
    imgArr: [],
    inputValue: "",
    valueText: ''
  },
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
  release() {
    if (this.data.imgArr.length == 0) {
      wx.showToast({
        title: '不能发布空内容',
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


  },
  bindKeyInput(e) {
    console.log(e);
    this.setData({
      inputValue: e.detail.value
    })
  },
  bindTextInput(e) {
    this.setData({
      valueText: e.detail.value
    })
  }
})