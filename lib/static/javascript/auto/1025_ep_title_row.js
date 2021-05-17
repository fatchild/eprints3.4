/*
 *
 * Append Bootstrap styling to ep_title_row
 * To customize css, use ep_title_row not bootstrap classes
 *
 * */

var jQ = jQuery.noConflict();

jQ(document).ready(function () {

  var ep_title_row = jQ('.ep_title_row');
  ep_title_row.addClass('bg-light');
  ep_title_row.parents('table').addClass('table table-bordered');

  var ep_title_row_inner = jQ('.ep_title_row_inner');
  ep_title_row_inner.children('div').addClass('d-flex justify-content-between w-100');
  ep_title_row.children('th.ep_row:first-child').addClass('text-right');

});

