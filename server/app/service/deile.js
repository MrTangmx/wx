/*
 * @Author: Mr Tang
 * @Date: 2022-03-23 10:43:09
 * @LastEditors: Mr Tang
 * @LastEditTime: 2022-04-14 23:55:04
 * @FilePath: \hmie:\wx-forum\server\app\service\deile.js
 * @Description: 
 * 
 * Copyright (c) 2022 Mr Tang
 */
"use strict";
const { Service } = require("egg");

class DeileService extends Service {
  async getDeile(id) {
    let sql = `SELECT * FROM wx_article A, wx_user U where A.user_id = U.user_id and A.article_id=${id}`;
    const post = await this.app.mysql.query(sql);
    let sqlC = `SELECT C.content, C.ctime, U.nickName, U.avatarUrl,U.named FROM wx_critic C  JOIN wx_user U  ON C.user_id = U.user_id WHERE C.article_id =${post[0].article_id};`;
    const result = await this.app.mysql.query(sqlC);
    post[0].critic = result;
    return post[0];
  }
  async getAnswers(page, size) {
    const { ctx } = this;
    let sqlC = `SELECT * FROM wx_answers A LEFT JOIN wx_user U ON A.user_id = U.user_id ORDER BY A.answers_id DESC LIMIT ${page * size
      },${size}`;
    const result = await this.app.mysql.query(sqlC);
    return result;
  }
  async getPersonalAnswers(data) {
    console.log(data);
    const { ctx } = this;
    let sqlC = `SELECT * FROM wx_answers A LEFT JOIN wx_user U ON A.user_id = U.user_id WHERE U.user_id = ${data.user_id} ORDER BY A.answers_id  DESC  LIMIT ${data.page * data.size}`;
    const result = await this.app.mysql.query(sqlC);

    return result;
  }
  async delPersonalAnswers(data) {
    console.log(data);
    const { ctx } = this;
    let where = {
      answers_id: data.answers_id,
      user_id: data.user_id
    }
    const res = await this.app.mysql.delete('wx_answers', where);
    let code = 1
    if (res.affectedRows == 0) {
      code = 0
    }
    return { code }
  }
  async getMyReply(data) {
    const { ctx } = this;
    console.log(data);
    let sql = `
            SELECT
            a.content,
            a.title,
            a.answers_time,
            b.nickName,
            a.setTime,
            a.answers_critic_content,
            a.answers_critic_id,
            b.avatarUrl
          FROM
            (
            SELECT
              wa.*,
              wac.answers_id author,
              wac.setTime,
              wac.answers_critic_content,
              wac.answers_critic_id
            FROM
              wx_answers_critic wac
              JOIN wx_answers wa ON wac.answers_id = wa.answers_id 
            WHERE
              wac.user_id = ${data.user_id}
            ) a
            LEFT JOIN wx_user b ON a.user_id = b.user_id`
    const result = await this.app.mysql.query(sql);
    return result;
  }
  async delMyReply(data){
    let where = {
      answers_critic_id: data.answers_critic_id,
    }
    const res = await this.app.mysql.delete('wx_answers_critic', where);
    let code = 1
    if (res.affectedRows == 0) {
      code = 0
    }
    return { code }
  }
  async getAnswersItem(id) {
    let sqlC = `SELECT AC.answers_critic_content,AC.setTime,U.avatarUrl,U.nickName,U.named FROM wx_answers_critic AC JOIN wx_user U  ON AC.user_id = U.user_id WHERE AC.answers_id =${id};`;
    const result = await this.app.mysql.query(sqlC);
    return {
      data: result,
      total: [...result].length
    };
  }
}
module.exports = DeileService;
