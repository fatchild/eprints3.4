/*
 *
 * Append Bootstrap styling to url_upload_button
 * To customize css, use url_upload_button not bootstrap classes
 *
 * */

var jQ = jQuery.noConflict();

jQ(document).ready(function () {

  var url_upload_button = jQ("[name='_internal_c1_Screen::EPrint::UploadMethod::URL_add_format']");
  url_upload_button.removeClass('d-none').addClass('btn btn-primary');

});

