"use strict";
$(document).ready(function () {
    var e;
    (e = $(".dream-grid").masonry({ itemSelector: ".dream-column" }))
        .imagesLoaded()
        .progress(function () {
            return e.masonry("layout");
        }),
        window.hasTwitterEmbed &&
            window.twttr.ready(function (r) {
                return r.events.bind("loaded", function () {
                    return e.masonry("layout");
                });
            });
});
