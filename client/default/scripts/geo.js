function getCurrentLocation(){
  $('#geolocation .wait_message').show();
  $fh.geo({interval: 0}, function(geo){
   var resultHtml = "";
    for(var key in geo){
      resultHtml += "<p>" + key + " : " + geo[key] + "</p>";
    }
    $('#geolocation .wait_message').hide();
    $('#geolocation .result').html(resultHtml).show();
  }, function(msg){
    alert("Error: " + msg); 
  }) 
}

function watchLocation(){
    $('#geolocation .wait_message').show();
    $fh.geo({interval: 5000}, function(geo){
      var resultHtml = "";
      for(var key in geo){
        resultHtml += "<p>" + key + " : " + geo[key] + "</p>";
      }
      $('#geolocation .wait_message').hide();
      $('#geolocation .result').html(resultHtml).show();
     }, function(msg){
      alert("Error: " + msg); 
     }); 
}

function stopWatchLocation(){
    $fh.geo({act:'unregister'}, function(){
            $('#geolocation .result').html("Stopped");
    });
}
