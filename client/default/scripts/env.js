function showEnv(){
  $fh.env({}, function(env){
    $('#env_details').html('<p>' + JSON.stringify(env) + '</p>').show();
    if(window.device){
      $('#env_details').append('<p> Cordova: ' + JSON.stringify(window.device) + '</p>');
    }
  }, function(err){
    alert("$fh.env failed!");
  });
}
