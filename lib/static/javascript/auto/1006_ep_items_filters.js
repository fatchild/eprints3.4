/*
 *
 * Append Bootstrap styling to ep_items_filters
 * To customize css, use ep_items_filters not bootstrap classes
 *
 * */

var jQ = jQuery.noConflict();

jQ(document).ready(function () {

  var ep_items_filters = jQ('.ep_items_filters');
  ep_items_filters.addClass('d-flex justify-content-around p-3');

});
