var t = [],
  e = [
    "hljs-tag",
    "hljs-name",
    "hljs-attr",
    "hljs-string",
    "hljs-attribute",
    "hljs-selector-pseudo",
  ],
  n = function (e) {
    e.setAttribute("contentEditable", "true");
    var n = e.closest("section").querySelector("[data-edit]");
    n &&
      (e.addEventListener("keyup", function () {
        var t = e.textContent;
        n.innerHTML = t;
      }),
      t.push(e));
  },
  i = {
    id: "editor",
    init: function (t) {
      t.getRevealElement().addEventListener("click", function (t) {
        var i = t.target;
        if (
          (i.classList.contains("hljs") &&
            null === i.getAttribute("contentEditable") &&
            n(i),
          Array.from(i.classList).some(function (t) {
            return e.includes(t);
          }))
        ) {
          var r = i.closest(".hljs");
          null === r.getAttribute("contentEditable") && n(r);
        }
      });
    },
    destroy: function () {
      t.forEach(function (t) {
        t.removeAttribute("contentEditable"), t.removeEventListener("keyup");
      });
    },
  },
  r = function () {
    return i;
  };
export { r as default };
