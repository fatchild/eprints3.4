/*
 *
 * Append Bootstrap styling to the new item button
 * To customize css, use ep_form_action_button not bootstrap classes
 *
 * */

var jQ = jQuery.noConflict();

jQ(document).ready(function () {

  var ep_newItem = jQ('[value="New Item"]');
  ep_newItem.closest('.ep_block').addClass('p-4 d-flex justify-content-center'); 

});

