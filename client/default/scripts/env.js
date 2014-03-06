function showEnv(){
  $fh.env({}, function(env){
    $('#env_details').html('<p>' + JSON.stringify(env) + '</p>').show();
  }, function(err){
    alert("$fh.env failed!");
  });
}
