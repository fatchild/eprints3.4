/*
 *
 * Append Bootstrap styling to UploadMethod_file_container
 * To customize css, use UploadMethod_file_container not bootstrap classes
 *
 * */

var jQ = jQuery.noConflict();

jQ(document).ready(function () {

  var UploadMethod_file_container = jQ('.UploadMethod_file_container');
  UploadMethod_file_container.addClass('text-center pl-5');

});

