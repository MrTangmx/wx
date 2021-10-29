'use strict'
const { Controller } = require("egg")

class DeileController extends Controller{
  async getDeile(){
    const { ctx } = this;
    const data = ctx.query;
    const result = await ctx.service.deile.getDeile(data.id)
    ctx.body = result
  }
  async getAnswers(){
    const { ctx } = this;
    const data = ctx.query;
    const result = await ctx.service.deile.getAnswers(data.page-1,data.size)
    ctx.body = result
  }
  async getAnswersItem(){
    const { ctx } = this;
    const data = ctx.query;
    const result = await ctx.service.deile.getAnswersItem(data.id)
    ctx.body = result
  }
  getAnswersItem
  
}

module.exports = DeileController;