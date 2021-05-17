/*
 *
 * Append Bootstrap styling to ep_create_user
 * To customize css, use ep_create_user not bootstrap classes
 *
 * */

var jQ = jQuery.noConflict();

jQ(document).ready(function () {

  var ep_create_user_form = jQ('[action="/cgi/register"]');
  ep_create_user_form.addClass('jumbotron font-weight-bold');
  ep_create_user_form.find('.ep_form_field_input').addClass('d-flex justify-content-center');
  ep_create_user_form.find('.ep_table_row').addClass('d-table-row');
  ep_create_user_form.find('.ep_table_cell').removeClass('border');
  ep_create_user_form.find('.ep_multi_heading').addClass('border-bottom border-right border-dark');
  ep_create_user_form.find('.ep_multi_input').addClass('border-bottom border-dark'); 
  ep_create_user_form.find('[value="Register"]').parent('div').addClass('d-flex justify-content-center'); 

});

