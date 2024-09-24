(() => {
  function main() {
    document.addEventListener("click", function (event) {
      const target = event.target;
      // 判断当前元素 或者父元素是否存在 <a> 标签，并且 href 存在
      const tag = findParentTag(target, "A");
      tag && console.log("🚀 ~ tag:", tag);

      if (tag) {
        event.preventDefault();

        const href = tag.getAttribute("href");
        console.log("拦截的链接: ", href);
        // window.location.href = href; // 如果你仍想让它跳转，可以手动处理
      }
    });

    function findParentTag(target, tag) {
      if (target.tagName === tag && target.href) {
        return target;
      }

      if (target.parentNode) {
        return findParentTag(target.parentNode);
      }
    }

    window.open = function (...args) {
      console.log(args[0]);
      return true;
    };
  }

  function loadScript(url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";

    // 当脚本加载完成后执行回调函数
    script.onload = function () {
      if (callback) callback();
    };

    // 设置脚本的 src 属性为要加载的外部 JS 文件
    script.src = url;

    // 将脚本插入到页面的 <head> 或 <body> 中
    document.head.appendChild(script);
  }

  window.onload = function () {
    main();
  };
})();
