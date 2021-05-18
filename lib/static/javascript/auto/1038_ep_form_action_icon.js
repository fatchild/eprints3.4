/*
 *
 * Append Bootstrap styling to ep_form_action_icon
 * To customize css, use ep_form_action_icon not bootstrap classes
 *
 * */

var jQ = jQuery.noConflict();

jQ(document).ready(function () {

  var ep_form_action_icon = jQ('.ep_form_action_icon');
  ep_form_action_icon.css('height', '38px');

});

