// pages/product/index.js

const app = getApp();
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
      brand_name: "手机"
    },
    {
      brand_id: 4,
      brand_name: "评测"
    },
    {
      brand_id: 5,
      brand_name: "电脑"
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
    swiper_img: [],
    //热点标题
    hot: [],
    //产品列表
    list: [],
    // 搜索列表
    searchList: [],
    //变量控制是否显示数据
    showSwiper: true, // 轮播图
    showNavIcon: true, //副导航
    showHotExquisite: true, //热点精选
    showInput: true, //搜索
    showSearchList: false, //搜索列表 
    page: 1,
    size: 5,
    timer: null,
    backTopValue: false,
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
    switch (id) {
      case 1:
        this.setData({
          showSwiper: true,
          showHotExquisite: true,
          showNavIcon: true
        })
        break;
      case 0:
        this.setData({
          showSwiper: false,
          showHotExquisite: false,
          showNavIcon: false
        })
        break;
      case 2:
        this.setData({
          showSwiper: true,
          showHotExquisite: false,
          showNavIcon: false
        })
        break;
      case 3:
        this.setData({
          showSwiper: true,
          showHotExquisite: false,
          showNavIcon: false
        })
        break;
      case 4:
        this.setData({
          showSwiper: true,
          showHotExquisite: false,
          showNavIcon: false
        })
        break;
      case 5:
        this.setData({
          showSwiper: true,
          showHotExquisite: false,
          showNavIcon: false
        })
        break;

      default:
        this.setData({
          showSwiper: false,
          showHotExquisite: false,
          showNavIcon: false
        })
    }
    this.getSwiper(id)
    this.getList(this.data.page, this.data.size, id);
    console.log(id);
  },
  // 根据当前得id(也就是需要展示得导航得那个东西)请求对应得参数
  jumpPage(e) {
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
  // 关闭搜索框
  changeState() {
    if (this.data.showSearchList) {
      this.setData({
        showInput: true,
        showSearchList: false,
        timer: null,
      })
    }

  },
  // 监听滚动条坐标
  onPageScroll: function (e) {
    const that = this
    let scrollTop = e.scrollTop
    let backTopValue = scrollTop > 500 ? true : false
    that.setData({
      backTopValue
    })
  },
  //返回顶部
  backTop() {
    wx.pageScrollTo({
      scrollTop: 0,
    })
  },
  //获取到输入内容
  bindKeyInput(e) {
    clearTimeout(this.data.timer)
    let timer = setTimeout(() => {
      app.wxRequest('GET', "/search", { data: e.detail.value }, (res) => {
        let arr = []
        res.forEach((item) => {
          arr.push({ title: item.title, article_id: item.article_id })
        })
        if (arr.length == 0) {
          arr[0] = {
            title: "  暂时没有相关数据，试试搜索手机！",
            article_id: null
          }
        }
        this.setData({
          searchList: arr
        })
      }, (err) => {
      })
    }, 1000)
    this.setData({
      timer: timer
    })
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
  getSwiper(id) {
    // 获取轮播图
    app.wxRequest('GET', "/swiper", { type: id }, (res) => {
      console.log(res);
      let arr = []
      res.forEach((item, i) => {
        arr.push({
          image: item.image,
          id: i,
          A_id: item.article_id,
          title: item.title
        })
      })
      this.setData({
        swiper_img: arr
      })
    }, (err) => {
    })
  },

  onLoad: function (options) {
    this.getSwiper(1)
    this.getList(this.data.page, this.data.size)
    // 获取热点精选
    app.wxRequest('GET', "/hotList", {}, (res) => {
      let hotList = []
      res.forEach((item) => {
        hotList.push(item)
      })
      this.setData({
        hot: hotList,
      })
    }, (err) => {
    })
  },
  skipHot(e){
    console.log(e.target.dataset.id);
    wx.navigateTo({
      url: '/pages/deile/index?id=' + e.target.dataset.id,
    })
  },
  getList(page, size, type) {
    app.wxRequest('GET', "/list", { page, size, type }, (res) => {
      let arr = res
      arr.forEach((item, i) => {
        let iarr = item.image.split(',')
        iarr.length > 3 ? iarr.pop() : false
        arr[i].image = iarr
        arr[i].imageNum = iarr.length
      })
      this.setData({
        list: arr
      })
    }, (err) => {
    })
  },
  getconnet(e) {
    debugger
    if (e.target.dataset.id) {
      wx.navigateTo({
        url: '/pages/deile/index?id=' + e.target.dataset.id,
      })
    }
  },
  onReachBottom: function () {
    console.log(125555);
    app.wxRequest('GET', "/list", { page: this.data.page, size: this.data.size }, (res) => {
      let arr = res
      arr.forEach((item, i) => {
        let iarr = item.image.split(',')
        iarr.length > 3 ? iarr.pop() : false
        arr[i].image = iarr
        arr[i].imageNum = iarr.length
      })
      this.setData({
        list: this.data.list.concat(arr)
      })
    }, (err) => {
    })
  },
})