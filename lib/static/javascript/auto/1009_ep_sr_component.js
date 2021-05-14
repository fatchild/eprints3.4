
/*
 **
 ** Append Bootstrap styling to ep_sr_component
 ** To customize css, use ep_sr_component not bootstrap classes
 **
 ** */

var jQ = jQuery.noConflict();

jQ(document).ready(function () {

  var ep_sr_component = jQ('.ep_sr_component');
  ep_sr_component.addClass('card border-dark shadow');

  var ep_sr_title_bar = jQ('.ep_sr_title_bar');
  ep_sr_title_bar.addClass('card-title border-bottom p-3');

  var ep_sr_content = jQ('.ep_sr_content');
  ep_sr_content.addClass('p-3');

  var ep_sr_title = jQ('.ep_sr_title');
  ep_sr_title.addClass('h3 mb-0');

  var ep_sr_help = jQ('.ep_sr_help');
  ep_sr_help.addClass('alert alert-primary');

});

