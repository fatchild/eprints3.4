/*
 *
 * Append Bootstrap styling to ep_columns_cell 
 * To customize css, use ep_columns_cell not bootstrap classes
 *
 * */

var jQ = jQuery.noConflict();

jQ(document).ready(function () {

  var ep_columns = jQ('.ep_columns');
  ep_columns.addClass('table table-bordered shadow border');

  var ep_columns_cell_archive = jQ('.ep_columns_cell_archive');
  ep_columns_cell_archive.addClass('bg-success');

  var ep_columns_cell_deletion = jQ('.ep_columns_cell_deletion');
  ep_columns_cell_deletion.addClass('bg-secondary');

  var ep_columns_cell_buffer = jQ('.ep_columns_cell_buffer');
  ep_columns_cell_buffer.addClass('bg-warning');

  var ep_columns_cell_inbox = jQ('.ep_columns_cell_inbox');
  ep_columns_cell_inbox.addClass('bg-info');

  var ep_columns_add = jQ('.ep_columns_add');
  ep_columns_add.addClass('jumbotron p-4 m-0 d-flex justify-content-center');

  var header_plain = jQ('.header_plain');
  header_plain.addClass('thead-light');

  var ep_columns_title = jQ('.ep_columns_title');
  ep_columns_title.addClass('p-2');

  var ep_columns_title_inner_div = jQ('.ep_columns_title_inner > div');
  ep_columns_title_inner_div.addClass('d-flex flex-row');

  var ep_columns_title_inner_sort = jQ('.ep_columns_title_inner_sort');
  ep_columns_title_inner_sort.addClass('p-2');

  var ep_columns_alter_inner_div = jQ('.ep_columns_alter_inner > div');
  ep_columns_alter_inner_div.addClass('d-flex flex-row justify-content-around');

  var ep_columns_cell = jQ('.ep_columns_cell');
  ep_columns_cell.find('.ep_name_citation').addClass('text-dark');

});
