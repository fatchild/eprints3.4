/*
 **
 ** Append Bootstrap styling to ep_upload_doc
 ** To customize css, use ep_upload_doc not bootstrap classes
 **
 ** */

var jQ = jQuery.noConflict();

jQ(document).ready(function () {
 
    ep_upload_docStyling();

});
 
function ep_upload_docStyling() {
    var ep_upload_doc = jQ('.ep_upload_doc');
    ep_upload_doc.addClass('card bg-light shadow m-3 p-3');

    var ep_upload_doc_title_bar = jQ('.ep_upload_doc_title_bar');
    ep_upload_doc_title_bar.addClass('border-bottom');

    var ep_upload_fields = jQ('.ep_upload_fields');
    ep_upload_fields.addClass('w-100');

    var ep_form_internal_button = jQ('.ep_upload_doc_toolbar > .ep_form_internal_button');
    ep_form_internal_button.addClass('btn btn-primary text-center');
    ep_form_internal_button.parent('.ep_upload_doc_toolbar').addClass('text-center p-3');

    optionsToggle();

    var ep_upload_fields = jQ('.ep_upload_fields');
    ep_upload_fields.addClass('d-table');

    var ep_upload_fields_div = jQ('.ep_upload_fields > div');
    ep_upload_fields_div.addClass('d-table-row'); 

    var ep_table_cell = jQ('.ep_table_cell');
    ep_table_cell.addClass('d-table-cell border-bottom p-1');

    var ep_multi_input = jQ('.ep_multi_input');
    ep_multi_input.addClass('border-left');

    var ep_multi_heading = jQ('.ep_upload_fields > div > .ep_multi_heading');
    ep_multi_heading.addClass('');

    var ep_upload_doc_expansion_bar = jQ('.ep_upload_doc_expansion_bar');
    ep_upload_doc_expansion_bar.addClass('text-right p-2'); 

    var ep_upload_doc_title_bar_inner = jQ('.ep_upload_doc_title_bar_inner');
    ep_upload_doc_title_bar_inner.addClass('d-table w-100');
    ep_upload_doc_title_bar_inner.children('div').addClass('d-table-row');
    ep_upload_doc_title_bar_inner.children('div').children('div').addClass('d-table-cell');

    var ep_upload_doc_title_bar_inner_left = jQ('.ep_upload_doc_title_bar_inner_left');
    ep_upload_doc_title_bar_inner_left.addClass('text-left w-75');

    var ep_upload_doc_icon_info = jQ('.ep_upload_doc_icon_info');
    ep_upload_doc_icon_info.addClass('p-1 row');
    
    var ep_upload_doc_icon_info_div = jQ('.ep_upload_doc_icon_info > div:first-child');
    ep_upload_doc_icon_info_div.addClass('col-2 p-3');

    var ep_upload_doc_title = jQ('.ep_upload_doc_title');
    ep_upload_doc_title.addClass('col-8 pl-0');

    var ep_upload_doc_actions_inner_div = jQ('.ep_upload_doc_actions_inner > div');
    ep_upload_doc_actions_inner_div.addClass('d-flex justify-content-end');
    ep_upload_doc_actions_inner_div.children().addClass('ml-2'); 

}

