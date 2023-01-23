export function DocEdit() {
  GM_registerMenuCommand("开启/关闭网页自由编辑", function () {
    GM_log(GM_getValue("isEdit"));
    if (GM_getValue("isEdit") === "true") {
      document.body.contentEditable = "false";
      GM_setValue("isEdit", "false");
    } else {
      GM_setValue("isEdit", "true");
      document.body.contentEditable = "true";
    }
  });
}
export function ShowPasswd() {
  GM_registerMenuCommand("「显示」网页*号密码", function () {
    for (
      var t = document.getElementsByTagName("input"), e = 0;
      e < t.length;
      e++
    ) {
      "password" === t[e].getAttribute("type") &&
        t[e].setAttribute("type", "text");
    }
  });
}
