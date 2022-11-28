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
    swiper_title: '',// 定义轮播图标题
    current: 0 // 定义当前的轮播条数
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 定义手指触摸事件
    onSlideChangeEnd(e) {
      for (const key in this.data.imgData) {
        if (e.detail.current == this.data.imgData[key].id) {
          this.setData({
            "swiper_title": this.data.imgData[key].title
          })
        }
      }
    },
    // 定义跳转的方法（id）
    skipDetil(e) {
      debugger
      console.log(e);
      wx.navigateTo({
        url: '/pages/deile/index?id=' + e.target.dataset.a_id,
      })
    }

  },
  lifetimes: {
    ready() {
      this.setData({
        "swiper_title": this.data.imgData[0] ? this.data.imgData[0].title : '正在加载中！请稍后......'
      })
    }
  },
})