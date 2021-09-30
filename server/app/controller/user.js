'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async updatePersonal(){
    const {ctx} = this;
    const data = ctx.request.body
    ctx.body = data
  }
  async getMsgCode(){
    const {ctx} = this;
    //get请求拿到id
    const test = ctx.query;
    ctx.body = test;
  }
}

module.exports = UserController;
