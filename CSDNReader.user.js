// ==UserScript==
// @name         CSDNReader
// @icon         https://blog.csdn.net/favicon.ico
// @homepage     https://github.com/maoger/CSDNReader
// @version      0.1.1
// @description  CSDN纯净阅读模式
// @author       Maoger
// @match        http*://blog.csdn.net/*
// @updateURL    https://openuserjs.org/meta/maoger/CSDNReader.meta.js
// @downloadURL  https://openuserjs.org/install/maoger/CSDNReader.user.js
// @copyright    2021-2022, maoger (https://openuserjs.org/users/maoger)
// @license      MIT
// ==/UserScript==

var locationHref = window.location.href;
if (locationHref.indexOf('blog.csdn.net') >= 0){
    setTimeout(function(){
        CSDN_removeDom_Main();
    }, 500)
}
function CSDN_removeDom_Main() {
    CSDN_removeDom_Single('.pulllog-box');
    CSDN_removeDom_Single('#csdn-toolbar');
    CSDN_removeDom_Single('#blogColumnPayAdvert');
    let myDoms = document.querySelectorAll('aside.blog_container_aside > div.aside-box');
    for (let i = 0; i < myDoms.length; i++) {
        let myDom = myDoms[i];
        if (myDom.getAttribute('id') != 'asidedirectory') {
            myDom.parentNode.removeChild(myDom);
        }
    }
    CSDN_removeDom_Single('#rightAside');
    CSDN_removeDom_Single('.csdn-side-toolbar ');
    CSDN_removeDom_Single('.more-toolbox-new');
    CSDN_removeDom_Single('.second-recommend-box.recommend-box');
    CSDN_removeDom_Single('.recommend-box.insert-baidu-box');
    CSDN_removeDom_Single('.template-box');
    CSDN_removeDom_Single('.blog-footer-bottom');
}
function CSDN_removeDom_Single(mycss) {
    var myDom = document.querySelector(mycss);
    if(myDom){myDom.parentNode.removeChild(myDom);};
}
