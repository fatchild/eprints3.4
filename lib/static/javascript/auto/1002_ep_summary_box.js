/*
 *
 * Append Bootstrap styling to ep_summary_box
 * To customize css, use ep_summary_box not bootstrap classes
 *
 * */

var jQ = jQuery.noConflict();

jQ(document).ready(function () {

  var ep_summary_box_title = jQ('.ep_summary_box_title');
  ep_summary_box_title.addClass('card card-header');
  ep_summary_box_title.attr('data-toggle', 'collapse');
  ep_summary_box_title.attr('data-target', '#helpbox');

  var ep_summary_box_body = jQ('.ep_summary_box_body');
  ep_summary_box_body.addClass('collapse border p-3');
  ep_summary_box_body.attr('id', 'helpbox');
  ep_summary_box_body.css('display', ''); 

});
