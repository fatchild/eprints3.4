/*
 *
 * Append Bootstrap styling to ep_summary_box
 * To customize css, use ep_summary_box not bootstrap classes
 *
 * */

var jQ = jQuery.noConflict();

jQ(document).ready(function () {

  var ep_summary_box_title = jQ('.ep_summary_box_title');
  ep_summary_box_title.each(function(index) {
    jQ(this).addClass('card card-header');
    jQ(this).attr('data-toggle', 'collapse');
    jQ(this).attr('data-target', '#helpbox_' + index);
  });

  var ep_summary_box_body = jQ('.ep_summary_box_body');
  ep_summary_box_body.each(function(index) {
    jQ(this).addClass('collapse border p-3');
    jQ(this).attr('id', 'helpbox_' + index);
    jQ(this).css('display', ''); 
  });

});
