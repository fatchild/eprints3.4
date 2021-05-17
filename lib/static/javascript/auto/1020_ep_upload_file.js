/*
 **
 ** Append Bootstrap styling to ep_upload_file
 ** To customize css, use ep_upload_file not bootstrap classes
 **
 ** */

var jQ = jQuery.noConflict();

jQ(document).ready(function () {

  var ep_upload_file_label = jQ('.ep_upload_file_label');
  ep_upload_file_label.addClass('mr-2 text font-weight-bold');

});

function UploadMethod_file_progressStyling () {

  var UploadMethod_file_progress_table = jQ('.UploadMethod_file_progress_table');
  UploadMethod_file_progress_table.addClass('d-table');
  UploadMethod_file_progress_table.children('div').addClass('d-table-row');
  UploadMethod_file_progress_table.children('div').children('div').addClass('d-table-cell p-2');

}
