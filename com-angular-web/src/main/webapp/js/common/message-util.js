var MessageReader = function() {

  //To load messages from webapp/resources/screenMessages.properties
  this.initProps = function() {
    jQuery.i18n.properties({
      name : [ 'environment', 'screenMessages' ], // Property file name
      path : '../resources/', // url
      mode : 'map' // Expansion mode (Do not specify values other than map)
    });
  }

  //Get property message from its ID and Args
  this.getMessage = function(messageId, args) {
    var message = jQuery.i18n.prop(messageId, args);
    // It is required to change the line feed code to br tag for displaying messages on screens
    message = message.replace(/[\n\r]/g, "<br />");
    return message;
  }

};

var messages = new MessageReader();
messages.initProps();
