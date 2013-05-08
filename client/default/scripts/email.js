
var attachmentPath;
function send(type){
 var types = ['email', 'sms', 'im'];
  if(type == 0){
    $('#email_content input[type=text]').val('');
    $('#email_content textarea').val('');
    $('#sms_content').hide();
    $('#email_content').show();
    $('#email_attach').unbind().click(function(e){
      $fh.cam({act:'picture', source:'photo', uri: true}, function(res){
        window.resolveLocalFileSystemURI(res.uri, function(fileEntry){
          console.log("File path is " + fileEntry.fullPath);
          attachmentPath = fileEntry.fullPath;
          console.log("Add attachment: path = " + attachmentPath);
        });
        
      }, function(msg, err){
        $('#send_result').show().find("p").html("failed to choose attachment. Error: " + err);
      });
    });
    $('#send_email_btn').unbind().click(function(e){
    var htmlBody = "<h1>" + $('#email_body').val() + "</h1>";
    var attachments = [];
    if(attachmentPath){
      attachments.push(attachmentPath);
    }
    $fh.send({type:types[type], to:$('#email_to').val(), cc:$('#email_cc').val(), subject:$('#email_sub').val(), body: htmlBody, isHtml: true, attachments: attachments}, function(res){
             $('#send_result').show().find("p").html("Email " + res);
             }, function(err){
               $('#send_result').show().find("p").html("failed to send email. Error: " + err);
             });
      $('#email_content').hide();
    })
  }else if(type == 1){
    $('#sms_content input[type=text]').val('');
    $('#email_content').hide();
     $('#sms_content').show();
     $('#send_sms_btn').unbind().click(function(e){
        $fh.send({type:types[type], to:$('#sms_to').val(), body:$('#sms_body').val()});
        $('#sms_content').hide();
     })
    
  }
}
