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