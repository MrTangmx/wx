/*
 * @Author: Mr Tang
 * @Date: 2022-03-23 10:43:09
 * @LastEditors: Mr Tang
 * @LastEditTime: 2022-04-12 23:07:43
 * @FilePath: \hmie:\wx-forum\server\app\controller\user.js
 * @Description: 
 * 
 * Copyright (c) 2022 Mr Tang
 */
"use strict";


const Controller = require("egg").Controller;

class UserController extends Controller {
  async login() {
    const { ctx } = this;
    const res = ctx.query;
    const result = await ctx.service.user.getUserInfo(res)
    ctx.body = result
  }
  async getCollect() {
    const { ctx } = this;
    const data = ctx.query;
    const result = await ctx.service.user.getCollect(data.user_id)
    ctx.body = result;
  }
  async delCollect() {
    const { ctx } = this;
    const data = ctx.query;
    const result = await ctx.service.user.delCollect(data)
    console.log(result);
    ctx.body = result;
  }

  async updatePersonal() {
    const { ctx } = this;
    const data = ctx.request.body;
    ctx.body = data;
  }
  async getMsgCode() {
    const { ctx } = this;
    //get请求拿到id
    const test = ctx.query;
    console.log(ctx.session);
    ctx.body = {id:ctx.session.uid}
  }
}

module.exports = UserController;
