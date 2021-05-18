/*
 **
 ** Append Bootstrap styling to ep_msg_warning
 ** To customize css, use ep_msg_warning not bootstrap classes
 **
 ** */

var jQ = jQuery.noConflict();

jQ(document).ready(function () {

  ep_message_warningStyling();

});

function ep_message_warningStyling () {
  var ep_msg_warning = jQ('.ep_msg_warning');
  ep_msg_warning.addClass('alert alert-warning border shadow mb-4');

  var ep_msg_warning_icon = jQ('.ep_msg_warning_icon');
  ep_msg_warning_icon.children('img').css('height', '40px');
  ep_msg_warning_icon.addClass('p-3');

  var ep_msg_warning_content = jQ('.ep_msg_warning_content');
  ep_msg_warning_content.addClass('d-flex justify-content-start');

  var ep_msg_warning_text = jQ('.ep_msg_warning_text');
  ep_msg_warning_text.addClass('p-3');

  var ep_drop_target = jQ('.ep_drop_target');
  ep_drop_target.find('ul').addClass('border border-dark card bg-light shadow');
}


