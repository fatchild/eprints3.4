/*
 *
 * Append Bootstrap styling to ep_form_action_button
 * To customize css, use ep_form_action_button not bootstrap classes
 *
 * */

var jQ = jQuery.noConflict();

jQ(document).ready(function () {

  ep_form_action_buttonStyling();

});

function ep_form_action_buttonStyling (){
  var ep_form_action_button = jQ('.ep_form_action_button');
  ep_form_action_button.addClass('btn btn-primary');
};
