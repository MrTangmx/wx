// components/issue/index.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    answersList: {
      type: Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isText: true,
    showCritic: false,
    centre: -1,
    current: -1,
    criticList: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showTextAll(e) {
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
    showCritic(e) {
      if (e.currentTarget.dataset.index == this.data.centre) {
        this.setData({
          centre: -1
        })
        return
      }
      this.setData({
        centre: e.currentTarget.dataset.index
      })
      app.wxRequest('GET', "/getAnswersItem", { id: e.currentTarget.dataset.id }, (res) => {
        this.setData({
          criticList: res
        })
      }, (err) => {
      })
    },
    writeAnswer(e) {
      let data = {
        answers_id: e.currentTarget.dataset.answers_id,
        answers_critic_content: null,
        user_id: wx.getStorageSync('user_id'),

      }
      wx.showModal({
        title: '提示',
        editable: true,
        placeholderText: '输入评论内容',
        success(res) {
          if (res.confirm) {
            data.answers_critic_content = res.content
            app.wxRequest('POST', "/writeAnswer", data, (res) => {
              wx.showToast({
                title: '成功!',
                icon: 'success',
                duration: 2000
              })
            }, (err) => {
            })
          } else if (res.cancel) {

          }
        }
      })
      
    }
  },
  onLoad: function (options) {
  },
  //写回答

})
