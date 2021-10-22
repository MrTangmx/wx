// components/issue/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    isText: true,
    showCritic: false
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
    showCritic() {
      this.setData({
        showCritic: !this.data.showCritic
      })
    }
  }
})
