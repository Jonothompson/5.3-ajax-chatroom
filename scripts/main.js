(function(){
  'use strict';

  var username = '';
  
  var messages = "";
  
  var currentTime = new Date();
  
  var textEntered = '';

  $(document).ready(function(){

    route();

    $(document).on('submit', '.login-form', function(event){
      event.preventDefault();
      username = $(this).find('.login-form-username').val();
      window.location.hash = '/chat';
    });

    $(window).on('hashchange', function(event){
      event.preventDefault();
      route();
    });
  });

  function route() {
    switch(window.location.hash) {
      case '':
        $('.application').html(JST['login']());
        break;
      case '#/chat':
        renderChat();
        break;
    }
  }

  function renderChat() {
    getMessages();
    $('.application').html(JST['chat']());
    }
    
  function getMessages() {
    $.ajax({
      url: "http://tiny-lasagna-server.herokuapp.com/collections/messages/",
  	 }).then(function(incomingMessages){
       console.log(incomingMessages);
       $('.application').html(JST['chat'](incomingMessages));
     });
    }
  	
    
   $(document).on('submit', '.chat-form', function(event){
     event.preventDefault();
     textEntered = $(this).find('.chat-form-message').val();
   $.ajax({
     url: "http://tiny-lasagna-server.herokuapp.com/collections/messages/",
     type: "POST",
     data: {
       username: username,
       created_at: currentTime,
       message: textEntered,
     }
   }); 
   getMessages();
 });


        function deleteInvalidMessages(){
      $.ajax({
        url: "http://tiny-lasagna-server.herokuapp.com/collections/messages/"
      }).then(function(messages) {
        console.log(messages);
        var invalid = _.reject(messages, function(message) {
          return message.hasOwnProperty('username')
              && message.hasOwnProperty('created_at')
              && message.hasOwnProperty('content')
        });
        console.log(invalid);
        invalid.forEach(function(message) {
          $.ajax({
            url: "http://tiny-lasagna-server.herokuapp.com/collections/messages/" + message._id,
            type: "DELETE"
          })
        });
      });
    } 
// window.setInterval(1000);
})();