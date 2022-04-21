// components/issue/index.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 传入数据列表
    answersList: {
      type: Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isText: true,// 是否显示文字
    showCritic: false,// 定义初始化状态
    centre: -1,//定义当前选中item(项目)是否展开
    current: -1, //定义当前选中item(项目)关闭
    criticList: [] // 定义展示列表数据
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 控制全部展开的item(项目)只能有一个
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
    // 是否展开显示当前内容
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
    // 发表评论触发事件
    writeAnswer(e) {
      // 定义上传数据模板
      let data = {
        answers_id: e.currentTarget.dataset.answers_id,
        answers_critic_content: null,
        user_id: wx.getStorageSync('user_id'),

      }
      // 提示box框
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
