/*

Append Bootstrap styling to ep_tm_key_tools
To customize css use ep_tm_key_tools not bootstrap classes

*/

var jQ = jQuery.noConflict();

jQ(document).ready(function () {

  // Key tools menu styling
  var ep_tm_key_tools = jQ('.ep_tm_key_tools')
  ep_tm_key_tools.addClass('nav bg-light py-0');

  // Add class to children
  ep_tm_key_tools.children("li").addClass('nav-item');
  ep_tm_key_tools.children("li").children("a").addClass('nav-link pl-0 pr-4');
	
  var first_li = ep_tm_key_tools.children("li:first-child");
  if ( first_li.text().includes("Logged in as") ) {
    first_li.addClass('nav-link pl-0');
  }

});
