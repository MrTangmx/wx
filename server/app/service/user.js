/*
 * @Author: Mr Tang
 * @Date: 2022-03-23 10:43:09
 * @LastEditors: Mr Tang
 * @LastEditTime: 2022-04-13 09:50:33
 * @FilePath: \hmie:\wx-forum\server\app\service\user.js
 * @Description: 
 * 
 * Copyright (c) 2022 Mr Tang
 */
const https = require("https");

const { Service } = require("egg");

class UserService extends Service {
  async getUserInfo(data) {

    const post = await this.app.mysql.get("wx_user", data);
    if (!post) {
      const result = await this.app.mysql.insert('wx_user', data);
      if (result.affectedRows === 1) {
        const post = await this.app.mysql.get("wx_user", data);
        return post
      }
    }
    return post;
  }
  async getCollect(id) {
    let sql = `SELECT A.* FROM wx_article A, wx_collect C where A.article_id = C.article_id AND C.user_id=${id}`;
    const result = await this.app.mysql.query(sql);
    return result;
  }
  // async getCollect(id) {
  //   let sql = `SELECT A.* FROM wx_article A, wx_collect C where A.article_id = C.article_id AND C.user_id=${id}`;
  //   const result = await this.app.mysql.query(sql);
  //   return result;
  // }

  async delCollect(data) {
    let where = {
      article_id: data.article_id,
      user_id: data.user_id
    }
    const res = await this.app.mysql.delete('wx_collect', where);
    // let sql = `DELETE C FROM wx_collect C WHERE C.article_id = ${data.article_id} AND C.user_id=${data.user_id}`;
    // const result = await this.app.mysql.query(sql);
    
    let code = 1
    if (res.affectedRows == 0) {
      code = 0
    }
    return {code}
  }

}

module.exports = UserService;
