// components/swiper/swiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgData: {
      type: Array,
    },
    // 是否显示指示器
    indicatorDots: {
      type: Boolean,
      value: true
    },
    // 指示器颜色
    indicatorColor: {
      type: String,
      value: '#999'
    },
    // 当前选中指示器颜色
    indicatorActiveColor: {
      type: String,
      value: '#fff'
    },
    // 自动切换
    autoplay: {
      type: Boolean,
      value: true
    },
    // 衔接滑动
    circular: {
      type: Boolean,
      value: true
    },
    //是否纵向
    vertical: {
      type: Boolean,
      value: false
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    swiper_title: '',
    current: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onSlideChangeEnd(e) {
      for (const key in this.data.imgData) {
        if (e.detail.current == this.data.imgData[key].id) {
          this.setData({
            "swiper_title": this.data.imgData[key].title
          })
        }
      }

    },

  },
  lifetimes: {
    ready() {
      this.setData({
        "swiper_title": this.data.imgData[0].title
      })
    }
  },
})