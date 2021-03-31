/*

Append Bootstrap styling to ep_tm_title
To customize css use ep_tm_title not bootstrap classes

*/

var jQ = jQuery.noConflict();

jQ(document).ready(function () {

  // Key tools menu styling
  var ep_tm_title = jQ('.ep_tm_title')
  var ep_tm_pagetitle = jQ('.ep_tm_pagetitle');


  if ( ep_tm_pagetitle.text().includes("Welcome") ) {
    ep_tm_title.children("img").css("height","340px");
  }

});
