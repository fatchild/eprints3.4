/*
 *
 * Append Bootstrap styling to table
 * To customize css, use table not bootstrap classes
 *
 * */

var jQ = jQuery.noConflict();

jQ(document).ready(function () {

  var table = jQ('table');
  table.addClass('table table-bordered shadow-sm');

});

