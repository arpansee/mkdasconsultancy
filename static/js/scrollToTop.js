"use strict";
setTimeout(function () {
    var o = $(
            '\n    <i class="big arrow circle up link icon dream-scroll-to-top'.concat(
                "y" === window.isDark ? " " + window.dark : "",
                '" style="display: none;"></i>\n  '
            )
        ),
        n = window.overlayScrollbarsInstance;
    n.options("callbacks.onScrollStop", function () {
        0 < this.scroll().position.y ? o.show(500) : o.hide(500);
    }),
        o.click(function () {
            n.scroll(0, 500);
        }),
        o.insertAfter(".os-content");
}, 1e3);
