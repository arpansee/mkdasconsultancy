"use strict";
$(document).ready(function () {
    var a = $("body")
        .overlayScrollbars({
            className: (
                window.backgroundDark || window.backgroundImageDark
                    ? "y" === localStore.getItem("hugo-theme-dream-is-dark")
                    : window.darkNav
            )
                ? "os-theme-light"
                : "os-theme-dark",
            scrollbars: { autoHide: "scroll", clickScrolling: !0 },
        })
        .overlayScrollbars();
    if (window.fixedNav) {
        var e = $(".dream-nav");
        a.options("callbacks.onScroll", function () {
            var a = this.scroll().position.y,
                o = $(".fake-dream-nav");
            0 < a
                ? (e
                      .addClass("fixed")
                      .css(
                          "background",
                          "y" === window.isDark
                              ? window.backgroundDark
                              : window.background
                      ),
                  $(".dream-single-aside").css("top", 54),
                  o.length ||
                      $('<div class="fake-dream-nav" />')
                          .css("height", 54)
                          .insertBefore(e))
                : (e.removeClass("fixed").css("background", "unset"),
                  $(".dream-single-aside").css("top", 0),
                  o.remove());
        });
    }
    (window.overlayScrollbarsInstance = a),
        $(".dream-flip-toggle").click(function () {
            $(".flip-container").toggleClass("flip-it");
        });
});
