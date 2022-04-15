const { Controller } = require("egg");

class ProductController extends Controller{
  async getProduct(){
    const { ctx } = this;
    const id = ctx.query;
    const result = await ctx.service.product.getProduct(id.id)
    ctx.body = groupByType(result,'typeName')
  }
  async getProductList(){
    const { ctx } = this;
    const id = ctx.query;
    const result = await ctx.service.product.getProductList(id.id)
    ctx.body = result
  }
  async getDeilePage(){
    const { ctx } = this;
    const id = ctx.query;
    const result = await ctx.service.product.getDeilePage(id.id)
    ctx.body = result
  }
  async releaseData(){
    const { ctx } = this;
    const data = ctx.request.body;
    const result = await ctx.service.product.releaseData(data)
    ctx.body = result
  }
  async releaseReply(){
    const { ctx } = this;
    const data = ctx.request.body;
    const result = await ctx.service.product.releaseReply(data)
    ctx.body = result
  }
  async addComments(){
    const { ctx } = this;
    const data = ctx.request.body;
    const result = await ctx.service.product.addComments(data)
    ctx.body = result
  }
  async writeAnswer(){
    const { ctx } = this;
    const data = ctx.request.body;
    const result = await ctx.service.product.writeAnswer(data)
    ctx.body = result
  }
  async writeAnswerPro(){
    const { ctx } = this;
    const data = ctx.request.body;
    const result = await ctx.service.product.writeAnswerPro(data)
    ctx.body = result
  }

  async bindCollect(){
    const { ctx } = this;
    const data = ctx.request.body;
    const result = await ctx.service.product.bindCollect(data)
    ctx.body = result
  }
  
  
  
  
  
  
}






function  groupByType(arr,param) {
  var map = {},
      dest = [];
  for(var i = 0; i < arr.length; i++){
      var ai = arr[i];
      if(ai[param] && !map[ai[param]]){
          dest.push({
              name: ai[param],
              data: [ai]
          });
          map[ai[param]] = ai;
      }else{
          for(var j = 0; j < dest.length; j++){
              var dj = dest[j];
              if(dj.name == ai[param]){
                  dj.data.push(ai);
                  break;
              }
          }
      }
  }
  return dest;
}
module.exports = ProductController;