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
    let criticContent = [];
    let sqlC = `SELECT * FROM wx_answers A LEFT JOIN wx_user U ON A.user_id = U.user_id LIMIT ${
      page * size
    },${size}`;
    const result = await this.app.mysql.query(sqlC);
    return result;
  }
  async getAnswersItem(id) {
    let sqlC = `SELECT AC.answers_critic_content,AC.setTime,U.avatarUrl,U.nickName,U.named FROM wx_answers_critic AC JOIN wx_user U  ON AC.user_id = U.user_id WHERE AC.answers_id =${id};`;
    const result = await this.app.mysql.query(sqlC);
    return result;
  }
}
module.exports = DeileService;
