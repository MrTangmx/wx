// pages/product/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    x: 0,
    //测试数据,实际项目中引入自己的数据
    nav_list: [{
        brand_id: 0,
        brand_name: "热榜"
      },
      {
        brand_id: 1,
        brand_name: "推荐"
      },
      {
        brand_id: 2,
        brand_name: "新闻"
      },
      {
        brand_id: 3,
        brand_name: "评测"
      },
      {
        brand_id: 4,
        brand_name: "手机"
      },
      {
        brand_id: 5,
        brand_name: "笔记本"
      },
      {
        brand_id: 6,
        brand_name: "游戏硬件"
      },
      {
        brand_id: 7,
        brand_name: "数码影像"
      },
      {
        brand_id: 8,
        brand_name: "家电"
      }, {
        brand_id: 9,
        brand_name: "企业站"
      }
    ],
    brand_id: 1, // 当前选中的id值
    swiperImg: [{
        img: 'https://dg-fd.zol-img.com.cn/t_s800x400/g6/M00/0A/0E/ChMkKmFs2ECIF8lBAAF7g9C6XBgAAUsKwDwPxIAAXub481.jpg',
        title: 'SA基站绝对主流NSA单模5G手机该升级了'
      },
      {
        img: 'https://dg-fd.zol-img.com.cn/t_s2000x2000/g6/M00/0B/00/ChMkKmFtHBeIPtFoAACqMhwHyRUAAUs0wDAlqAAAKpK331.jpg',
        title: '为何说11代酷睿是英特尔Evo认证笔记本的智能化动力枢纽'
      },
      {
        img: 'https://dg-fd.zol-img.com.cn/t_s800x400/g6/M00/0A/0E/ChMkKWFs2IiISDwGAAFGaG4prk4AAUsKwHCU_EAAUaA200.jpg',
        title: '苹果19日发布会前瞻:Mac和AirPods大升级'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  switchTap(e) { //更换资讯大类

    let screenWidth = wx.getSystemInfoSync().windowWidth;

    let itemWidth = screenWidth / 5;

    let {
      index,
      id
    } = e.currentTarget.dataset;

    const {
      nav_list
    } = this.data;

    let scrollX = itemWidth * index - itemWidth * 2;

    let maxScrollX = (nav_list.length + 1) * itemWidth;

    if (scrollX < 0) {
      scrollX = 0;
    } else if (scrollX >= maxScrollX) {
      scrollX = maxScrollX;
    }

    this.setData({
      x: scrollX,
      brand_id: id
    })

    this.triggerEvent("switchTap", id); //点击了导航,通知父组件重新渲染列表数据
  }

})