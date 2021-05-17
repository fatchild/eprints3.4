/*
 **
 ** Bootstrap styling to lightbox features
 ** To customize css, use lighbox classes not bootstrap classes
 **
 ** */

var jQ = jQuery.noConflict();

jQ(document).ready(function () {

  doc_lightboxStyling();

});

function doc_lightboxStyling() {
  var outerImageContainer = jQ('#outerImageContainer');
  outerImageContainer.addClass('w-100 jumbotron');
  outerImageContainer.find('.ep_form_action_button').addClass('m-2');
  outerImageContainer.find('#format').addClass('m-2');
  outerImageContainer.find('.ep_upload_files').addClass('m-2');
  outerImageContainer.find('.ep_upload_file_table').addClass('table');
}
