/*
 * @Author: Mr Tang
 * @Date: 2022-03-23 10:43:09
 * @LastEditors: Mr Tang
 * @LastEditTime: 2022-04-21 09:15:03
 * @FilePath: \hmie:\wx-forum\server\app\service\home.js
 * @Description: 
 * 
 * Copyright (c) 2022 Mr Tang
 */
"use strict";

const Service = require("egg").Service;
// 业务层 当前接口需要处理的业务罗逻辑
class HomeService extends Service {
  async List(data) {

    const { app, ctx } = this;// 解构当前全局对象，获取app及ctx对象
    let list = [];// 定义临时对象，保存查询后的值
    let typeProduct = data.type * 1; // 转换数据格式（...）
    if (
      typeProduct != 3 &&
      typeProduct != 4 &&
      typeProduct != 5 &&
      typeProduct != 6
    ) {
      typeProduct = null;
    }
    if (!typeProduct) {
      // 随机获取五条数据
      for (let i = 0; i < 5; i++) {
        var id = Math.round(Math.random() * 590);//定义随机数
        const post = await this.app.mysql.get("wx_article", { article_id: id });//根据随机数查询
        list.push(post);// 添加
      }
      return list;
    } else {
      let id = 0;
        for (let i = 0; i < 5; i++) {
          switch (typeProduct) {
            case 3:
              id = Math.round(Math.random() * (185 - 425) + 425);
              break;
            case 4:
              id = Math.round(Math.random() * (1 - 183) + 183);
              break;
            case 5:
              id = Math.round(Math.random() * (426 - 535) + 535);
              break;
            case 6:
              id = Math.round(Math.random() * (536 - 590) + 590);
              break;
          }
          let sql = `SELECT  *  FROM wx_forum . wx_article WHERE  article_id = ${id} AND typeProduct = ${typeProduct}`;
          const post = await this.app.mysql.query(sql);
          list.push(post[0]);
        }

      return list;
    }
  }
  async hotList() {
    const { app, ctx } = this;
    let hotArr = [];
    for (let i = 0; i < 5; i++) {
      var id = Math.round(Math.random() * (185 - 425) + 425);
      const post = await this.app.mysql.get("wx_article", { article_id: id });
      console.log(post);
      hotArr.push(post);
    }

    return hotArr;
  }
  async search(data) {
    let sql = `select * from wx_article where title like '%${data.data}%'`;
    const post = await this.app.mysql.query(sql);
    return post;
  }
  async searchProduct(data) {
    let sql = `select * from wx_product_item where name  like '%${data.data}%'`;
    const post = await this.app.mysql.query(sql);
    return post;
  }
  

  async indexList(id) {
    const results = await this.app.mysql.select("wx_article", {
      // 搜索 wx_article 表
      where: { typeProduct: id }, // WHERE 条件
      columns: ["*"], // 要查询的表字段
      orders: [], // 排序方式
      limit: 10, // 返回数据量
      offset: 0, // 数据偏移量
    });
    return results;
  }
  async swiper(data) {
    const { app, ctx } = this;
    let list = [];
    for (let i = 0; i < 5; i++) {
      var id = Math.round(Math.random() * 183);
      const post = await this.app.mysql.get("wx_article", { article_id: id });
      list.push(post);
    }
    return list;
  }
}

module.exports = HomeService;
