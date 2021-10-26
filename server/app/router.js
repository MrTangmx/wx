'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.post('/list', controller.home.list);// 查询列表接口

  router.get('/getMsgCode', controller.user.getMsgCode);
  router.post('/updatePersonal', controller.user.updatePersonal);
};
