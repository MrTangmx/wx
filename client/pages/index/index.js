// pages/product/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    swiper_img: [{
      id: 0,
      img: 'https://dg-fd.zol-img.com.cn/t_s800x400/g6/M00/0A/0E/ChMkKmFs2ECIF8lBAAF7g9C6XBgAAUsKwDwPxIAAXub481.jpg',
      title: 'SA基站绝对主流NSA单模5G手机该升级了'
    },
    {
      id: 1,
      img: 'https://dg-fd.zol-img.com.cn/t_s2000x2000/g6/M00/0B/00/ChMkKmFtHBeIPtFoAACqMhwHyRUAAUs0wDAlqAAAKpK331.jpg',
      title: '为何说11代酷睿是英特尔Evo认证笔记本的智能化动力枢纽'
    },
    {
      id: 2,
      img: 'https://dg-fd.zol-img.com.cn/t_s800x400/g6/M00/0A/0E/ChMkKWFs2IiISDwGAAFGaG4prk4AAUsKwHCU_EAAUaA200.jpg',
      title: '苹果19日发布会前瞻:Mac和AirPods大升级'
    }
    ],
    //热点标题
    hot: [
      '页面可自定义 支付宝升级首页可单独编辑 ', '丰田拟美国建电池工厂:服务混合动力和电动汽车', '苹果将语音助理Siri整合到Apple Music'
    ],
    //产品列表
    list: [{
      id: 1,
      title: '打印快准狠 盘点三款好用的激光打印机',
      imgArr: ['https://article-fd.zol-img.com.cn/t_s240x180/g6/M00/0B/02/ChMkKmFtRFGIH9zNAAQlMdUqCXoAAUtPgJZCHAABCVJ553.jpg', 'https://article-fd.zol-img.com.cn/t_s240x180/g6/M00/0B/02/ChMkKmFtRNeIIrB6AAGrn8ZKJP0AAUtPgPKaYoAAau3018.jpg', 'https://article-fd.zol-img.com.cn/t_s240x180/g6/M00/0B/02/ChMkKmFtRNeIIrB6AAGrn8ZKJP0AAUtPgPKaYoAAau3018.jpg'],
      releaseTime: '2020-01-01'
    }, {
      id: 2,
      title: '打印快准狠 盘点三款好用的激光打印机',
      imgArr: ['https://article-fd.zol-img.com.cn/t_s240x180/g6/M00/0B/02/ChMkKmFtRFGIH9zNAAQlMdUqCXoAAUtPgJZCHAABCVJ553.jpg', 'https://article-fd.zol-img.com.cn/t_s240x180/g6/M00/0B/02/ChMkKmFtRNeIIrB6AAGrn8ZKJP0AAUtPgPKaYoAAau3018.jpg', 'https://article-fd.zol-img.com.cn/t_s240x180/g6/M00/0B/02/ChMkKmFtRNeIIrB6AAGrn8ZKJP0AAUtPgPKaYoAAau3018.jpg'],
      releaseTime: '2020-01-01'
    }, {
      id: 3,
      title: '打印快准狠 盘点三款好用的激光打印机',
      imgArr: ['https://article-fd.zol-img.com.cn/t_s240x180/g6/M00/0B/02/ChMkKmFtRFGIH9zNAAQlMdUqCXoAAUtPgJZCHAABCVJ553.jpg', 'https://article-fd.zol-img.com.cn/t_s240x180/g6/M00/0B/02/ChMkKmFtRNeIIrB6AAGrn8ZKJP0AAUtPgPKaYoAAau3018.jpg', 'https://article-fd.zol-img.com.cn/t_s240x180/g6/M00/0B/02/ChMkKmFtRNeIIrB6AAGrn8ZKJP0AAUtPgPKaYoAAau3018.jpg'],
      releaseTime: '2020-01-01'
    }, {
      id: 4,
      title: '打印快准狠 盘点三款好用的激光打印机',
      imgArr: ['https://article-fd.zol-img.com.cn/t_s240x180/g6/M00/0B/02/ChMkKmFtRFGIH9zNAAQlMdUqCXoAAUtPgJZCHAABCVJ553.jpg', 'https://article-fd.zol-img.com.cn/t_s240x180/g6/M00/0B/02/ChMkKmFtRNeIIrB6AAGrn8ZKJP0AAUtPgPKaYoAAau3018.jpg', 'https://article-fd.zol-img.com.cn/t_s240x180/g6/M00/0B/02/ChMkKmFtRNeIIrB6AAGrn8ZKJP0AAUtPgPKaYoAAau3018.jpg'],
      releaseTime: '2020-01-01'
    }],
    // 搜索列表
    searchList: ['点击完成按钮时触发，event.detail = { value }', '点击完成按钮时触发，event.detail = { value }', '点击完成按钮时触发，event.detail = { value }'],
    //变量控制是否显示数据
    showSwiper: true, // 轮播图
    showNavIcon: true, //副导航
    showHotExquisite: true, //热点精选
    showInput: true, //搜索
    showSearchList: false, //搜索列表 
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

    this.triggerEvent(id); //点击了导航,通知父组件重新渲染列表数据
  },
  triggerEvent(id) {
    console.log(id);
  },
  // 根据当前得id(也就是需要展示得导航得那个东西)请求对应得参数
  jumpPage(e) {
    console.log(e.currentTarget.dataset.id);
    wx.navigateTo({
      url: '/pages/deile/index?id=' + e.currentTarget.dataset.id,
    })
  },
  //改变搜索框
  changeInput() {
    this.setData({
      showInput: false
    })
  },
  //关闭搜索框
  changeState() {
    this.setData({
      showInput: true,
      showSearchList: false
    })
  },
  //获取到输入内容
  bindKeyInput(e) {
    if (e.detail.value != '') {
      this.setData({
        showSearchList: true
      })
    } else {
      this.setData({
        showSearchList: false
      })
    }
  },
  onLoad: function (options) {
  },
})