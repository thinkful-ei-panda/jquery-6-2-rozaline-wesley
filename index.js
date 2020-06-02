"use strict";



function caroselEngine() {
  $(".thumbnails").on("click", ".thumbnail", event => {
    const thumbSrc = $(event.currentTarget).find("img").attr("src");
    $(".hero img").attr("src", thumbSrc);
    const thumbAlt = $(event.currentTarget).find("img").attr("alt");
    $(".hero img").attr("alt", thumbAlt);
  });
}

$(caroselEngine);

