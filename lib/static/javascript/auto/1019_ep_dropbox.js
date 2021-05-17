/*
 **
 ** Append Bootstrap styling to ep_dropbox
 ** To customize css, use ep_dropbox not bootstrap classes
 **
 ** */

var jQ = jQuery.noConflict();

jQ(document).ready(function () {

  var File_dropbox_help = jQ('[id$=File_dropbox_help]');
  File_dropbox_help.addClass('border border-black alert alert-success p-5 font-weight-bold h4');

});
