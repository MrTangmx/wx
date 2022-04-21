'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  /** 主页 */
  router.get('/', controller.home.index);//首页
  router.get('/hotList', controller.home.hotList);//获取热点列表
  router.get('/list', controller.home.List); // 获取列表
  router.get('/search', controller.home.search);// 搜索
  router.get('/searchProduct', controller.home.searchProduct);// 搜索
  router.get('/indexList', controller.home.indexList);// 主页列表
  router.get('/swiper', controller.home.swiper);// 轮播图请求
  router.get('/getDeile', controller.deile.getDeile);// 获取相关详情
  router.get('/getProduct', controller.product.getProduct);// 查询产品库产品
  router.get('/getProductList', controller.product.getProductList); // 查询产品列表
  router.get('/getDeilePage', controller.product.getDeilePage); // 详情页面获取
  router.get('/getAnswers', controller.deile.getAnswers); // 获取问答列表
  router.get('/getPersonalAnswers', controller.deile.getPersonalAnswers); // 获取个人问答列表
  router.get('/delPersonalAnswers', controller.deile.delPersonalAnswers); // 删除我发布的
  router.get('/getMyReply', controller.deile.getMyReply); // 获取我评论的文章
  router.get('/delMyReply', controller.deile.delMyReply); // 获取我评论的文章
  router.get('/getAnswersItem', controller.deile.getAnswersItem); //其他评论
  router.get('/login', controller.user.login); // 用户登录
  router.post('/releaseData', controller.product.releaseData);//发布文章
  router.post('/releaseReply', controller.product.releaseReply);//发布文章
  router.post('/addComments', controller.product.addComments);//添加评论
  router.post('/writeAnswer', controller.product.writeAnswer);//发表相关
  router.post('/writeAnswerPro', controller.product.writeAnswerPro);// 写回答
  router.post('/bindCollect', controller.product.bindCollect);//控制帖子
  router.get('/getCollect', controller.user.getCollect); //获取收藏列表
  router.get('/delCollect', controller.user.delCollect); //删除收藏列表
  
  router.get('/getMsgCode', controller.user.getMsgCode);// 获取验证信息
  router.post('/updatePersonal', controller.user.updatePersonal);// 获取跟新信息
  
};
