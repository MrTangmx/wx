'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  /** 主页 */
  router.get('/', controller.home.index);
  router.get('/hotList', controller.home.hotList);
  router.get('/list', controller.home.List);
  router.get('/search', controller.home.search);
  router.get('/indexList', controller.home.indexList);
  router.get('/swiper', controller.home.swiper);
  router.get('/getDeile', controller.deile.getDeile);
  router.get('/getProduct', controller.product.getProduct);
  router.get('/getProductList', controller.product.getProductList); 
  router.get('/getDeilePage', controller.product.getDeilePage); 
  router.get('/getAnswers', controller.deile.getAnswers); 
  router.get('/getAnswersItem', controller.deile.getAnswersItem); 

  



  router.get('/getMsgCode', controller.user.getMsgCode);
  router.post('/updatePersonal', controller.user.updatePersonal);
};
