/*
 *
 * Append Bootstrap styling to ep_subjectinput_tree
 * To customize css, use ep_subjectinput_tree not bootstrap classes
 *
 * */

var jQ = jQuery.noConflict();

jQ(document).ready(function () {
  
  var ep_subjectinput_add_button = jQ('.ep_subjectinput_add_button');
  ep_subjectinput_add_button.addClass('btn btn-sm btn-outline-success');

  var ep_subjectinput_remove_button = jQ('.ep_subjectinput_remove_button');
  ep_subjectinput_remove_button.addClass('btn btn-sm btn-outline-danger');

  var ep_subjectinput_selections = jQ('.ep_subjectinput_selections');
  ep_subjectinput_selections.children('div').addClass('d-flex justify-content-left');

  var ep_subjectinput_selected_remove = jQ('.ep_subjectinput_selected_remove');
  ep_subjectinput_selected_remove.addClass('p-1');

  var ep_subjectinput_selections = jQ('.ep_subjectinput_selections');
  ep_subjectinput_selections.addClass('mb-3 mx-5 pb-2 border-bottom');

  var ep_subjectinput_searchbar = jQ('.ep_subjectinput_searchbar');
  ep_subjectinput_searchbar.addClass('text-center');

  var ep_subjectinput_tree = jQ('.ep_subjectinput_tree dl dt.ep_subjectinput_tree');
  ep_subjectinput_tree.find('a').addClass('ml-3 text-decoration-none text-dark p-1');
  ep_subjectinput_tree.css({'background-position': 'left center'}); 

  var ep_subjectinput_selected = jQ('.ep_subjectinput_selected');
  ep_subjectinput_selected.addClass('pl-5 font-weight-bold');

  var ep_subjectinput_selected_dt = jQ('.ep_subjectinput_tree dt');
  ep_subjectinput_selected_dt.addClass('font-weight-normal');

});

