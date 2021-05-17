/*
 *
 * Append Bootstrap styling to ep_action_list
 * To customize css, use ep_action_list not bootstrap classes
 *
 * */

var jQ = jQuery.noConflict();

jQ(document).ready(function () {

  var ep_action_list = jQ('.ep_action_list');
  ep_action_list.find('.ep_form_action_button').addClass('w-100');
  ep_action_list.find('dd').addClass('border-bottom mt-0 pl-1');  

});

