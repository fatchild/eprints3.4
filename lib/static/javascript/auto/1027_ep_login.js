/*
 *
 * Append Bootstrap styling to ep_login
 * To customize css, use ep_login not bootstrap classes
 *
 * */

var jQ = jQuery.noConflict();

jQ(document).ready(function () {

  var ep_login_form = jQ('[action="/cgi/users/login"]');
  ep_login_form.addClass('jumbotron text-center');

  var ep_login_form_table = jQ('.ep_login_form_table');
  ep_login_form_table.children('div').addClass('pt-3');
  ep_login_form_table.closest('.ep_block').removeClass('p-3 d-flex justify-content-center');

  var loginEntry = jQ('[name="login_username"]');
  loginEntry.parent('div').addClass('d-inline');

  var loginEntry = jQ('[name="login_password"]');
  loginEntry.parent('div').addClass('d-inline');

  var loginButton = jQ('[value="Login"]');
  loginButton.addClass('m-4');

});

