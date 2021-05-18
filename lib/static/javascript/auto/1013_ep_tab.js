/*
 **
 ** Append Bootstrap styling to ep_tab
 ** To customize css, use ep_tab not bootstrap classes
 **
 ** */

var jQ = jQuery.noConflict();

jQ(document).ready(function () {

  var ep_tab = jQ('.ep_tab');

  var ep_tab_bar = jQ('.ep_tab_bar');

  ep_tab_bar.addClass('nav nav-tabs');
  ep_tab_bar.find('a').addClass('nav-link bg-light border'); 
  ep_tab_bar.children('li').addClass('nav-item');  

  var ep_tab_bar_li_a_first = jQ('.ep_tab_bar > li:first-child > a');
  ep_tab_bar_li_a_first.addClass('ep_tab_selected active').removeClass("bg-light border");  

  var ep_tab_panel = jQ('.ep_tab_panel');
  ep_tab_panel.addClass('border border-top-0 shadow p-3');
  ep_tab_panel.children('div').addClass('d-none ');
  
  var ep_tab_panel_first_panel = jQ('.ep_tab_panel > div#c1_panel_0');
  ep_tab_panel_first_panel.addClass('d-block');

  var firstPanel = jQ('.ep_tab_panel > div:nth-child(1)');
  firstPanel.removeClass('ep_no_js d-none').addClass('d-block');

  var firstPanel = jQ('.ep_tab_panel > div:nth-child(2)');
  firstPanel.removeClass('ep_no_js d-none').addClass('d-block');

  var allTabs = jQ('[id*=_tab_]');
  allTabs.click(function(event) {
    event.preventDefault();

    var tabPanelId = jQ(this).attr('id').slice(-1);

    var panel_id = jQ("[id*=_panel_" + tabPanelId + "]");
    ep_tab_panel.children('div').removeClass('d-block ep_no_js').addClass('d-none');
    panel_id.removeClass('d-none ep_no_js').addClass('d-block');

    var tab_id = jQ("[id*=_tab_" + tabPanelId + "]");
    ep_tab_bar.find('a').removeClass('ep_tab_selected active').addClass('bg-light border');
    tab_id.find('a').addClass('ep_tab_selected active').removeClass("bg-light border");

  }); 


});

function ep_showTab() {
  // TODO: fix properly, currently in place to stop the console complaining.
}
