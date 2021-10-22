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
        console.log(data)
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
    console.log(this.data.imgArr, this.data.inputValue, this.data.valueText);
  },
  bindKeyInput(e) {
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