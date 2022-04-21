const https = require("https");

const { Service } = require("egg");

class UserService extends Service {
  async getUserInfo(data) {
    const post = await this.app.mysql.get("wx_user", data); // 查询语句，查询用户
    if (!post) { //验证数据库中是否存在当前用户
      const result = await this.app.mysql.insert('wx_user', data);// 添加到数据库
      if (result.affectedRows === 1) {
        const post = await this.app.mysql.get("wx_user", data);// 添加完成后返回
        return post
      }
    }
    return post;//存在当前用户，直接返回
  }
  async getCollect(id) {
    // 根据id查询
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
    // 自定义查询条件
    let where = {
      article_id: data.article_id,
      user_id: data.user_id
    }
    const res = await this.app.mysql.delete('wx_collect', where);
    // let sql = `DELETE C FROM wx_collect C WHERE C.article_id = ${data.article_id} AND C.user_id=${data.user_id}`;
    // const result = await this.app.mysql.query(sql);
    // 定义返回数据格式
    let code = 1
    if (res.affectedRows == 0) {
      code = 0
    }
    return {code}
  }

}

module.exports = UserService;
