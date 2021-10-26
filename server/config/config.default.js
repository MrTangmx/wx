/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1632998910397_9529";

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // 配置服务器基本信息

  userConfig.cluster = {
    listen: {
      path: "",
      port: 8080,
      hostname: "localhost", //默认localhost和ip地址,上线时用0.0.0.0
    },
  };
  // 配置安全验证
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: ["*"], //[]中放放出的白名单，*代表所有
  };
  //跨域配置
  userConfig.cors = {
    // origin: ['http://localhost'],
    origin: function (ctx) {
      //设置允许来自指定域名请求
      return ctx.request.header.origin;
    },
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH",
    credentials: true,
  };
  //文件上传方式
  userConfig.multipart = {
    mode: "file",
  };

  userConfig.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: "localhost",
      // 端口号
      port: "3306",
      // 用户名
      user: "root",
      // 密码
      password: "root",
      // 数据库名
      database: "wx_forum",
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  return {
    ...config,
    ...userConfig,
  };
};
