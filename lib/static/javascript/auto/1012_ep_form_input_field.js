/*
 **
 ** Append Bootstrap styling to ep_form_field_input
 ** To customize css, use ep_form_field_input not bootstrap classes
 **
 ** */

var jQ = jQuery.noConflict();

jQ(document).ready(function () {

  var ep_form_field_input = jQ('.ep_form_field_input');
  ep_form_field_input.addClass('p-3');

});
