'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
      //启用数据库
      mysql: {
        enable: false,
        package: 'egg-mysql',
    },
    // 跨域启动
    cors: { 
        enable:  true,
        package:   'egg-cors'  
    }
};
