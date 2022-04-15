/*
 * @Author: Mr Tang
 * @Date: 2022-03-23 10:43:09
 * @LastEditors: Mr Tang
 * @LastEditTime: 2022-04-15 00:10:45
 * @FilePath: \hmie:\wx-forum\server\app\service\product.js
 * @Description: 
 * 
 * Copyright (c) 2022 Mr Tang
 */
const { Service } = require("egg");

class ProductService extends Service {
  async getProduct(id) {
    let sql = `SELECT * FROM wx_product where classify=${id}`;
    const post = await this.app.mysql.query(sql);
    return post;
  }
  async getProductList(id) {
    let sql = `SELECT * FROM wx_product_item where classify=${id}`;
    const post = await this.app.mysql.query(sql);
    return post;
  }
  async getDeilePage(id) {
    const post = await this.app.mysql.get("wx_product_item", { pro_id: id });
    let sqlC = `SELECT P.content_prodict, P.setTime, U.nickName, U.avatarUrl,U.named FROM wx_product_critic P  JOIN wx_user U  ON P.user_id = U.user_id WHERE P.pro_id =${post.pro_id}`;
    const det = await this.app.mysql.query(sqlC);
    post.content_prodict = det;
    return post;
  }
  async releaseData(data) {
    let time = new Date().format("yyyy-MM-dd hh:mm:ss");
    data.answers_time = time;
    const result = await this.app.mysql.insert("wx_answers", data);
    return result
  }
  async releaseReply(data) {
    let time = new Date().format("yyyy-MM-dd hh:mm:ss");
    data.ctime = time;
    const result = await this.app.mysql.insert("wx_article", data);
    return result
  }
  async addComments(data) {
    let sql = `INSERT INTO wx_forum . wx_critic (user_id, article_id, content) VALUES (${data.user_id}, '${data.article_id}', '${data.content}')`;
    const det = await this.app.mysql.query(sql);
    const row = {
      avatarUrl: data.avatarUrl,
      nickName: data.nickName,
    };
    const options = {
      where: {
        user_id: data.user_id,
      },
    };
    const result = await this.app.mysql.update("wx_user", row, options); // 更新 posts 表中的记录
    if (det.affectedRows === 1) {
      return { code: 1, msg: "成功!" };
    }

    
    
  }
  async writeAnswer(data) {
    let time = new Date().format("yyyy-MM-dd hh:mm:ss");
    data.setTime = time;
    const result = await this.app.mysql.insert("wx_answers_critic", data);
    return result
  }
   async writeAnswerPro(data) {
    let time = new Date().format("yyyy-MM-dd hh:mm:ss");
    data.setTime = time;

    const result = await this.app.mysql.insert("wx_product_critic", data);
    return result
  }
  async bindCollect(data) {
    const result = await this.app.mysql.insert("wx_collect", data);
    return result
  }
  
  
}

Date.prototype.format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    S: this.getMilliseconds(), //毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
};
module.exports = ProductService;
