/*
 **
 ** Append Bootstrap styling to ep_search_controls & ep_search_controls_bottom
 ** To customize css, use ep_search_controls & ep_search_controls_bottom not bootstrap classes
 **
 ** */

var jQ = jQuery.noConflict();

jQ(document).ready(function () {

  var ep_search_controls = jQ('.ep_search_controls');
  ep_search_controls.addClass('text-center p-3');

  var ep_search_controls_bottom = jQ('.ep_search_controls_bottom');
  ep_search_controls_bottom.addClass('text-center p-3'); 

});
