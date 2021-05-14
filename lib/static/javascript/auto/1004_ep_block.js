/*
 *
 * Append Bootstrap styling to ep_block
 * To customize css, use ep_block not bootstrap classes
 *
 * */

var jQ = jQuery.noConflict();

jQ(document).ready(function () {

  var ep_block = jQ('.ep_block');
  ep_block.addClass('p-4 d-flex justify-content-center');

});
