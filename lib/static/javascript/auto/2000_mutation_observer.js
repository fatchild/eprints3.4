/*
 **
 ** MutationObserver to detect for dynamically generated eprints HTML content.
 ** Each function is declared within a 1***_ep_some_class.js file and updates eprint classes with bootstrap classes.
 **
 ** 
*/

var jQ = jQuery.noConflict();

jQ(document).ready(function () {

  var body_elem = document.getElementById('bootstrapMutationObserver');
  var body_options = {
      childList: true,
      subtree: true
    };
  var body_observer = new MutationObserver(body_Callback);

  function body_Callback(mutations) {
    if ( mutations[0].type === 'childList' ) {

        // Add styling functions here
        ep_msg_messageStyling();
        UploadMethod_file_progressStyling();
        doc_lightboxStyling();
        ep_upload_docStyling();
        ep_form_action_buttonStyling();
        ep_message_warningStyling();
    }
  }
  body_observer.observe(body_elem, body_options);

});
