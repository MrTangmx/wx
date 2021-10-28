"use strict";
const { Service } = require("egg");

class DeileService extends Service {
  async getDeile(id) {
    let sql = `SELECT * FROM wx_article A, wx_user U where A.user_id = U.user_id and A.article_id=${id}`;
    const post = await this.app.mysql.query(sql);
    console.log(post[0].user_id);
    let sqlC = `SELECT  * FROM wx_forum .wx_critic where article_id=${post[0].article_id};`;
    const result = await this.app.mysql.query(sqlC);

    for (let i = 0; i < result.lenght; i++) {
      let sqlC = `SELECT  * FROM wx_forum .wx_user where user_id=${result[i].user_id};`;
      const a = await this.app.mysql.query(sqlC);
      result[i].downCcritic = a;
    }

    post[0].critic = result;
    console.log(post[0]);
    return post[0];
  }
}

module.exports = DeileService;
