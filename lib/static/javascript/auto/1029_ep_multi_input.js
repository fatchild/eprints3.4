/*
 *
 * Append Bootstrap styling to ep_multi_input
 * To customize css, use ep_multi_input not bootstrap classes
 *
 * */

var jQ = jQuery.noConflict();

jQ(document).ready(function () {

  var ep_form_input_grid = jQ('.ep_form_input_grid');
  ep_form_input_grid.addClass('d-table');
  ep_form_input_grid.children('div').addClass('d-table-row');
  ep_form_input_grid.children('div').children('div').addClass('d-table-cell');
  

});

