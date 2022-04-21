// components/seach/index.js
const app = getApp();
Page({
    properties: {
      // 定义父组件传递过来的数据
      describe:{
            type:String,
            value:'手机'
        }
    },
    /**
     * 页面的初始数据
     */
    data: {
        showInput: true, //搜索
        showSearchList: false, //搜索列表 
        page: 1,//定义查询页
        size: 5,// 定义查询条数
        timer: null,// 定义变量接受计时器
        backTopValue: false,// 返回顶部组件是否显示
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
  
    //获取到输入内容
  bindKeyInput(e) {
    clearTimeout(this.data.timer)
    let timer = setTimeout(() => {
      app.wxRequest('GET', "/searchProduct", { data: e.detail.value }, (res) => {
        let arr = []
        res.forEach((item) => {
          arr.push({ title: item.name, article_id: item.pro_id })
        })
        if (arr.length == 0) {
          arr[0] = {
            title: "  暂时没有相关产品，可以输入手机试试！",
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
  // 定义触发事件,有父组件触发
  getconnet(e) {
    console.log(e);
    if (e.target.dataset.id) {
      this.triggerEvent('seachBind',e.target.dataset.id)
    }
  },
})