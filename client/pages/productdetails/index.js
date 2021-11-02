// index/details.js
const app = getApp();

Page({

  data: {

    // banner

    imgUrls: [
      "https://m.360buyimg.com/n12/jfs/t11317/108/1080677336/325163/f4c2a03a/59fd8b17Nbe2fcca3.jpg!q70.jpg",
      "https://m.360buyimg.com/n12/jfs/t11575/282/348533702/60173/d75cd1cc/59edb8d6N688b420f.jpg!q70.jpg",
      "https://m.360buyimg.com/n12/jfs/t11536/279/360605865/15194/442cab0b/59edb8d3N163a7608.jpg!q70.jpg",
      "https://m.360buyimg.com/n12/s750x750_jfs/t9733/126/2033941175/68120/a4eb4468/59edb8d6N37bea6f7.jpg!q70.jpg",
      "https://m.360buyimg.com/n12/s750x750_jfs/t10744/195/2053933852/71608/94425578/59edb8d6Ne28c70ff.jpg!q70.jpg"
    ],

    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, // 滑动动画时长1s
    detailImg: [],
    //产品列表
    list: [],
    productList: {},
    pro_id: null

  },
  //预览图片
  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.imgUrls // 需要预览的图片http链接列表  
    })
  },
  // 根据当前得id(也就是需要展示得导航得那个东西)请求对应得参数
  jumpPage(e) {
    console.log(e.currentTarget.dataset.id);
    wx.navigateTo({
      url: '/pages/deile/index?id=' + e.currentTarget.dataset.id,
    })
  },
  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    this.setData({
      pro_id: options.id
    })
    // 查询产品库
    app.wxRequest('GET', "/getDeilePage", { id: options.id }, (res) => {
      this.setData({
        productList: res
      })
    })
    this.getList()
  }, writeAnswer(e) {
    console.log(e.currentTarget.dataset.pro_id);
    let data = {
      pro_id: e.currentTarget.dataset.pro_id,
      content_prodict: null,
      user_id: wx.getStorageSync('user_id'),

    }
    wx.showModal({
      title: '提示',
      editable: true,
      placeholderText: '输入评论内容',
      success(res) {
        console.log(res);
        if (res.confirm) {
          data.content_prodict = res.content
          console.log(data);
          app.wxRequest('POST', "/writeAnswerPro", data, (res) => {
            
            wx.navigateTo({
              url: '/pages/productdetails/index?id=' + e.currentTarget.dataset.pro_id,
            })
          }, (err) => {
          })
        } else if (res.cancel) {
        }
      }
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
})
