'use strict';

$('.thumbnails').on('click','.thumbnail', event => {
  event.preventDefault();
    // take attribute and alt of thumbnail image
    // edit hero class to be thumbnail image
    const imgSrc = $(event.currentTarget).find('img').attr('src');  
    const imgAlt = $(event.currentTarget).find('img').attr('alt');

    $('.hero').find('img').attr('alt',imgAlt);
    $('.hero').find('img').attr('src',imgSrc);
    // console.log($('.hero').attr('alt'));

  console.log($(event.currentTarget).find('img'));
});