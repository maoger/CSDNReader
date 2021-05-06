// ==UserScript==
// @name         CSDNReader
// @icon         https://g.csdnimg.cn/static/logo/favicon32.ico
// @homepage     https://github.com/maoger/CSDNReader
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  CSDN纯净阅读模式
// @author       Maoger
// @match        http*://blog.csdn.net/*
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js
// @updateURL    https://openuserjs.org/meta/maoger/CSDNReader.meta.js
// @copyright    2021-2021, maoger (https://openuserjs.org/users/maoger)
// @license      MIT
// ==/UserScript==

(function () {
  'use strict';

  // 1. 删除
  $(".pulllog-box").remove(); // 登录框
  $('#csdn-toolbar').remove(); // 顶部：导航栏
  $('.blog_container_aside').remove(); // 左侧：导航栏
  $('.recommend-right').remove();
  $('.csdn-side-toolbar ').remove();  // 浮动按钮：回到顶部
  $('.more-toolbox').remove();  // 底部：一键三连
  $('.comment-box').remove();  // 底部：评论
  $('.recommend-box').remove(); // 底部：推荐1
  $('.recommend-tit-mod').remove(); // 底部：推荐2
  $('.csdn-shop-window-common').remove(); // 底部：空白行
  $('.template-box').remove(); // 脚注1
  $('.blog-footer-bottom').remove(); // 脚注2

  // 2. 调整宽度
  $('.container main').width("100%");

})();
  