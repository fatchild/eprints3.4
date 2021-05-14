/*
 *
 * Append Bootstrap styling to ep_import_bark
 * To customize css, use ep_import_bar not bootstrap classes
 *
 * */

var jQ = jQuery.noConflict();

jQ(document).ready(function () {

  var ep_import_bar = jQ('.ep_import_bar');
  ep_import_bar.addClass('jumbotron p-4 m-0');

});
