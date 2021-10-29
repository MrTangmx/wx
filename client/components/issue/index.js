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
    centre: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showTextAll() {
      this.setData({
        isText: !this.data.isText
      })
    },
    showCritic(e) {
      console.log(e.currentTarget.dataset.id);
      this.setData({
        centre: e.currentTarget.dataset.id
      })
      if (!this.data.showCritic) {
        app.wxRequest('GET', "/getAnswersItem", { id: e.currentTarget.dataset.id }, (res) => {

        }, (err) => {
        })
      }

      // console.log(e.currentTarget.dataset);
      this.setData({
        showCritic: !this.data.showCritic
      })
    }
  },
  onLoad: function (options) {
  }
})
