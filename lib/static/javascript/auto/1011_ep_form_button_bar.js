/*
 **
 ** Append Bootstrap styling to ep_form_button_bar
 ** To customize css, use ep_form_button_bar not bootstrap classes
 **
 ** */

var jQ = jQuery.noConflict();

jQ(document).ready(function () {

  var ep_form_button_bar = jQ('.ep_form_button_bar');
  ep_form_button_bar.addClass('d-flex justify-content-center m-3 jumbotron p-4');

  var ep_form_button_bar_button = jQ('.ep_form_button_bar > .ep_form_action_button');
  ep_form_button_bar_button.addClass('mx-2');

});
