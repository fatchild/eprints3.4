/*
 *
 * Append Bootstrap styling to ep_form_internal_button
 * To customize css, use ep_form_internal_button not bootstrap classes
 *
 * */

var jQ = jQuery.noConflict();

jQ(document).ready(function () {

  var ep_form_internal_button = jQ('.UploadMethod_file_container > .ep_form_internal_button');
  ep_form_internal_button.addClass('d-none');

});

