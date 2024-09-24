(window.onload = function () {
  /**
   * 监听点击事件 拦截A标签
   */
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
});
