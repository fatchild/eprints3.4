/*
 **
 ** Append Bootstrap styling to ep_msg_message
 ** To customize css, use ep_msg_message not bootstrap classes
 **
 ** */

var jQ = jQuery.noConflict();

jQ(document).ready(function () {

    ep_msg_messageStyling();

});

function ep_msg_messageStyling() {
    var ep_msg_message = jQ('.ep_msg_message');
    ep_msg_message.addClass('alert alert-warning border shadow mb-4');

    var ep_msg_message_icon = jQ('.ep_msg_message_icon');
    ep_msg_message_icon.children('img').css('height', '40px');
    ep_msg_message_icon.addClass('p-3');

    var ep_msg_message_content = jQ('.ep_msg_message_content');
    ep_msg_message_content.addClass('d-flex justify-content-start');

    var ep_msg_message_text = jQ('.ep_msg_message_text');
    ep_msg_message_text.addClass('p-3');
}
