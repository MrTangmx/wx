const https = require("https");

const { Service } = require("egg");

class UserService extends Service {
  async getUserInfo(data) {

    const post = await this.app.mysql.get("wx_user", data);
    if (!post) {
      const result = await this.app.mysql.insert('wx_user', data); 
      if (result.affectedRows===1) {
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
  
}

module.exports = UserService;
