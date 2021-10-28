'use strict'
const { Controller } = require("egg")

class DeileController extends Controller{
  async getDeile(){
    const { ctx } = this;
    const data = ctx.query;
    const result = await ctx.service.deile.getDeile(data.id)
    ctx.body = result
  }
 
}

module.exports = DeileController;