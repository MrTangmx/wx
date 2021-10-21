var Mock = require("./WxMock.js");
//请求文章列表
var article = Mock.mock('https://www.baidu.com/getArticle', "GET", {
  "code": 666,
  "successText": "成功返回",
  "content": [
    { "id": 1001, "name": "文章标题", "content": "文章内容" },
    { "id": 1002, "name": "文章标题222", "content": "文章内容222" }
  ]
})
export default {
  article
}