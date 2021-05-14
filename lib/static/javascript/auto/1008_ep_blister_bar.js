/*
 **
 ** Append Bootstrap styling to ep_blister_bar
 ** To customize css, use ep_blister_bar not bootstrap classes
 **
 ** */

var jQ = jQuery.noConflict();

jQ(document).ready(function () {

  var ep_blister_bar = jQ('.ep_blister_bar');
  ep_blister_bar.addClass('mb-5');
  ep_blister_bar.children("div").addClass('d-flex justify-content-center');

  var ep_blister_node = jQ('.ep_blister_node');
  ep_blister_node.addClass('btn btn-light border shadow');

  var ep_blister_node_selected = jQ('.ep_blister_node_selected');
  ep_blister_node_selected.addClass('btn btn-primary border shadow');

  var ep_blister_join = jQ('.ep_blister_join');
  ep_blister_join.css({'background-image': 'url(../../style/images/blister_arrow.png)', 'background-repeat': 'no-repeat', 'background-position': 'center center'});
  ep_blister_join.addClass('p-3');

});
