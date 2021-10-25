// index/details.js
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

})
