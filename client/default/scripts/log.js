   function logMessage(){
 var message = $('#message_to_log').val();
 if(message == ""){
  alert("PLease enter a message!");
  return;
}
 //$fhclient.log.debug(message);
 $fh.log({message:message});
  alert("Message logged. Please check the log file");
}

