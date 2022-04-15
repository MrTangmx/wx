/*
 * @Author: Mr Tang
 * @Date: 2022-03-23 10:43:09
 * @LastEditors: Mr Tang
 * @LastEditTime: 2022-04-14 23:50:44
 * @FilePath: \hmie:\wx-forum\server\app\controller\deile.js
 * @Description: 
 * 
 * Copyright (c) 2022 Mr Tang
 */
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
  async getPersonalAnswers(){
    const { ctx } = this;
    const data = ctx.query;
    const result = await ctx.service.deile.getPersonalAnswers(data)
    ctx.body = result
  }
  async delPersonalAnswers(){
    const { ctx } = this;
    const data = ctx.query;
    const result = await ctx.service.deile.delPersonalAnswers(data)
    ctx.body = result
  }
  async getAnswersItem(){
    const { ctx } = this;
    const data = ctx.query;
    const result = await ctx.service.deile.getAnswersItem(data.id)
    ctx.body = result
  }
  async getMyReply(){
    const { ctx } = this;
    const data = ctx.query;
    const result = await ctx.service.deile.getMyReply(data)
    ctx.body = result
  }
  async delMyReply(){
    const { ctx } = this;
    const data = ctx.query;
    const result = await ctx.service.deile.delMyReply(data)
    ctx.body = result
  }
  
  
}

module.exports = DeileController;