/*
 **
 ** Append Bootstrap styling to ep_update_doc_options
 ** To customize css, use ep_update_doc_options not bootstrap classes
 **
 ** */

var jQ = jQuery.noConflict();

jQ(document).ready(function () {

  var ep_update_doc_options = jQ('.ep_update_doc_options');
  
  optionsToggle();

});

function optionsToggle(){

  var ep_upload_doc_content_hidden = jQ('.ep_upload_doc_content:hidden');
  ep_upload_doc_content_hidden.siblings('.ep_upload_doc_expansion_bar').find('[id$=_opts_hide]').hide();

  var ep_upload_doc_content_visible = jQ('.ep_upload_doc_content:visible');
  ep_upload_doc_content_visible.siblings('.ep_upload_doc_expansion_bar').find('[id$=_opts_show]').hide();

  var ep_sr_hide_help = jQ('.ep_sr_hide_help');
  ep_sr_hide_help.hide();
}

