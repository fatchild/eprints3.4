/*
 *
 * Append Bootstrap styling to ep_eprint_title
 * To customize css, use ep_eprint_title not bootstrap classes
 *
 * */

var jQ = jQuery.noConflict();

jQ(document).ready(function () {

  var ep_eprint_title = jQ('.ep_eprint_title');
  ep_eprint_title.addClass('w-100');

});
