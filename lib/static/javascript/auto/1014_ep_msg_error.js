/*
 **
 ** Append Bootstrap styling to ep_msg_error
 ** To customize css, use ep_msg_error not bootstrap classes
 **
 ** */

var jQ = jQuery.noConflict();

jQ(document).ready(function () {

  var ep_msg_error = jQ('.ep_msg_error');
  ep_msg_error.addClass('alert alert-danger border shadow mb-4');

  var ep_msg_error_icon = jQ('.ep_msg_error_icon');
  ep_msg_error_icon.children('img').css('height', '40px');
  ep_msg_error_icon.addClass('p-3');

  var ep_msg_error_content = jQ('.ep_msg_error_content');
  ep_msg_error_content.addClass('d-flex justify-content-start');

  var ep_msg_error_text = jQ('.ep_msg_error_text');
  ep_msg_error_text.addClass('p-3');

});
