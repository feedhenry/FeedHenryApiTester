function send(type){
 var types = ['email', 'sms', 'im'];
  if(type == 0){
    $('#email_content input[type=text]').val('');
    $('#email_content textarea').val('');
    $('#sms_content').hide();
    $('#email_content').show();
    $('#send_email_btn').unbind().click(function(e){
      $fh.send({type:types[type], to:$('#email_to').val(), cc:$('#email_cc').val(), subject:$('#email_sub').val(), body:$('#email_body').val()});
      $('#email_content').hide();
    })
  }else if(type == 1){
    $('#sms_content input[type=text]').val("");
    $('#email_content').hide();
    $('#sms_content').show();
    $('#sms_content .input_item').show();
     $('#send_sms_btn').unbind().click(function(e){
    	 var body = $('#sms_content_field').val();
    	 var doBg = $('#sms_bg_field').attr("checked");
        $fh.send({type:types[type], to:$('#sms_to').val(), body: body, background: doBg}, function(){
        	alert("Message sent");
        }, function(err){
        	alert("Error sending sms : " + err);
        });
        $('#sms_content').hide();
     })
    
  }
}
