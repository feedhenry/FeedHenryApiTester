function getCurrentAccel(){
 $('#accelerometer .wait_message').show();
  $fh.acc({interval: 0}, function(accel){
   var resultHtml = "";
    for(var key in accel){
      resultHtml += "<p>" + key + " : " + accel[key] + "</p>";
    }
    $('#accelerometer .wait_message').hide();
    $('#accelerometer .result').html(resultHtml).show();
  }, function(msg){
    alert("Error: " + msg);
  })
}

function watchAccel(){
    $('#accelerometer .wait_message').show();
    $fh.acc({interval: 1000}, function(accel){
      var resultHtml = "";
      for(var key in accel){
        resultHtml += "<p>" + key + " : " + accel[key] + "</p>";
      }
      $('#accelerometer .wait_message').hide();
      $('#accelerometer .result').html(resultHtml).show();
    }, function(msg){
      alert("Error: " + msg);
    })

}

function stopWatchAccel(){
    $fh.acc({act:'unregister'}, function(){
      $('#accelerometer .result').html("Stopped");
    })
}
