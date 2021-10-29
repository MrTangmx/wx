const { Service } = require("egg");

class ProductService extends Service{
  async getProduct(id){
    let sql = `SELECT * FROM wx_product where classify=${id}`;
    const post = await this.app.mysql.query(sql);
    return post
  }
  async getProductList(id){
    let sql = `SELECT * FROM wx_product_item where classify=${id}`;
    const post = await this.app.mysql.query(sql);
    return post
  }
  async getDeilePage(id){
    const post = await this.app.mysql.get('wx_product_item', { pro_id: id });

    let sqlC = `SELECT P.content_prodict, P.setTime, U.nickName, U.avatarUrl,U.named FROM wx_product_critic P  JOIN wx_user U  ON P.user_id = U.user_id WHERE P.pro_id =${post.pro_id}`;
    const det = await this.app.mysql.query(sqlC);

    post.content_prodict = det
    return post
  }
}
module.exports = ProductService;
