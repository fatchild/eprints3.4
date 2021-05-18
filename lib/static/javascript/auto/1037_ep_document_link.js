/*
 *
 * Append Bootstrap styling to ep_document_link
 * To customize css, use ep_document_link not bootstrap classes
 *
 * */

var jQ = jQuery.noConflict();

jQ(document).ready(function () {

  var ep_document_link = jQ('.ep_document_link');
  ep_document_link.siblings('a').addClass('btn btn-primary d-flex justify-content-center mt-2');

});

