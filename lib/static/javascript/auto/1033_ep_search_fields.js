/*
 *
 * Append Bootstrap styling to ep_search_fields
 * To customize css, use ep_search_fields not bootstrap classes
 *
 * */

var jQ = jQuery.noConflict();

jQ(document).ready(function () {

  var ep_search_fields = jQ('.ep_search_fields');
  ep_search_fields.addClass('d-table font-weight-bold w-100 table bg-light border card shadow p-1');
  ep_search_fields.children('.ep_table_row').addClass('d-table-row');
  ep_search_fields.siblings('.ep_search_buttons').addClass('d-flex justify-content-center p-3');

});

