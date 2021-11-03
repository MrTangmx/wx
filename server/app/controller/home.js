'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = "hi server";
  }

  
  async List() {
    const { ctx } = this;
    const data = ctx.query;
    const result = await ctx.service.home.List(data)
    ctx.body = result
  }

  async hotList(){
    const { ctx } = this;
    const result = await ctx.service.home.hotList()
    ctx.body = result
  }
  async search(){
    const { ctx } = this;
    const id = ctx.query;
    const result = await ctx.service.home.search(id)
    ctx.body=result
  }
  async indexList(){
    const { ctx } = this;
    const data = ctx.query;
    const result = await ctx.service.home.indexList(data)
    ctx.body=result
  }
  async swiper(){
    const { ctx } = this;
    const data = ctx.query;
    const result = await ctx.service.home.swiper(data)
    ctx.body=result
  }

}

module.exports = HomeController;
