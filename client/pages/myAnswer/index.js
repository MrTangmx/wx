// pages/myAnswer/index.js
var startX
var startY
var indexId
var replyId
const app = getApp();
var count = 0

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowClass: true,// 是否样式可用
    page: 1,//定义页
    size: 5,//定义条数
    answersList: [],// 源数据
    copyAnswersList: [], 
    replyData: [],//评论数据
    copyReplyData: [],// copy数据
    touchmoveCount: 0// 触摸移除数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getAnswers(this.data.page, this.data.size)
  },
  getAnswers(page, size) {
    app.wxRequest('GET', "/getPersonalAnswers", { user_id: wx.getStorageSync('user_id'), page, size }, (res) => {
      let arr = res
      if (res.length == 0) {
        this.setData({
          page: this.data.page -= 1
        })
      }
      arr.forEach((item, i) => {
        arr[i].sign = false
      })
      this.setData({
        answersList: arr
      })
      this.data.copyAnswersList = this.data.answersList
    }, (err) => {
    })
  },
  getMyReply() {
    app.wxRequest('GET', "/getMyReply", { user_id: wx.getStorageSync('user_id') }, (res) => {
      let arr = res
      arr.forEach((v,i)=>{
        arr[i].sign = false
      })
      this.setData({
        replyData: res,
      })
      this.data.copyReplyData = this.data.replyData
    }, (err) => {
    })
  },
  showTextAll(e) {
    console.log(456);
    if (e.currentTarget.dataset.index == this.data.current) {
      this.setData({
        current: -1
      })
      return
    }
    this.setData({
      current: e.currentTarget.dataset.index
    })
  },
  onReachBottom: async function () {
    if (this.data.isShowClass) {
      this.setData({
        page: this.data.page += 1
      })
      await this.getAnswers(this.data.page, this.data.size)
    }

  },
  showTabTap(e) {
    console.log(e.target.dataset.code);
    if (e.target.dataset.code == 1) {
      this.setData({
        isShowClass: true,
      })
      //查询我的发布
    } else if (e.target.dataset.code == 0) {
      //查询我的回答
      this.setData({
        isShowClass: false,
      })
      this.getMyReply()

    }
  },
  //手指触摸动作开始 记录起点X坐标
  touchstart: function (e) {
    console.log(e);
    //开始触摸时 重置所有删除
    indexId = e.currentTarget.dataset.id
    replyId = e.currentTarget.dataset.id
    this.setData({
      answersList: this.data.copyAnswersList,
      replyData:this.data.copyReplyData
    })
    this.data.answersList.forEach((v) => {
      if (!v.sign) {
        v.sign = false
      }
    })
    this.data.replyData.forEach((v) => {
      if (!v.sign) {
        v.sign = false
      }
    })
    startX = e.changedTouches[0].clientX
    startY = e.changedTouches[0].clientY
  },

  //滑动事件处理
  touchmove: function (e) {
    let that = this
    let touchMoveX = e.changedTouches[0].clientX //滑动变化坐标
    let touchMoveY = e.changedTouches[0].clientY //滑动变化坐标
    let angle = this._angle({
      X: startX,
      Y: startY
    }, {
      X: touchMoveX,
      Y: touchMoveY
    });
    if (!this.data.isShowClass) {
      this.data.replyData.forEach(function (v, i) {
        v.sign = false
        //滑动超过30度角 return
        if (Math.abs(angle) > 60) return;
        if (v.answers_critic_id == replyId) {
          if (touchMoveX > startX) //右滑
            v.sign = false
          else //左滑
            v.sign = true
        }
      })
    } else {
     
      this.data.answersList.forEach(function (v, i) {
        v.sign = false
        //滑动超过30度角 return
        if (Math.abs(angle) > 60) return;
        if (v.answers_id == indexId) {
          if (touchMoveX > startX) //右滑
            v.sign = false
          else //左滑
            v.sign = true
        }
      })
    }

  },
  //删除事件
  delData: function (e) {
    let that = this
    wx.showModal({
      title: '提示',
      content: '是否删除该内容!',
      success: function (res) {
        if (res.confirm) {
          if (!that.data.isShowClass) {
            app.wxRequest('get', "/delMyReply", {  answers_critic_id: replyId }, (res) => {
              if (res.code == 1) {
                that.getMyReply()
              }
            }, (err) => {
              alert('取消失败！请重试！')
            })
          }else{
            app.wxRequest('get', "/delPersonalAnswers", { user_id: wx.getStorageSync('user_id'), answers_id: indexId }, (res) => {
              if (res.code == 1) {
                that.getAnswers(that.data.page, that.data.size)
              }
            }, (err) => {
              alert('取消失败！请重试！')
            })
          }
          
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