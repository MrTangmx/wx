'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
  
    ctx.body = ctx.query;
  }

  
  async list() {
    const { ctx } = this;
    const data = ctx.request.body
    console.log(data);
    const result = await ctx.service.home.list(data)
    ctx.body = result
  }
}

module.exports = HomeController;
