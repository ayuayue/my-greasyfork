
// ==UserScript==
// @name                 Quick-Tools
// @namespace            https://gitee.com/caoayu/my-greasyfork
// @version              0.2
// @author               caoayu
// @description          some web tools.
// @icon                  https://www.google.com/s2/favicons?sz=64&domain=userscript.net
// @include              *
// @run-at               document-end
// @require              https://code.jquery.com/jquery-3.6.0.min.js
// @homepageURL          https://immersive-translate.owenyoung.com/
// @supportURL            https://github.com/immersive-translate/immersive-translate/
// @match                *://*/*
// @downloadURL          https://gitee.com/caoayu/my-greasyfork/raw/master/tools.js
// @updateURL            https://gitee.com/caoayu/my-greasyfork/raw/master/tools.js
// @inject-into          content
// @license              AGPL-3.0-or-later
// @name:zh-CN           网页助手
// @description:zh-CN    网页自由编辑、密码显示等。
// @grant                GM_setValue
// @grant                GM_getValue
// @grant                GM_unregisterMenuCommand
// @grant                GM_registerMenuCommand
// @grant                unsafeWindow
// ==/UserScript==
(function () {
  'use strict';

  function DocEdit() {
    GM_registerMenuCommand("开启/关闭网页自由编辑", function () {
      if (GM_getValue("isEdit") === "true") {
        document.body.contentEditable = "false";
        GM_setValue("isEdit", "false");
      } else {
        GM_setValue("isEdit", "true");
        document.body.contentEditable = "true";
      }
    });
  }
  function ShowPasswd() {
    GM_registerMenuCommand("显示网页*号密码", function () {
      for (var t = document.getElementsByTagName("input"), e = 0; e < t.length; e++) {
        "password" === t[e].getAttribute("type") && t[e].setAttribute("type", "text");
      }
    });
  }

  DocEdit();
  ShowPasswd();

})();
