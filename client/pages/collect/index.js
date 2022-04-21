// pages/user/ss/index.js
const app = getApp();//引入全局配置文件
var startX //定义鼠标偏移的x轴位置
var startY //定义鼠标偏移的Y轴位置
var indexId //定义当前(item)项目的id
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startX: 0,//定义偏移量X
    startY: 0, //定义偏移量Y
    btnWidth: 0, // 定义触摸位移宽度
    positionStyle: null, //定义定位
    list: [],// 源数据
    copyList: [],// copy数据
    // isShowId: 278,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDataC()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  // 获取数据
  getDataC() {
    debugger
    app.wxRequest('get', "/getCollect", { user_id: wx.getStorageSync('user_id') }, (res) => {
      let arr = res
      arr.forEach((item, i) => {
        let iarr = item.image.split(',')
        iarr.length > 3 ? iarr.pop() : false
        arr[i].image = iarr
        arr[i].imageNum = iarr.length,
          arr[i].sign = false
      })
      this.setData({
        list: arr
      })
      this.setData({
        copyList: this.data.list
      })
    }, (err) => {
    })
  },
  // 跳转
  jumpPage(e) {
    wx.navigateTo({
      url: '/pages/deile/index?id=' + e.currentTarget.dataset.id,
    })
  },

  // onLongPress(e) {
  //   console.log(e.currentTarget.dataset.id);
  //   let id = e.currentTarget.dataset.id
  //   this.setData({
  //     isShowId: true
  //   })
  //   // this.triggerEvent('seachBind',e.target.dataset.id)
  // },

  //手指触摸动作开始 记录起点X坐标
  touchstart: function (e) {
    //开始触摸时 重置所有删除
    indexId = e.currentTarget.dataset.id
    this.setData({
      list: this.data.copyList
    })
    this.data.list.forEach((v) => {
      if (!v.sign) {
        if (indexId == v.article_id) {
          v.sign = true
        }
      }
    })
    startX = e.changedTouches[0].clientX
    startY = e.changedTouches[0].clientY
  },

  //滑动事件处理
  touchmove: function (e) {

    let touchMoveX = e.changedTouches[0].clientX //滑动变化坐标
    let touchMoveY = e.changedTouches[0].clientY //滑动变化坐标
    let angle = this._angle({
      X: startX,
      Y: startY
    }, {
      X: touchMoveX,
      Y: touchMoveY
    });
    this.data.list.forEach(function (v, i) {
      v.sign = false
      //滑动超过30度角 return
      if (Math.abs(angle) > 30) return;
      if (v.article_id == indexId) {
        if (touchMoveX > startX) //右滑
          v.sign = false
        else //左滑
          v.sign = true
      }
    })
  },
  //删除事件
  delData: function (e) {
    let that = this
    wx.showModal({
      title: '提示',
      content: '是否取消收藏!',
      success: function (res) {
        if (res.confirm) {
          app.wxRequest('get', "/delCollect", { user_id: wx.getStorageSync('user_id'), article_id: indexId }, (res) => {
            if (res.code == 1) {
              that.getDataC()
            }
          }, (err) => {
            alert('取消失败！请重试！')
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  _angle(start, end) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
  }
})