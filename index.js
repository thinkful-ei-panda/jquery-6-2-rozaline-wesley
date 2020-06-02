'use strict';

$('.thumbnails').on('click','.thumbnail', event => {
  event.preventDefault();
    // take attribute and alt of thumbnail image
    // edit hero class to be thumbnail image
    // $('.hero').attr('src',$(event).attr('src'));
    $('.hero').attr('alt','bloop');
    // console.log(event);

//   console.log('delete button clicked');
});